import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { LocaleProvider } from '../contexts/LocaleContext';
import ScrollNavigation from '../components/scroll-navigation';
import '../styles/globals.css';

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }

  // Prevent auto-scroll to hash on page load
  if (typeof window !== 'undefined') {
    const hash = window.location.hash;

    if (hash) {
      setTimeout(() => {
        // Remove the hash from URL without reloading the page
        history.replaceState(null, '', window.location.pathname);
        // Scroll to top smoothly
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 0);
    }
  }
}, []);

  return (
    <LocaleProvider>
      <Component {...pageProps} />
      <ScrollNavigation />
    </LocaleProvider>
  );
}

export default App;
