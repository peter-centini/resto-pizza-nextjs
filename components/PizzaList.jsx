import styles from "../styles/PizzaList.module.css"
import PizzaCard from "./PizzaCard";

const PizzaList = () => {
  return (
  <div className={styles.container}>
      <h1 className={styles.title}> The Best PIZZA IN TOWN </h1>
      <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sapiente nesciunt tempora dignissimos! Ex amet, recusandae ad sint cumque sit totam veniam, explicabo qui ipsa, vero dignissimos. Ullam, deleniti corporis.
          Reiciendis quas ducimus accusamus ea corrupti, incidunt, totam assumenda eaque dolore corporis, perferendis quisquam et voluptatem quod. Porro error aspernatur vero. Quas dolorum officiis libero debitis iure harum, eum expedita!
      </p>
    <div className={styles.wrapper}>
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
       
    </div>
  </div>
  )
}

export default PizzaList;
