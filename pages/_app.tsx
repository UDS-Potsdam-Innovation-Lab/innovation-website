import React from 'react'
import type { AppProps } from 'next/app'
import { LocaleProvider } from '../contexts/LocaleContext'
import ScrollNavigation from '../components/scroll-navigation'
import '../styles/globals.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <LocaleProvider>
      <Component {...pageProps} />
      <ScrollNavigation />
    </LocaleProvider>
  )
}

export default App