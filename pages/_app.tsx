import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import Layout from './components/layout'

function MyApp({ Component, pageProps }: AppProps) {
  const { route } = useRouter()
  if (route === '/') {
    return <Component {...pageProps} />
  } else {
    const layout = Layout
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
}

export default MyApp
