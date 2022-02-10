import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Featured from "../components/Featured"
import PizzaList from '../components/PizzaList';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Restaurant Pizzeria</title>
        <meta name="description" content="Pizzerria Nuaillé d'aunis" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  <Featured />
  <PizzaList />
    </div>
  );
}

