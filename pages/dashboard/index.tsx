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
      <div className='bg-gray-100 font-family-roboto flex'>
        <Aside />

        {/* <!-- Container da página --> */}
        <div className='w-full flex flex-col h-screen overflow-y-hidden'>
          {/* <!-- Desktop Header --> */}
          <HeaderDesktop />
          {/* <!-- Mobile Header & Nav --> */}
          <HeaderMobile />

          {/* <!-- Conteudo central da pagina --> */}
          <div className='w-full overflow-x-hidden border-t flex flex-auto flex-col'>
            <MainDashboard />
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard
