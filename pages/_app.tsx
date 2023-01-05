import React from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from '@emotion/react'
import theme from '../@theme/theme'
import Head from 'next/head'
import { SnackbarProvider } from 'notistack'
import { CssBaseline } from '@mui/material'
import { AuthProvider } from '../context/AuthProvider'

export default function App ({ Component, pageProps }: AppProps): JSX.Element {
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
