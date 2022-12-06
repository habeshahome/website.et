import React from 'react'
import Head from 'next/head'
import Layout1 from '../@theme/layouts/layout1'
import Wrapper from '../components/surfaces/wrappers/Wrapper'
import MarketPlaceCards from '../components/cards/MarketPlaceCards'
import { ChapterNav } from '../@theme/layouts/chapter'

const marketplaceItems =
[
  { title: 'Fast and Secure.', caption: 'Starting from AED - 3002', tag: 'Revenue', img: '/img/store-card.jpeg' },
  { title: 'Great Delligence', caption: 'Always On-time', tag: 'Delligence', img: '/img/store-card.jpeg' },
  { title: 'Flexible Plans', caption: 'Multiple options', tag: 'Flexi', img: '/img/store-card.jpeg' },
  { title: 'Beyond. Expectations!', caption: 'Multiple options', tag: 'Flexi', img: '/img/store-card.jpeg' },
  { title: 'Designed for Success', caption: 'Pixel Perfect', tag: 'Top Level Design', img: '/img/store-card.jpeg' }
]

export default function Contact (): JSX.Element {
  // const { auth } = useContext(AuthContext)
  // const { scrollYProgress } = useScroll()
  return (
    <Layout1>
      <Head>
        <title>Become a Partner</title>
        <meta name="description" content="Partner with website.et, Ethiopia Technology Company, Affiliate Marketing in Ethiopia, Royality Program, Get Payed Online" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChapterNav
        chapter='Partner'
        items={[
          { name: 'Join Affiliate Program', slug: '/account/signin', img: '' },
          { name: 'Sign in', slug: '/account/signin', img: '' }
        ]}
      />

    <Wrapper>

            <MarketPlaceCards
              items={ marketplaceItems }
              leadHeader='Partnership.'
              mainHeader='is the Foundation of Growth'
            />

    </Wrapper>
    </Layout1>
  )
}
