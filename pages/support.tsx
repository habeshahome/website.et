import React from 'react'
import Head from 'next/head'
import Layout1 from '../@theme/layouts/layout1'
import styles from '../styles/Home.module.css'
import { WebsiteBanner } from '../components/banners'
import { Box } from '@mui/system'

export default function Support (): JSX.Element {
  // const { auth } = useContext(AuthContext)
  return (
    <Layout1>
    <div className={styles.container}>
      <Head>
        <title> Support </title>
        <meta name="description" content="Get technical support in Ethiopia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box sx={{ minHeight: '100vh' }}>
        Support
        <WebsiteBanner />
      </Box>

    </div>
    </Layout1>
  )
}
