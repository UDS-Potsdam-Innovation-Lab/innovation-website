// GTM utilities for consent management

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    acceptCookies: () => void
  }
}

// Global acceptCookies function
export function acceptCookies() {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('consent', 'update', {
      'ad_storage': 'granted',
      'ad_user_data': 'granted',
      'ad_personalization': 'granted',
      'analytics_storage': 'granted'
    })
  }
}

// Make it available globally
if (typeof window !== 'undefined') {
  window.acceptCookies = acceptCookies
}