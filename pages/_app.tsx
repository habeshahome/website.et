import React, { useEffect } from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from '@emotion/react'
import theme from '../@theme/theme'
import Head from 'next/head'
import { SnackbarProvider } from 'notistack'
import { CssBaseline } from '@mui/material'
import { AuthProvider } from '../context/AuthProvider'
import { Analytics } from '@vercel/analytics/react'

export default function App ({ Component, pageProps }: AppProps): JSX.Element {
  // Zoho Sales Iq Script:
  const useScript = (url: string, widgetCode: string): any => {
    useEffect(() => {
      const script = document.createElement('script')
      script.setAttribute('type', 'text/javascript')

      const code = `var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode: "${widgetCode}", values:{},ready:function(){}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="${url}";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);d.innerHTML = "<div id='zsiqwidget'></div>";`

      script.appendChild(document.createTextNode(code))
      document.body.appendChild(script)

      return () => {
        document.body.removeChild(script)
      }
    }, [url])
  }

  return (
    <RecoilRoot>
      <ThemeProvider theme={ theme }>
        <CssBaseline />
        <Head>
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          {/* link manifest.json */}
          <link rel="manifest" href="/manifest.json" />
          {/* this sets the color of url bar  */}
          {/* <meta name="theme-color" content="#90cdf4" media="(prefers-color-scheme: dark)"/>
          <meta name='description' content='website development company in Ethiopia, web design, marketing, digital marketing, advertising' /> */}
        </Head>

        {useScript('https://salesiq.zoho.com/widget', 'f010f95bb26f61557069d847eccfe0f39e8f5cb18bca33b02501c7bc74614e9f')}
        <Analytics />

        <AuthProvider>
          <SnackbarProvider
            maxSnack={3}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}>
              <Component {...pageProps} />
          </SnackbarProvider>
          </AuthProvider>
      </ThemeProvider>
    </RecoilRoot>
  )
}

/*

<script type="text/javascript"
id="zsiqchat">var $zoho=$zoho ||
{};$zoho.salesiq = $zoho.salesiq ||
{widgetcode: "f010f95bb26f61557069d847eccfe0f39e8f5cb18bca33b02501c7bc74614e9f",
values:{},ready:function(){}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="https://salesiq.zoho.com/widget";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);</script>

*/
