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
  return (
    <div>
      <Head>
        <title>German UDS Innovation GmbH</title>
        <meta name="description" content="German UDS Innovation GmbH - Innovation and Technology Solutions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ScrollProgress />
        <Navigation />
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