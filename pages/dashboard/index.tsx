import { NextPage } from 'next'
import Head from 'next/head'
import Aside from '../components/aside'
import Footer from '../components/footer'
import HeaderDesktop from '../components/header-desktop'
import HeaderMobile from '../components/header-mobile'
import MainDashboard from '../components/main-dashboard'

const Dashboard: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <MainDashboard />
    </>
  )
}

export default Dashboard
