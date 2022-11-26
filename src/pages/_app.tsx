import type { AppProps } from 'next/app'
import Head from 'next/head'
import { AuthContextProvider } from '../context/UserContext'
import GlobalStyles from '../styles/global'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </AuthContextProvider>
  )
}
