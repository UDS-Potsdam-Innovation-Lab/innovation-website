import React from 'react';
import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';

interface MyDocumentProps extends DocumentInitialProps {
  locale: string;
}

class MyDocument extends Document<MyDocumentProps> {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps & { locale: string }> {
    const initialProps = await Document.getInitialProps(ctx);
    const locale = ctx.locale || 'en';
    return { ...initialProps, locale };
  }

  render() {
    const locale = this.props.__NEXT_DATA__.locale || 'en';
    const alternateLocales = ['en', 'de'].filter(loc => loc !== locale);
    const origin = process.env.NEXT_PUBLIC_SITE_URL || '';

    return (
      <Html lang={locale}>
        <Head>
          {/* Character set and viewport */}
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          
          {/* Language and localization */}
          <meta httpEquiv="Content-Language" content={locale} />
          <link rel="alternate" hrefLang="x-default" href={`${origin}/`} />
          {alternateLocales.map(altLocale => (
            <link 
              key={altLocale}
              rel="alternate" 
              hrefLang={altLocale} 
              href={`${origin}/${altLocale}`} 
            />
          ))}
          
          {/* SEO and Open Graph */}
          <meta name="description" content="German UDS Innovation GmbH - Digital Innovation Ecosystem connecting academic excellence with entrepreneurial practice." />
          
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content={origin} />
          <meta property="og:title" content="German UDS Innovation GmbH" />
          <meta property="og:description" content="Digital Innovation Ecosystem - Connecting academic excellence with entrepreneurial practice through strategic investments and services." />
          <meta property="og:image" content={`${origin}/images/innovation_logo.png`} />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:alt" content="German UDS Innovation GmbH Logo" />
          <meta property="og:site_name" content="German UDS Innovation GmbH" />
          <meta property="og:locale" content={locale} />
          {alternateLocales.map(altLocale => (
            <meta key={`og-locale-${altLocale}`} property="og:locale:alternate" content={altLocale} />
          ))}
          
          {/* Teams/Outlook fallback meta tags */}
          <meta name="image" content={`${origin}/images/innovation_logo.png`} />
          <meta name="thumbnail" content={`${origin}/images/innovation_logo.png`} />
          
          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content={origin} />
          <meta name="twitter:title" content="German UDS Innovation GmbH" />
          <meta name="twitter:description" content="Digital Innovation Ecosystem - Connecting academic excellence with entrepreneurial practice through strategic investments and services." />
          <meta name="twitter:image" content={`${origin}/images/innovation_logo.png`} />
          <meta name="twitter:image:alt" content="German UDS Innovation GmbH Logo" />
          
          {/* Microsoft Teams specific */}
          <meta name="msapplication-TileImage" content={`${origin}/images/innovation_logo.png`} />
          <meta name="msapplication-TileColor" content="#1e3a8a" />
          
          {/* Theme color and favicon */}
          <meta name="theme-color" content="#1e3a8a" />
          <link rel="icon" type="image/png" href="/images/favicon.png" />
          
          {/* Extra tags for maximum sharing compatibility (Teams, etc.) */}
          <link rel="image_src" href={`${origin}/images/innovation_logo.jpeg`} />
          <meta property="og:image" content={`${origin}/images/innovation_logo.jpeg`} />
          <meta name="image" content={`${origin}/images/innovation_logo.jpeg`} />
          <meta name="thumbnail" content={`${origin}/images/innovation_logo.jpeg`} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;