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
        <Navigation 
          activeSection={activeSection} 
          translations={{ 
            navigation: {
              ecosystem: t('navigation.ecosystem'),
              portfolio: t('navigation.portfolio'),
              structure: t('navigation.structure'),
              business: t('navigation.business'),
              invest: t('navigation.invest'),
              investCommercial: t('navigation.investCommercial'),
              investNonprofit: t('navigation.investNonprofit'),
              aboutUniversity: t('navigation.aboutUniversity'),
              language: t('navigation.language'),
              investmentOpportunities: t('navigation.investmentOpportunities')
            }
          }} 
        />
        <HeroSection translations={{ 
            title: t('heroSection.title'),
            subtitle: t('heroSection.subtitle'),
            exploreButton: t('heroSection.exploreButton'),
            learnMoreButton: t('heroSection.learnMoreButton'),
            nextGeneration: t('heroSection.nextGeneration'),
            withoutBorders: t('heroSection.withoutBorders'),
            quote: t('heroSection.quote')
          }} />
        <BusinessSection />
        <StructureSection />
        <EcosystemSection />
        <InvestSection />
        <PortfolioSection />
        <AboutUniversitySection /> 
        <InvestCommercialSection translations={{
            title: t('investCommercial.title'),
            company: t('investCommercial.company'),
            stakeholders: {
              service: t('investCommercial.stakeholders.service'),
              cloudhouse: t('investCommercial.stakeholders.cloudhouse'),
              university: t('investCommercial.stakeholders.university')
            },
            uspTitle: t('investCommercial.uspTitle'),
            uspDescription: t('investCommercial.uspDescription'),
            keyPeopleTitle: t('investCommercial.keyPeopleTitle'),
            keyPeopleDescription: t('investCommercial.keyPeopleDescription')
          }} />
        <InvestNonprofitSection /> 
        <FoundationSection /> 
        <ContactSection />
        <Footer translations={{
            description: t('footer.description'),
            quickLinks: t('footer.quickLinks'),
            keyVerticals: t('footer.keyVerticals'),
            verticals: {
              entrepreneurship: t('footer.verticals.entrepreneurship'),
              education: t('footer.verticals.education'),
              ai: t('footer.verticals.ai'),
              security: t('footer.verticals.security'),
              management: t('footer.verticals.management')
            },
            investmentUpdates: t('footer.investmentUpdates'),
            stayUpdated: t('footer.stayUpdated'),
            emailPlaceholder: t('footer.emailPlaceholder'),
            subscribe: t('footer.subscribe'),
            rights: t('footer.rights')
          }} />
      </main>
    </div>
  )
}

export default Home 