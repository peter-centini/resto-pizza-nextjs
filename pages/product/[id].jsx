import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react";


const Product = () => {
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
          <div className={styles.sizes}>
           <div className={styles.size} onClick={()=>setSize(0)}>
            <Image src="/img/size.png" layout="fill" alt=""/>
            <span className={styles.number}>Small</span>
           </div>
            <div className={styles.size} onClick={()=>setSize(1)}>
            <Image src="/img/size.png" layout="fill" alt=""/>
            <span className={styles.number}>Medium</span>
           </div>
            <div className={styles.size} onClick={()=>setSize(2)}>
            <Image src="/img/size.png" layout="fill" alt=""/>
            <span className={styles.number}>Large</span>
           </div>
          </div>
          <h3 className={styles.chosse}>Choose additional ingredien</h3>
          <div className={styles.ingredients}>
              <div className={styles.option}>
                  <input 
                  type="checkbox"
                  id="double"
                  name="double"
                  className={styles.checkbox}/>
                  <label htmlFor="double">Double Ingrédients</label>
              </div>
                <div className={styles.option}>
                  <input 
                  type="checkbox"
                  id="cheese"
                  name="cheese"
                  className={styles.checkbox}/>
                  <label htmlFor="cheese">Extra cheese</label>
              </div>
               <div className={styles.option}>
                  <input 
                  type="checkbox"
                  id="lardon"
                  name="lardon"
                  className={styles.checkbox}/>
                  <label htmlFor="lardon">Extra lardon</label>
              </div>
               <div className={styles.option}>
                  <input 
                  type="checkbox"
                  id="spice"
                  name="spice"
                  className={styles.checkbox}/>
                  <label htmlFor="spice">Extra spice</label>
              </div>
          </div>
          <div className={styles.add}>
              <input type="number" defaultValue={1}
              className={styles.quantity} />
              <button className={styles.button}>Add to Cart </button>
          </div>
      </div>
  </div>
  )
}

export default Product;
