import { useEffect } from 'react'
import { useRouter } from 'next/router'
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import '../styles/global.css'
import 'leaflet/dist/leaflet.css';
import NProgress from 'nprogress'
import '../styles/nprogress.css'




function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleStart = (url: string) => {
      console.log(`Loading: ${url}`)
      NProgress.start()
    }
    const handleStop = () => {
      NProgress.done()
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])
  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  )
}

export default MyApp