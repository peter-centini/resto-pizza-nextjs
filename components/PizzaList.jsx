import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Les meilleurs Pizza sont chez Nous</h1>
      <p className={styles.desc}>
        Toute nos pizza sont cuite au feu de bois dans notre four traditionnelle,elles sont garnies avec des produits frais, cultivée localement
        nos fournisseur se trouve a moins de 50km de notre boutique,
        nous apportons un soin particulier a leur fabrication et a leur cuisson .
      </p>
      <div className={styles.wrapper}>
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;