import '../styles/global.sass'
import type { AppProps } from 'next/app'
import 'antd/dist/antd.compact.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
