import styles from "../styles/Cart.module.css";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
    PayPalScriptProvider,
    PayPalButtons,
    usePayPalScriptReducer,
} from "@paypal/react-paypal-js";




const cart = () => {
    //this value are the props in the ui
    const amount = "2";
    const currency = "USD";
    const style = { layout: "vertical" };
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const [cash, setCash] = useState(false);


    const ButtonWrapper = ({ currency, showSpinner }) => {
        // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
        // This is the main reason to wrap the PayPalButtons in a new component
        const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

        useEffect(() => {
            dispatch({
                type: "resetOptions",
                value: {
                    ...options,
                    currency: currency,
                },
            });
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
                                // Your code here after create the order
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
                            onClick={()=>setCash(true)}>
                            paiement à la livraison
                            </button>
                        <PayPalScriptProvider
                            options={{
                                "client-id": "AbxnWdEg7W8ELPP-0eMGKQuv47OId6qjwLHHhI6WbxT6kfk58_XE6mMZaMjTopF5CFCjQnaPKy_jskEc",
                                components: "buttons",
                                currency: "USD",
                                // "disable-funding": "credit,cart,p24"
                            }} >
                            <ButtonWrapper currency={currency} showSpinner={false} />
                        </PayPalScriptProvider>
                        </div>
                    ) : (
                        <button onClick={() => setOpen(true)} className={styles.button}>PAYER MAINTENANT !</button>
                    )}


                </div>
            </div>
        </div>

    )
};

export default cart;
