import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Featured from "../components/Featured"
import PizzaList from '../components/PizzaList';
import axios from "axios";

export default function Home({ pizzaList }) {

  
  return (
    <div className={styles.container}>
      <Head>
        <title>Restaurant Pizzeria</title>
        <meta name="description" content="Pizzerria Nuaillé d'aunis" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  <Featured />
      <PizzaList pizzaList={pizzaList} />
    </div>
  );
}

export const getServerSideProps = async () =>{
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      pizzaList: res.data,
    },
  }
};
