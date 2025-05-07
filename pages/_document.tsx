import Document, { Html, Head, Main, NextScript, DocumentProps } from 'next/document';
import { DocumentContext, DocumentInitialProps } from 'next/document';

interface MyDocumentProps extends DocumentProps {
  locale: string;
}

class MyDocument extends Document<MyDocumentProps> {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps & { locale: string }> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, locale: ctx.locale || 'en' };
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
          <meta property="og:title" content="German UDS Innovation GmbH" />
          <meta property="og:description" content="Digital Innovation Ecosystem - Connecting academic excellence with entrepreneurial practice through strategic investments and services." />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content={locale} />
          {alternateLocales.map(altLocale => (
            <meta key={`og-locale-${altLocale}`} property="og:locale:alternate" content={altLocale} />
          ))}
          
          {/* Theme color and favicon */}
          <meta name="theme-color" content="#1e3a8a" />
          <link rel="icon" href="/favicon.ico" />
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