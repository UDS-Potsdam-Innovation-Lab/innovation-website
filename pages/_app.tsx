import React from 'react'
import type { AppProps } from 'next/app'
import { TranslationProvider } from '../contexts/TranslationContext'
import '../styles/globals.css'

function App({ Component, pageProps }: AppProps) {
  return (
    <TranslationProvider>
      <Component {...pageProps} />
    </TranslationProvider>
  )
}

export default App