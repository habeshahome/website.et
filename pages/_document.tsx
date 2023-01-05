import { Html, Head, Main, NextScript } from 'next/document'
import SalesIQ from '../plugins/SalesIQ'

export default function Document (): JSX.Element {
  return (
    <Html>
      <Head>
        <meta name="application-name" content="website.et" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="website.et" />
        <meta name="description" content="website.et From Qintot Group" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#000000" />

        <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/icons/touch-icon-ipad.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/touch-icon-iphone-retina.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/icons/touch-icon-ipad-retina.png" />

        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=optional" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://website.et" />
        <meta name="twitter:title" content="website.et" />
        <meta name="twitter:description" content="website.et From Qintot Group" />
        <meta name="twitter:image" content="https://website.et/icons/android-chrome-192x192.png" />
        <meta name="twitter:creator" content="@DavidWShadow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="website.et" />
        <meta property="og:description" content="website.et From Qintot Group" />
        <meta property="og:site_name" content="website.et" />
        <meta property="og:url" content="https://website.et" />
        <meta property="og:image" content="https://website.et/icons/apple-touch-icon.png" />

        <link href="https://fonts.googleapis.com/css2?family=Inter&display=optional" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' />
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap" rel="stylesheet" />

      </Head>
      <body>
        <Main />
        <NextScript />
        <SalesIQ />
      </body>
    </Html>
  )
}
/**
 * @ContentSecurityPolicy
   <meta httpEquiv="Content-Security-Policy" content="script-src 'self' 'unsafe-eval' website.et 127.0.0.1 " />
 */
