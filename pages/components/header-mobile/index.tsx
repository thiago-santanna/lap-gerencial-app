const HeaderMobile = () => {
  return (
    <>
      <header className='w-full bg-sidebar py-5 px-6 sm:hidden'>
        <div className='flex items-center justify-between'>
          <a
            href='index.html'
            className='text-white text-3xl font-semibold uppercase hover:text-gray-300'
          >
            Lap Gerencial
          </a>
          <button className='text-white text-3xl focus:outline-none'>
            {/* <!-- Quando estiver fechado --> */}
            <div id='dv-menu-mobile' className=''>
              <i data-feather='menu' className=''></i>
            </div>
            {/* <!-- Quando estiver aberto --> */}
            <div id='dv-menu-mobile-close' className='hidden'>
              <i data-feather='x-circle'></i>
            </div>
          </button>
        </div>

        {/* <!-- Dropdown Nav -->
            <!-- Quando nao estiver aberto usar hidden  :className="isOpen ? 'flex': 'hidden'"  --> */}
        <nav id='menu-user-mobile' className='flex flex-col pt-4 hidden'>
          <a
            href='blank.html'
            className='flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item'
          >
            <i data-feather='dollar-sign' className='mr-3'></i>Faturamento
          </a>
          <a
            href='tables.html'
            className='flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item'
          >
            <i data-feather='plus' className='mr-3'></i>Liberação de gerente
          </a>
          <a
            href='forms.html'
            className='flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item'
          >
            <i data-feather='plus' className='mr-3'></i>
            Desbloqueio
          </a>
          <a
            href='#'
            className='flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item'
          >
            <i data-feather='user' className='mr-3'></i>Conta
          </a>
          <a
            href='index.html'
            className='flex items-center active-nav-link text-white py-2 pl-4 nav-item'
          >
            <i data-feather='help-circle' className='mr-3 text-blue-400'></i>
            Contate-nos
          </a>
          <a
            href='#'
            className='flex items-center text-white opacity-75 hover:opacity-100 py-2 pl-4 nav-item'
          >
            <i data-feather='log-out' className='mr-3'></i>Sair
          </a>
          {/* <button className='w-full bg-white cta-btn font-semibold py-2 mt-3 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center'>
            <a
              href='#'
              className='flex items-center text-blue-700 opacity-75 hover:opacity-100 py-2 pl-4 nav-item'
            >
              <i data-feather='log-in' className='mr-3'></i> Entrar
            </a>
          </button> */}
        </nav>
      </header>
    </>
  )
}

export default HeaderMobile
