import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/system'
import { theme } from '../@theme/theme'
import { RecoilRoot } from 'recoil'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>  
      <ThemeProvider theme={{theme}}>
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  )
}
