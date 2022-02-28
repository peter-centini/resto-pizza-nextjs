import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";



const Product = ({ pizza }) => {   
    const [price, setPrice] = useState(pizza.prices[0]);
    const [size, setSize] = useState(0);
    const [extras, setExtras] = useState([])

    const changePrice = (number) => {
    setPrice(price + number);
  };
    const handleSize =(sizeIndex) =>{
        const difference = pizza.prices[sizeIndex]- pizza.prices[size];
        setSize(sizeIndex);
        changePrice(difference);
    }

    const handleChange = (e, option) => {
    const checked = e.target.checked;

    if (checked) {
      changePrice(option.price);
      setExtras((prev) => [...prev, option]);
    } else {
      changePrice(-option.price);
      setExtras(extras.filter((extra) => extra._id !== option._id));
    }
  };

    
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <Image src={pizza.img}
                        objectFit="contain"
                        layout="fill" alt="" />
                </div>
            </div>
            <div className={styles.right}>
                <h1 className={styles.title}>{pizza.title}</h1>
                <span className={styles.price}>{price} €</span>
                <p className={styles.desc}>{pizza.desc}</p>
                <h3 className={styles.chosse}>Choisir la taille</h3>
                <div className={styles.sizes}>
                    <div className={styles.size} onClick={() => handleSize(0)}>
                        <Image src="/img/size.png" layout="fill" alt="" />
                        <span className={styles.number}>Petit</span>
                    </div>
                    <div className={styles.size} onClick={() => handleSize(1)}>
                        <Image src="/img/size.png" layout="fill" alt="" />
                        <span className={styles.number}>Moyennne</span>
                    </div>
                    <div className={styles.size} onClick={() => handleSize(2)}>
                        <Image src="/img/size.png" layout="fill" alt="" />
                        <span className={styles.number}>Grande</span>
                    </div>
                </div>
                <h3 className={styles.chosse}>Choisi les ingrédiens additionnelles</h3>
                <div className={styles.ingredients}>
                    {pizza.extraOptions.map((option) => (
                    <div className={styles.option} key={option._id}>
                        <input
                            type="checkbox"
                            id={option.text}
                            name={option.text}
                            className={styles.checkbox}
                            onChange={(e)=> handleChange(e, option)}
                             />
                        <label htmlFor="double">{option.text}</label>
                    </div>
                 ))}

                    
                </div>
                <div className={styles.add}>
                    <input type="number" defaultValue={1}
                        className={styles.quantity} />
                    <button className={styles.button}>Add to Cart </button>
                </div>
            </div>
        </div>
    );
};

export const getServerSideProps = async ({ params }) =>{
  const res = await axios.get(`http://localhost:3000/api/products/${params.id}`);
  return {
    props: {
      pizza: res.data,
    },
  }
};

export default Product;
