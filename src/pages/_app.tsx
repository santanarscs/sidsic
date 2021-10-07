import type { AppProps, AppContext } from 'next/app'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { AnimatePresence } from 'framer-motion'
import { SSRKeycloakProvider, SSRCookies } from "@react-keycloak/ssr";
import NProgress from 'nprogress'

import { KEYCLOAK_CONFIG } from "../util/auth";
import { parseCookies } from "../util/cookies";
import '../styles/global.css'
import '../styles/nprogress.css'

function MyApp({ Component, pageProps, cookies }: AppProps & {cookies: unknown}) {
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
    <SSRKeycloakProvider
      keycloakConfig={KEYCLOAK_CONFIG as any}
      persistor={SSRCookies(cookies)}
      initOptions={{
        onLoad: "check-sso",
        silentCheckSsoRedirectUri:
          typeof window !== "undefined"
            ? `${window.location.origin}/silent-check-sso.html`
            : null,
      }}
    >
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </SSRKeycloakProvider>
  )
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  return {
    cookie: parseCookies(appContext.ctx.req),
  };
};

export default MyApp