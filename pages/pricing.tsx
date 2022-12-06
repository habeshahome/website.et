import React from 'react'
import Head from 'next/head'
import Layout1 from '../@theme/layouts/layout1'
import { PricingBanner } from '../components/banners'
import { Box } from '@mui/system'
import Wrapper from '../components/surfaces/wrappers/Wrapper'
import { ChapterNav } from '../@theme/layouts/chapter'

export default function Pricing (): JSX.Element {
  // const { auth } = useContext(AuthContext)
  return (
    <Layout1>
      <Head>
        <title>Pricing</title>
        <meta
          name="description"
          content="Website Developmnent Price in Ethiopia, Online Advertising Price, Addis Ababa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ChapterNav
        chapter='Pricing'
        items={[]}
      />

      <Wrapper>
        <Box sx={{ minHeight: '100vh' }}>
          <PricingBanner />
        </Box>
      </Wrapper>
    </Layout1>
  )
}
