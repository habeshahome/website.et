import React from 'react'
import Head from 'next/head'
import Layout1 from '../../../@theme/layouts/layout1'
import styles from '../../../styles/Home.module.css'
import { SellOnlineBanner } from '../../../components/banners'
import { Box } from '@mui/system'
import InViewWrapper from '../../../components/animation/InViewWrapper'

export default function OnlineShop (): JSX.Element {
  // const { auth } = useContext(AuthContext)
  return (
    <Layout1>
    <div className={styles.container}>
      <Head>
        <title>Online Shop</title>
        <meta name="description" content="Sell Online in Ethiopia, Online Shop in Ethiopia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={{ minHeight: '100vh' }}>
          <SellOnlineBanner />
        </Box>
        <Box sx={{ minHeight: '100vh' }}>
          <SellOnlineBanner />
        </Box>

      <InViewWrapper>
        <Box sx={{ minHeight: '100vh' }}>
          <SellOnlineBanner />
        </Box>
      </InViewWrapper>
    </div>
    </Layout1>
  )
}
