import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useLocale } from '../contexts/LocaleContext'
import HeroSection from '../components/hero-section'
import BusinessSection from '../components/business-section'
import StructureSection from '../components/structure-section'
import EcosystemSection from '../components/ecosystem-section'
import InvestSection from '../components/invest-section'
import PortfolioSection from '../components/portfolio-section'
import AboutUniversitySection from '../components/about-university-section'; 
import ContactSection from '../components/contact-section'
import Footer from '../components/footer-component'
import Navigation from '../components/navigation'
import ScrollProgress from '../components/scroll-progress'
import InvestNonprofitSection from '../components/invest-nonprofit-section'; 


const Home: NextPage = () => {
  const [activeSection, setActiveSection] = React.useState('home')
  const [progress, setProgress] = React.useState(0)
  const { locale, t } = useLocale();

  React.useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const scrollTop = window.scrollY
      const docHeight = document.body.offsetHeight
      const winHeight = window.innerHeight
      const scrollPercent = scrollTop / (docHeight - winHeight)
      setProgress(scrollPercent * 100)

      // Update active section
      const sections = ['about-university', 'ecosystem', 'structure', 'business', 'portfolio', 'invest']
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div>
      <Head>
        <title>German UDS Innovation GmbH</title>
        <meta name="description" content="German UDS Innovation GmbH - Innovation and Technology Solutions" />
        <meta name="language" content={locale} />
        <meta httpEquiv="Content-Language" content={locale} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ScrollProgress progress={progress} />
        <Navigation activeSection={activeSection} />
        <HeroSection />
        <AboutUniversitySection />
        <EcosystemSection />
        <StructureSection />
        <BusinessSection />
        <PortfolioSection />
        <InvestSection />
        <InvestNonprofitSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  )
}

export default Home

// No getStaticProps needed since we're using client-side localization via localStorage 