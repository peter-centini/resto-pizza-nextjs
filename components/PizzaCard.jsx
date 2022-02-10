import styles from "../styles/PizzaCard.module.css"
import Image from "next/image";

const PizzaCard = () => {
  return (
      <div className={styles.container}>
          <Image src="/img/pizza.png" alt="" width="500" height="500" />
          <h1 className={styles.title}> Les meilleurs Pizzas</h1>
          <span className={styles.price}>
         19.90€</span>
         <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem libero voluptate labore eum earum quidem. Adipisci ex accusamus voluptate aperiam eaque, odit alias omnis autem nam quisquam ducimus accusantium quidem.
         </p>
         
      </div>
  )
}

export default PizzaCard;
