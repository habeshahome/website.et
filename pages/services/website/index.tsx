import React from 'react'
import Head from 'next/head'
import Layout1 from '../../../@theme/layouts/layout1'
import { WebsiteBanner } from '../../../components/banners'
import { Box } from '@mui/system'

export default function Website (): JSX.Element {
  // const { auth } = useContext(AuthContext)
  return (
    <Layout1>
      <Head>
        <title>website.et</title>
        <meta name="description" content="Website Developer in Ethiopia, Digital Marketing in Ethiopia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box sx={{ minHeight: '100vh' }}>
        <WebsiteBanner />
      </Box>
    </Layout1>
  )
}