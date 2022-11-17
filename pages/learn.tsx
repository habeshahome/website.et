import React from 'react'
import Head from 'next/head'
import Layout1 from '../@theme/layouts/layout1'
import styles from '../styles/Home.module.css'
import { LearnBanner } from '../components/banners'
import { Box } from '@mui/system'

export default function Learn (): JSX.Element {
  // const { auth } = useContext(AuthContext)
  return (
    <Layout1>
    <div className={styles.container}>
      <Head>
        <title>Learn</title>
        <meta name="description" content="Sell Online in Ethiopia, Online Shop in Ethiopia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box sx={{ minHeight: '100vh' }}>
        <LearnBanner />
      </Box>

    </div>
    </Layout1>
  )
}