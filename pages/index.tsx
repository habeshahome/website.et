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
    {
      title: 'Facebook',
      caption: '',
      tag: 'advertise on ',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png'
    },
    {
      title: 'Instagram',
      caption: '',
      tag: 'advertise on ',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png'
    },
    {
      title: 'Tiktok',
      caption: ' ',
      tag: 'advertise on ',
      img: 'https://cdn4.iconfinder.com/data/icons/social-media-flat-7/64/Social-media_Tiktok-512.png'
    },
    {
      title: 'Google',
      caption: ' ',
      tag: 'advertise on ',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Google_Ads_logo.svg/1641px-Google_Ads_logo.svg.png'
    },
    {
      title: 'Youtube',
      caption: ' ',
      tag: 'advertise on ',
      img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1024px-YouTube_full-color_icon_%282017%29.svg.png'
    }
  ]

  const websiteDesignServices =
  [
    {
      title: ' ',
      caption: '',
      tag: '',
      img: 'https://assets.justinmind.com/wp-content/uploads/2022/06/website-template-justinmind-768x492.png'
    },
    {
      title: ' ',
      caption: '',
      tag: '',
      img: 'https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/2659/posts/37331/image-upload/Porto%20-%20Multipurpose%20Responsive%20HTML%20Template-intro.jpg'
    },
    {
      title: ' ',
      caption: '',
      tag: '',
      img: 'https://irp.cdn-website.com/a8159e71/dms3rep/multi/The+Walker+Firm_Philadelphia-s+Premier+Boutique+Law+Firm+2.png'
    },
    {
      title: ' ',
      caption: ' ',
      tag: '',
      img: 'https://www.vandelaydesign.com/wp-content/uploads/bick-law.jpg'
    }
  ]

  const digitalMarketingServices =
  [
    {
      title: 'Social Media Marketing',
      caption: '',
      tag: '',
      img: 'https://media.istockphoto.com/id/1346575545/photo/3d-render-of-social-media-business-concept.jpg?s=612x612&w=0&k=20&c=1083IFHVsot9K6aguY59kOLCWIijhPQT69oYJB9SYS0='
    },
    {
      title: 'Pay-per-Click',
      caption: '',
      tag: '',
      img: 'https://sitechecker.pro/wp-content/uploads/2017/12/serp.png'
    },
    {
      title: 'Performance Marketing',
      caption: '',
      tag: '',
      img: 'https://neilpatel.com/wp-content/uploads/2021/12/performance-based-marketing.jpg'
    },
    {
      title: 'Search Engine Optimization',
      caption: ' ',
      tag: '',
      img: 'https://img.freepik.com/premium-vector/webseo-search-engine-optimization-concept-with-magnifying-glass-vector_185038-484.jpg?w=2000'
    }
  ]

  //
  const digitalEthiopia =
  [
    { title: 'Customer Experience', caption: '', tag: 'Better', img: '' },
    { title: 'Data & Analytics', caption: '', tag: 'Smart', img: ' ' },
    { title: 'Cloud Computing', caption: ' ', tag: 'Connected', img: ' ' },
    { title: 'Mobility', caption: ' ', tag: 'Advanced', img: '' }
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

        <DynamicCard
          items={ items }
          leadHeader='Promote'
          mainHeader='your business Online.'
          width='240px'
          height='120px'
        />

        <DynamicCard
          items={ websiteDesignServices }
          leadHeader='Choose'
          mainHeader='your website design'
          width='800px'
          height='450px'
          opacity1='0.1'
          opacity2='0.5'
        />

        <DynamicCard
          items={ digitalMarketingServices }
          leadHeader='Digital'
          mainHeader='marketing services'
          width='800px'
          height='450px'
        />

        <DynamicCard
          items={ digitalEthiopia }
          leadHeader='Join'
          mainHeader='Digital Ethiopia 2025 Initiative'
          width='300px'
          height='120px'
        />
      </Wrapper>
    </Layout1>
  )
}
