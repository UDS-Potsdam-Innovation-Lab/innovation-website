'use client'

import Script from 'next/script'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { getLocalStorage } from '../lib/storageHelper'
import { acceptCookies } from '../lib/gtm'



export default function GoogleAnalytics({ GA_MEASUREMENT_ID }: { GA_MEASUREMENT_ID: string }) {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      const url = pathname + window.location.search
      
      // Check if cookies were already accepted
      const cookieConsent = getLocalStorage('cookie_consent', null)
      if (cookieConsent === true) {
        acceptCookies()
      }
      
      // Enhanced pageview tracking with more data
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: url,
        page_title: document.title,
        page_location: window.location.href,
      })

      // Track custom events for landing pages
      if (pathname.includes('/campaign/')) {
        window.gtag('event', 'page_view', {
          page_title: document.title,
          page_location: window.location.href,
          page_path: url,
          content_group1: 'Campaign Pages',
          content_group2: pathname.includes('/master') ? 'Masters Campaign' : 'MBA Campaign',
        })
      }
    }
  }, [pathname, GA_MEASUREMENT_ID])

  return (
    <>
      {/* Google Tag Manager - GTM Implementation */}
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N3ZXVXT9');
          `,
        }}
      />

      {/* Initialize dataLayer and consent */}
      <Script
        id="gtm-init"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            
            // Set default consent state (GDPR compliant)
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'analytics_storage': 'denied',
              'functionality_storage': 'granted',
              'personalization_storage': 'denied',
              'security_storage': 'granted',
              'wait_for_update': 2000,
            });

            // Global acceptCookies function
            window.acceptCookies = function() {
              gtag('consent', 'update', {
                'ad_storage': 'granted',
                'ad_user_data': 'granted',
                'ad_personalization': 'granted',
                'analytics_storage': 'granted'
              });
            };

            // Enhanced e-commerce and conversion tracking
            gtag('config', '${GA_MEASUREMENT_ID}', {
              'custom_map': {
                'custom_parameter': 'campaign_type'
              },
              'send_page_view': false // We handle this manually for better control
            });

            // Google Ads conversion tracking
            gtag('config', 'AW-16872348131', {
              'allow_enhanced_conversions': true
            });
          `,
        }}
      />

      {/* Facebook Pixel - Managed separately for better control */}
      <Script
        id="facebook-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            
            fbq('init', '1449815776213928');
            fbq('track', 'PageView');
            
            // Enhanced tracking for campaign pages
            if(window.location.pathname.includes('/campaign/')) {
              fbq('track', 'ViewContent', {
                content_type: 'education',
                content_category: window.location.pathname.includes('/master') ? 'masters_programs' : 'mba_programs'
              });
            }
          `,
        }}
      />
    </>
  )
}
