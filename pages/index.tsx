import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
//import { your } from '../.next/static/chunks/pages/_app';
import Footer from '../@website/layout/Footer'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>website.et</title>
        <meta name="description" content="website.et by Qintot Technology" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="/">website.et!</a> <br/>
        </h1>

        <p className={styles.description}>
           Select Service{' '}
        </p>

        <div className={styles.grid}>
          <a href="website" className={styles.card}>
            <h2>Website Development &rarr;</h2>
            <p>Get professional website for your business.</p>
          </a>

          <a href="digitalMarketing" className={styles.card}>
            <h2>Digital Marketing &rarr;</h2>
            <p>Advertise your products {' & '} Services!</p>
          </a>

          <a
            href="online-shop"
            className={styles.card}
          >
            <h2>Online Shop &rarr;</h2>
            <p>Get Ecomerce for Your Business!</p>
          </a>

          <a
            href="consultancy"
            className={styles.card}
          >
            <h2> Consultancy &rarr;</h2>
            <p>
              Book professional IT Consultant!
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  )
}

export default Home
