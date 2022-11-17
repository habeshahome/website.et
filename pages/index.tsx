import React from 'react'
import Head from 'next/head'
import Layout1 from '../@theme/layouts/layout1'
import styles from '../styles/Home.module.css'
import { Box } from '@mui/system'
import MarketplaceBanner from '../components/banners/MarketplaceBanner'

export default function Home (): JSX.Element {
  // const { auth } = useContext(AuthContext)
  return (
    <Layout1>
    <div className={styles.container}>
      <Head>
        <title>website.et</title>
        <meta name="description" content="Website Developer in Ethiopia, Digital Marketing in Ethiopia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box sx={{ minHeight: '100vh' }}>
        <MarketplaceBanner />
      </Box>

    </div>
    </Layout1>
  )
}
