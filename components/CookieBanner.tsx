'use client'

import Link from 'next/link'
import { getLocalStorage, setLocalStorage } from '../lib/storageHelper'
import { useState, useEffect } from 'react'
import { X, Cookie, Shield, Settings } from 'lucide-react'
import { acceptCookies } from '../lib/gtm'

export default function CookieBanner() {
  const [cookieConsent, setCookieConsent] = useState<boolean | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    const storedCookieConsent = getLocalStorage('cookie_consent', null)
    setCookieConsent(storedCookieConsent)
    
    // Show banner with slight delay for better UX
    const timer = setTimeout(() => {
      setIsVisible(storedCookieConsent === null)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (cookieConsent !== null) {
      if (cookieConsent) {
        acceptCookies()
      } else {
        const newValue = 'denied'
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('consent', 'update', {
            analytics_storage: newValue,
          })
        }
      }

      setLocalStorage('cookie_consent', cookieConsent)
      
      // Hide banner with animation
      setIsVisible(false)
    }
  }, [cookieConsent])

  const handleAccept = () => {
    setCookieConsent(true)
  }

  const handleDecline = () => {
    setCookieConsent(false)
  }

  const handleAcceptAll = () => {
    setCookieConsent(true)
  }

  if (!isVisible) return null

  return (
    <>
      {/* Backdrop overlay */}
      <div 
        className={`fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsVisible(false)}
      />
      
      {/* Cookie Banner */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 transform transition-all duration-500 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
        role="dialog"
        aria-labelledby="cookie-banner-title"
        aria-describedby="cookie-banner-description"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Main Banner */}
            <div className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-2xl rounded-t-2xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-white/20 rounded-full">
                    <Cookie className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 id="cookie-banner-title" className="text-lg font-semibold text-white">
                      Cookie Settings
                    </h3>
                    <p className="text-sm text-blue-100">
                      We value your privacy
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsVisible(false)}
                  className="p-2 hover:bg-white/20 rounded-full transition-colors duration-200"
                  aria-label="Close cookie banner"
                >
                  <X className="h-5 w-5 text-white" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <div id="cookie-banner-description" className="mb-6">
                  <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
                    We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                    By clicking "Accept All", you consent to our use of cookies.
                  </p>
                </div>

                {/* Cookie Details */}
                {showDetails && (
                  <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="flex items-start space-x-3">
                        <Shield className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white">Essential</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Required for basic site functionality
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <Settings className="h-5 w-5 text-blue-500 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white">Analytics</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Help us improve our website
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center space-x-4">
                    <Link 
                      href="/privacy-policy" 
                      prefetch={false}
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium underline underline-offset-4 transition-colors duration-200"
                    >
                      Privacy Policy
                    </Link>
                    <button
                      onClick={() => setShowDetails(!showDetails)}
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 text-sm font-medium transition-colors duration-200"
                    >
                      {showDetails ? 'Hide' : 'Show'} Details
                    </button>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={handleDecline}
                      className="px-6 py-2.5 text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg font-medium transition-all duration-200 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                      aria-label="Decline cookies"
                    >
                      Decline
                    </button>
                    <button
                      onClick={handleAcceptAll}
                      className="px-6 py-2.5 text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-medium transition-all duration-200 hover:shadow-lg transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      aria-label="Accept all cookies"
                    >
                      Accept All
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
