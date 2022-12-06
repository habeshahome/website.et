import React from 'react'
import Head from 'next/head'
import Layout1 from '../../../@theme/layouts/layout1'
import styles from '../../../styles/Home.module.css'
import { DigitalMarketingBanner } from '../../../components/banners'
import { Box } from '@mui/system'

export default function DigitalMarketing (): JSX.Element {
  // const { auth } = useContext(AuthContext)
  return (
    <Layout1>
    <div className={styles.container}>
      <Head>
        <title>Digital Marketing</title>
        <meta name="description" content="Digital Marketing Service in Ethiopia, Addis Ababa, Instagram, Facebook, Tiktok, Youtube" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box sx={{ minHeight: '100vh' }}>
        <DigitalMarketingBanner />
      </Box>

    </div>
    </Layout1>
  )
}
