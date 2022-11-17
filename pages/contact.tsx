import React from 'react'
import Head from 'next/head'
import Layout1 from '../@theme/layouts/layout1'
import styles from '../styles/Home.module.css'
import { WebsiteBanner } from '../components/banners'
import { Box } from '@mui/system'

export default function Contact (): JSX.Element {
  // const { auth } = useContext(AuthContext)
  return (
    <Layout1>
    <div className={styles.container}>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Contact website.et, Ethiopia Technology Company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box sx={{ minHeight: '100vh' }}>
        Contact
        <WebsiteBanner />
      </Box>

    </div>
    </Layout1>
  )
}
