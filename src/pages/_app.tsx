import type { AppProps } from 'next/app'
import '../styles/global.css'
import 'leaflet/dist/leaflet.css';
function MyApp({ Component, pageProps }: AppProps) {
  return (
      <Component {...pageProps} />
  )
}

export default MyApp