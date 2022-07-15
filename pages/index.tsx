import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
//import { your } from '../.next/static/chunks/pages/_app';
import Link from 'next/link'

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
          Welcome to <Link href="/">website.et!</Link> <br/>
        </h1>

        <p className={styles.description}>
           Select Service{' '}
        </p>

        <div className={styles.grid}>
          
        </div>
      </main>

      <footer className={styles.footer}>
         
      </footer>
    </div>
  )
}

export default Home
