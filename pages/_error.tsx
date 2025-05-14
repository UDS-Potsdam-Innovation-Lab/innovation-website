import React from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useLocale } from '../contexts/LocaleContext'

interface ErrorProps {
  statusCode?: number
}

const Error: NextPage<ErrorProps> = ({ statusCode }) => {
  const router = useRouter()
  const { t } = useLocale()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gray-50">
      <Head>
        <title>{`${t('error.title')} ${statusCode || 'Unknown'} | German UDS Innovation`}</title>
      </Head>

      <div className="text-center max-w-md">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {statusCode ? `${t('error.title')} ${statusCode}` : t('error.description')}
        </h1>

        <p className="text-lg text-gray-600 mb-8">
          {statusCode === 404
            ? t('error.notFound')
            : t('error.serverError')}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/"
            locale={router.locale}
            className="px-5 py-3 bg-orange-500 text-white rounded-br-xl hover:bg-orange-600 transition-colors"
          >
            {t('error.backToHome')}
          </Link>

          <button
            onClick={() => router.back()}
            className="px-5 py-3 border border-gray-300 rounded-br-xl hover:bg-gray-100 transition-colors"
          >
            {t('error.goBack')}
          </button>
        </div>
      </div>
    </div>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error