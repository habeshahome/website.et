import React from 'react'
import Head from 'next/head'
import Layout1 from '../@theme/layouts/layout1'
import styles from '../styles/Home.module.css'
import { PricingBanner } from '../components/banners'
import { Box } from '@mui/system'

export default function Pricing (): JSX.Element {
  // const { auth } = useContext(AuthContext)
  return (
    <Layout1>
    <div className={styles.container}>
      <Head>
        <title>Pricing</title>
        <meta
          name="description"
          content="Website Developmnent Price in Ethiopia, Online Advertising Price, Addis Ababa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box sx={{ minHeight: '100vh' }}>
        <PricingBanner />
      </Box>

    </div>
    </Layout1>
  )
}
