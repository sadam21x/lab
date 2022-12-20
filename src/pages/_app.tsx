import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react'
import Router from 'next/router'
import Progress from '@/components/Progress'
import '@/styles/globals.css'
import '@/styles/scrollbar.css'

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    Router.events.on('routeChangeStart', () => setLoading(true))
    Router.events.on('routeChangeComplete', () => setLoading(false))
    Router.events.on('routeChangeError', () => setLoading(false))
  }, [])

  return (
    <div className='bg-[#F5F5F5]'>
      <Progress loading={loading} />
      <Component {...pageProps} />
    </div>
  )
}
