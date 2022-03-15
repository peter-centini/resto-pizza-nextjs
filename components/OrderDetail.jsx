import { useState } from "react";
import styles from "../styles/OrderDetail.module.css";

const OrderDetail = ({ total, createOrder }) => {
    const [customer, setCustomer] = useState("");
    const [address, setAddress] = useState("");


    const handleClick = () => {
        createOrder({ customer, address, total, method: 0 });
    };

    // function closed() {
    //     const [isOpen, setOpen] = useState();
    //     setopen(true)
    // }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                {/* <span onClick={(closed) => (setOpen(false))} className={styles.close}>
          X
        </span> */}
                <h1 className={styles.title}>Vous paierez {total} € aprés la livraison.</h1>
                <div className={styles.item}>
                    <label className={styles.label}>Nom Prénom</label>
                    <input
                        placeholder="John Doe"
                        type="text"
                        className={styles.input}
                        onChange={(e) => setCustomer(e.target.value)}
                    />
                </div>
                <div className={styles.item}>
                    <label className={styles.label}>Numéro de Téléphoner</label>
                    <input
                        type="text"
                        placeholder="+1 234 567 89"
                        className={styles.input}
                    />
                </div>
                <div className={styles.item}>
                    <label className={styles.label}>Votre Address</label>
                    <textarea
                        rows={5}
                        placeholder="Elton St. 505 NY"
                        type="text"
                        className={styles.textarea}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <button className={styles.button} onClick={handleClick}>
                    Commander
                </button>
            </div>
        </div>
    );
};

export default OrderDetail;
