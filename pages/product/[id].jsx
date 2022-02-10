import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react";


const [Product] = () => {
    const [size, setSize] = useState(0);
    const pizza = {
        id: 1,
        img: "/img/pizza.png",
        name:"CAMPAGNARDE",
        prix:[19.99, 23.99, 27.99],
        desc: "la garniture contient des pommes de terre, fromage rapée, des oignons, des lardons, du camenbert, du fromage de chévre"
    }
  return (
  <div className={styles.container}>
      <div className={styles.left}>
          <div className={styles.imgContainer}>
              <Image src={pizza.img}
              objectFit="contain"
              layout="fill" alt=""/>
          </div>
      </div>
      <div className={styles.right}>
          <h1 className={styles.title}>{pizza.name}</h1>
          <span className={styles.price}>€{pizza.prix[size]}</span>
          <p className={styles.desc}>{pizza.desc}</p>
          <h3 className={styles.chosse}> Chosse the size</h3>
      </div>
  </div>
  )
}

export default [Product];
