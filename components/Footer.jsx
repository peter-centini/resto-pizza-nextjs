import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            VENEZ PASSEZ UNE SOIRÉE DANS UN CADRE IDYLLIQUE.
            <br></br>
            <br></br>
            NOUS L&#8217; AVONS FAIT TOUTE NOS PIZZA SONT CUITE AU FEUX DE BOIS .
            <br />
            <br>
            </br>
            LA DÉLICE PIZZA, UNE TRANCHE DE PIZZA BIEN CHAUDE.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>TROUVER NOS RESTAURANTS</h1>
          <p className={styles.text}>
            1654 Rue Diego de la Végas.
            <br /> LasVégas, 85000
            <br /> (+33) 12.34.56.789
          </p>
          <p className={styles.text}>
            256 Karl Lagarfeild.
            <br /> Pari, 75022
            <br /> (+33) 34.56.78.912
          </p>
          <p className={styles.text}>
            114 Elon Musk.
            <br /> NewYork, 92000
            <br /> (602) 12.34.5§.780
          </p>
        </div>
        <div classame={styles.card}>
          <h1 className={styles.title}>HORAIRES D&#8217;OUVERTURE </h1>
          <p className={styles.text}>
            DU LUNDI AU VENDREDI DE
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SAMEDI - DIMANCHE
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
