import styles from "../styles/Cart.module.css";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import axios from "axios";
import { useRouter } from "next/router";
import { reset } from "../redux/cartSlice";
import OrderDetail from "../components/OrderDetail";



const cart = () => {
    //cette valeur sont les accessible dans l'interface utilisateur
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const cart = useSelector((state) => state.cart);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(false);
    const amount = cart.total;
    const currency = "USD";
    const style = { layout: "vertical" };
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const dispatch = useDispatch();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [cash, setCash] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();

    const createOrder = async (data) => {
        try {
            const res = await axios.post("http://localhost:3000/api/orders", data);
            if (res.status === 201) {
                dispatch(reset());
                router.push(`/orders/${res.data._id}`);
            }
        } catch (err) {
            console.log(err);
        }
    };


    const ButtonWrapper = ({ currency, showSpinner }) => {
        //usePayPalScriptReducer ne peut être utilisé qu'à l'intérieur des enfants de PayPalScriptProviders       
        // C'est la principale raison d'envelopper les PayPalButtons dans un nouveau composant
        const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

        useEffect(() => {
            dispatch({
                type: "resetOptions",
                value: {
                    ...options,
                    currency: currency,
                },
            });
            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [currency, showSpinner]);
        return (
            <>
                {showSpinner && isPending && <div className="spinner" />}
                <PayPalButtons
                    style={style}
                    disabled={false}
                    forceReRender={[amount, currency, style]}
                    fundingSource={undefined}
                    createOrder={(data, actions) => {
                        return actions.order
                            .create({
                                purchase_units: [
                                    {
                                        amount: {
                                            currency_code: currency,
                                            value: amount,
                                        },
                                    },
                                ],
                            })
                            .then((orderId) => {
                                // Votre code ici après avoir créé la commande
                                return orderId;
                            });
                    }}
                    onApprove={function (data, actions) {
                        return actions.order.capture().then(function (details) {
                            const shipping = details.purchase_units[0].shipping;
                            createOrder({
                                customer: shipping.name.full_name,
                                address: shipping.address.address_line_1,
                                total: cart.total,
                                method: 1,
                            });
                        });
                    }}
                />
            </>
        );
    };

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <table className={styles.table}>
                    <tbody>
                        <tr className={styles.tr}>
                            <th>Product</th>
                            <th>Name</th>
                            <th>Extras</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </tbody>
                    <tbody>
                        {cart.products.map((product) => (
                            <tr className={styles.tr} key={product._id}>
                                <td>
                                    <div className={styles.imgContainer}>
                                        <Image src={product.img}
                                            layout="fill"
                                            objectfit="cover"
                                            alt=""
                                        />
                                    </div>
                                </td>
                                <td>
                                    <span className={styles.name}>{product.title}</span>
                                </td>
                                <td>
                                    <span className={styles.extras}>
                                        {product.extras.map(extra => (
                                            <span key={extra._id}>{extra.text}, </span>
                                        ))}
                                    </span>
                                </td>
                                <td>
                                    <span className={styles.price}>{product.price}€</span>
                                </td>
                                <td>
                                    <span className={styles.quantity}>{product.quantity}</span>
                                </td>
                                <td>
                                    <span className={styles.total}>{product.price * product.quantity}€</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>MONTANT TOTAL</h2>
                    <div className={styles.totalText}>
                        <b className={styles.totaltextTitle}>
                            SOUS-TOTAL :
                        </b>{cart.total}€
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totaltextTitle}>
                            RÉDUCTION :
                        </b>00.00€
                    </div>
                    <div className={styles.totalText}>
                        <b className={styles.totaltextTitle}>
                            TOTAL :
                        </b>{cart.total}€
                    </div>
                    {open ? (
                        <div className={styles.paymentMethods}>
                            <button
                                className={styles.payButton}
                                onClick={() => setCash(true)}>
                                paiement à la livraison
                            </button>
                            <PayPalScriptProvider
                                options={{
                                    "client-id": "AWcuRS92G2sjN3pQNNxUJdrFhiOPS7G1CUgBMK5Qp95COCXnlp7nRLa8hOzSZPwwnc7uQfyxxLV-dlVB",
                                    components: "buttons",
                                    currency: "USD",
                                    "disable-funding": "credit,card,p24"
                                }} >
                                <ButtonWrapper currency={currency} showSpinner={false} />
                            </PayPalScriptProvider>
                        </div>
                    ) : (
                        <button onClick={() => setOpen(true)} className={styles.button}>PAYER MAINTENANT !</button>
                    )}
                </div>
            </div>
            {cash && <OrderDetail total={cart.total} createOrder={createOrder} />}
        </div>

    )
};

export default cart;
