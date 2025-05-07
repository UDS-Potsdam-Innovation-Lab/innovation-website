import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useTranslation } from '../contexts/TranslationContext'
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
import InvestCommercialSection from '../components/invest-commercial-section'; 
import InvestNonprofitSection from '../components/invest-nonprofit-section'; 
import FoundationSection from '../components/foundation-section'; 

const Home: NextPage = () => {
  const [activeSection, setActiveSection] = React.useState('home')
  const [progress, setProgress] = React.useState(0)
  const { t } = useTranslation();

  React.useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const scrollTop = window.scrollY
      const docHeight = document.body.offsetHeight
      const winHeight = window.innerHeight
      const scrollPercent = scrollTop / (docHeight - winHeight)
      setProgress(scrollPercent * 100)

      // Update active section
      const sections = ['ecosystem', 'portfolio', 'about-university', 'structure', 'business', 'invest']
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
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ScrollProgress progress={progress} />
        <Navigation activeSection={activeSection} />
        <HeroSection />
        <BusinessSection />
        <StructureSection />
        <EcosystemSection />
        <InvestSection />
        <PortfolioSection />
        <AboutUniversitySection /> 
        <InvestCommercialSection />
        <InvestNonprofitSection /> 
        <FoundationSection /> 
        <ContactSection />
        <Footer />
      </main>
    </div>
  )
}

export default Home 