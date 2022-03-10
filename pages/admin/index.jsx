import styles from "../../styles/Admin.module.css";
import Image from "next/image"

const index = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <h1 className={styles.title}>Products</h1>
                <table className={styles.table}>
                    <tbody>
                        <tr className={styles.trTitle}>
                            <th>Image</th>
                            <th>ID</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr className={styles.tdTitle}>
                            <td>
                                <Image
                                    src="/img/pizza.png"
                                    width={50}
                                    height={50}
                                    objectFit="cover"
                                    alt="" />
                            </td>
                            <td>PizzaId</td>
                            <td>Pizza Title</td>
                            <td>50€</td>
                            <td>
                                <button clasName={styles.button}> Edit </button>
                                <button clasName={styles.button}> Delete </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={styles.item}>
                <h1 className={styles.title}>Orders</h1>
                <table className={styles.table}>
                    <tbody>
                        <tr className={styles.trTitle}>
                            <th>Id</th>
                            <th>Customer</th>
                            <th>Title</th>
                            <th>Total</th>
                            <th>Payment</th>
                            <th>Statuts</th>
                            <th>Action</th>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr className={styles.trTitle}>
                            <td>12345678</td>
                            <td>Peter Centini</td>
                            <td>50€</td>
                            <td>Paid</td>
                            <td>preparing</td>
                            <td>
                                <button clasName={styles.button}> Next stage </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
        </div>
        </div>
    )
}

export default index