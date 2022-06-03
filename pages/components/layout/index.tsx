import React from 'react'
import Aside from '../aside'
import Footer from '../footer'
import HeaderDesktop from '../header-desktop'
import HeaderMobile from '../header-mobile'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
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
            {children}
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout
