import React from 'react'
import type { AppProps } from 'next/app'
import { LocaleProvider } from '../contexts/LocaleContext'
import '../styles/globals.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <LocaleProvider>
      <Component {...pageProps} />
    </LocaleProvider>
  )
}

export default App