import React from 'react';
import Head from 'next/head';
import { useLocale } from '../contexts/LocaleContext';
import Navigation from '../components/navigation';
import Footer from '../components/footer-component';
import Link from 'next/link';

const Imprint: React.FC = () => {
  const { locale, t } = useLocale();
  const isGerman = locale === 'de';

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{String(t('imprint.pageTitle'))} | German UDS Innovation</title>
        <meta name="description" content={String(t('imprint.metaDescription'))} />
        <meta name="language" content={locale} />
        <meta httpEquiv="Content-Language" content={locale} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation activeSection="" />
      
      <main className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto bg-white rounded-br-xl shadow-md p-8 mb-8">
            <Link href="/" className="text-blue-600 hover:underline mb-6 inline-block">
              &larr; {String(t('common.backToHome'))}
            </Link>
            
            <h1 className="text-3xl font-bold mb-6">{String(t('imprint.title'))}</h1>
            
            <div className="prose max-w-none">
              <h2 className="text-xl font-semibold mt-6 mb-3">{String(t('imprint.companyInfo'))}</h2>
              <p><strong>German UDS Innovation GmbH</strong></p>
              <p>Innovation Campus</p>
              <p>Marlene-Dietrich-Allee 14</p>
              <p>14482 Potsdam</p>
              <p>Germany</p>
              
              <h2 className="text-xl font-semibold mt-6 mb-3">{String(t('imprint.contact'))}</h2>
              <p><strong>{isGerman ? 'Telefon' : 'Phone'}:</strong> {String(t('imprint.phone'))}</p>
              <p><strong>{isGerman ? 'E-Mail' : 'Email'}:</strong> {String(t('imprint.email'))}</p>
              
              <h2 className="text-xl font-semibold mt-6 mb-3">{String(t('imprint.legalDetails'))}</h2>
              <p>
                <strong>{isGerman ? 'Geschäftsführung' : 'Management'}:</strong> {String(t('imprint.management'))}
              </p>
              <p>
                <strong>{isGerman ? 'Registergericht' : 'Registration Court'}:</strong> {String(t('imprint.registrationCourt'))}
              </p>
              <p>
                <strong>{isGerman ? 'Handelsregisternummer' : 'Registration Number'}:</strong> {String(t('imprint.registrationNumber'))}
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-3">{String(t('imprint.responsibility'))}</h2>
              <p>{String(t('imprint.responsibilityText'))}</p>
              
              <h2 className="text-xl font-semibold mt-6 mb-3">{String(t('imprint.disputeResolution'))}</h2>
              <p>{String(t('imprint.disputeResolutionText'))}</p>
            </div>
          </div>

          <div className="flex justify-center space-x-4 my-8">
            <Link href="/privacy" className="text-blue-600 hover:underline">
              {String(t('footer.privacy'))}
            </Link>
            <span className="text-gray-400">|</span>
            <Link href="/imprint" className="text-blue-600 hover:underline">
              {String(t('footer.imprint'))}
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Imprint;