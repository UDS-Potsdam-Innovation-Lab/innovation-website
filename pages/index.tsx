import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import HeroSection from '../components/hero-section'
import BusinessSection from '../components/business-section'
import StructureSection from '../components/structure-section'
import EcosystemSection from '../components/ecosystem-section'
import InvestSection from '../components/invest-section'
import PortfolioSection from '../components/portfolio-section'
import ContactSection from '../components/contact-section'
import Footer from '../components/footer-component'
import Navigation from '../components/navigation'
import ScrollProgress from '../components/scroll-progress'

const Home: NextPage = () => {
  const [activeSection, setActiveSection] = React.useState('home')
  const [progress, setProgress] = React.useState(0)

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.body.offsetHeight
      const winHeight = window.innerHeight
      const scrollPercent = scrollTop / (docHeight - winHeight)
      setProgress(scrollPercent * 100)
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
        <ContactSection />
        <Footer />
      </main>
    </div>
  )
}

export default Home 