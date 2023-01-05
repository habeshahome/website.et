import React from 'react'
import Head from 'next/head'
import Layout1 from '../@theme/layouts/layout1'
import { enUS, amET } from '../i18n'
import MarketplaceBanner from '../components/banners/MarketplaceBanner'
import MarketPlaceCards from '../components/cards/MarketPlaceCards'
import Wrapper from '../components/surfaces/wrappers/Wrapper'
import { language } from '../store'
import { useRecoilValue } from 'recoil'
import DynamicCard from '../components/cards/DynamicCard'
// import DynamicCard from '../components/cards/DynamicCard'

export default function Home (): JSX.Element {
  // const { auth } = useContext(AuthContext)
  const lang = useRecoilValue(language)
  const t = lang === 'en' ? enUS : amET

  const bannerItems = [
    { name: t.WEBSITE, slug: '/website', desc: t.DESIGN, img: null },
    { name: t.SELLING_ONLINE, slug: '/website/online-shop', desc: t.START, img: null },
    { name: t.YOUR_BUSINESS, slug: '/digital-marketing/ppc', desc: t.PROMOTE, img: null },
    { name: t.MORE_CUSTOMERS, slug: '/digital-marketing', desc: t.GET, img: null },
    { name: t.ON_GOOGLE_SEARCH, slug: '/digital-marketing/seo', desc: t.RANK, img: null }
  ]

  const yourBusinessItems =
[
  { title: t.INCREASE_YOUR_REVENUE, caption: t.CUSTOMER_HAPPINES, tag: t.GET_PAYED_ONLINE, img: '/img/online-payment.png' },
  { title: t.PRODUCT_AND_SERVICE, caption: 'Brand', tag: t.SHOW_YOUR_BRAND, img: '/img/your-brand.png' },
  { title: t.YOUR_CUSTOMERS, caption: 'Availability', tag: 'Are you Available to', img: '/img/customer-support.png' },
  { title: t.YOUR_WEBSITE, caption: 'Multiple options', tag: 'Flexi', img: '/img/website-design.png' },
  { title: t.YOUR_SERVICE, caption: 'Multiple options', tag: 'Flexi', img: '/img/online-shop.png' }
]

  const items =
  [
    { title: 'Facebook', caption: '', tag: 'advertise ', img: ' ' },
    { title: '', caption: ' ', tag: 'advertise ', img: ' ' },
    { title: 'Tiktok', caption: ' ', tag: 'advertise ', img: ' ' },
    { title: '', caption: ' ', tag: 'advertise ', img: ' ' },
    { title: '', caption: ' ', tag: 'advertise ', img: ' ' }
  ]

  return (
    <Layout1>
      <Head>
        <title> website.et - { t.THE_BEST_PLACE } </title>
        <meta name="description" content="Website Developer in Ethiopia, Digital Marketing in Ethiopia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Wrapper>
        <MarketplaceBanner
          leadHeader={t.BRAND}
          mainHeader={t.THE_BEST_PLACE}
          items={ bannerItems }
        />

        {/** Cards */}
        <MarketPlaceCards
          items={ yourBusinessItems }
          leadHeader={ t.YOUR_GROWTH }
          mainHeader={ t.IS_OUR_PRIORITY }
        />

        {/* <DynamicCard
          items={ items }
          leadHeader='Only'
          mainHeader='pay for results.'
          width='300px'
          height='300px'
        /> */}

      </Wrapper>
    </Layout1>
  )
}
