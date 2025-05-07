import React from 'react';
import Head from 'next/head';
import { useLocale } from '../contexts/LocaleContext';
import Navigation from '../components/navigation';
import Footer from '../components/footer-component';
import Link from 'next/link';

const Privacy: React.FC = () => {
  const { locale, t } = useLocale();

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>{String(t('privacy.pageTitle'))} | German UDS Innovation</title>
        <meta name="description" content={String(t('privacy.metaDescription'))} />
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
            
            <h1 className="text-3xl font-bold mb-6">{String(t('privacy.title'))}</h1>
            
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-4">
                {String(t('privacy.lastUpdated'))}: 07.05.2025
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-3">{String(t('privacy.introduction.title'))}</h2>
              <p>{String(t('privacy.introduction.content'))}</p>
              
              <h2 className="text-xl font-semibold mt-6 mb-3">{String(t('privacy.dataCollection.title'))}</h2>
              <p>{String(t('privacy.dataCollection.content'))}</p>
              
              <h3 className="text-lg font-medium mt-4 mb-2">{String(t('privacy.dataCollection.categories.title'))}</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>{String(t('privacy.dataCollection.categories.item1'))}</li>
                <li>{String(t('privacy.dataCollection.categories.item2'))}</li>
                <li>{String(t('privacy.dataCollection.categories.item3'))}</li>
                <li>{String(t('privacy.dataCollection.categories.item4'))}</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-6 mb-3">{String(t('privacy.cookies.title'))}</h2>
              <p>{String(t('privacy.cookies.content'))}</p>
              
              <h2 className="text-xl font-semibold mt-6 mb-3">{String(t('privacy.dataUse.title'))}</h2>
              <p>{String(t('privacy.dataUse.content'))}</p>
              
              <ul className="list-disc pl-6 space-y-1">
                <li>{String(t('privacy.dataUse.item1'))}</li>
                <li>{String(t('privacy.dataUse.item2'))}</li>
                <li>{String(t('privacy.dataUse.item3'))}</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-6 mb-3">{String(t('privacy.dataSharing.title'))}</h2>
              <p>{String(t('privacy.dataSharing.content'))}</p>
              
              <h2 className="text-xl font-semibold mt-6 mb-3">{String(t('privacy.rights.title'))}</h2>
              <p>{String(t('privacy.rights.content'))}</p>
              
              <ul className="list-disc pl-6 space-y-1">
                <li>{String(t('privacy.rights.item1'))}</li>
                <li>{String(t('privacy.rights.item2'))}</li>
                <li>{String(t('privacy.rights.item3'))}</li>
                <li>{String(t('privacy.rights.item4'))}</li>
                <li>{String(t('privacy.rights.item5'))}</li>
              </ul>
              
              <h2 className="text-xl font-semibold mt-6 mb-3">{String(t('privacy.dataProtectionOfficer.title'))}</h2>
              <p>
                {String(t('privacy.dataProtectionOfficer.name'))}<br />
                German UDS Innovation GmbH<br />
                Musterstrasse 123<br />
                10115 Berlin<br />
                {String(t('privacy.dataProtectionOfficer.email'))}: privacy@germanudsinnovation.com
              </p>
              
              <h2 className="text-xl font-semibold mt-6 mb-3">{String(t('privacy.changes.title'))}</h2>
              <p>{String(t('privacy.changes.content'))}</p>
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

export default Privacy;