import Image from 'next/image'
import {
  DollarSign,
  Key,
  AlertTriangle,
  HelpCircle,
  LogOut,
  User as UserIcon,
} from 'react-feather'

const HeaderMobile = () => {
  return (
    <>
      <header className='w-full bg-sidebar py-5 px-6 sm:hidden'>
        <div className='flex items-center justify-between'>
          {/* <a
            href='index.html'
            className='text-white text-3xl font-semibold uppercase hover:text-gray-300'
          >
            Lap Gerencial
          </a> */}

          <a
            target='_blank'
            href='https://www.lapinfo.com.br/'
            className='text-white text-3xl font-semibold uppercase hover:text-gray-300'
            rel='noreferrer'
          >
            <Image
              src='/logoNovo.jpg'
              width='56'
              height='32'
              alt='Logo marca da Lap Informatica'
            />
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
        <nav className='flex flex-col pt-4'>
          <a
            href='blank.html'
            className='flex items-center text-white text-lg opacity-75 hover:opacity-100 py-2 pl-4 nav-item'
          >
            <DollarSign size={24} color='white' className='mr-3' />
            Faturamento
          </a>
          <a
            href='tables.html'
            className='flex items-center text-white text-lg opacity-75 hover:opacity-100 py-2 pl-4 nav-item'
          >
            <AlertTriangle size={24} color='white' className='mr-3' />
            Liberação de gerente
          </a>
          <a
            href='forms.html'
            className='flex items-center text-white text-lg opacity-75 hover:opacity-100 py-2 pl-4 nav-item'
          >
            <Key size={24} color='white' className='mr-3' />
            Desbloqueio
          </a>
          <a
            href='#'
            className='flex items-center text-white text-lg opacity-75 hover:opacity-100 py-2 pl-4 nav-item'
          >
            <UserIcon size={24} color='white' className='mr-3' />
            Conta
          </a>
          <a
            href='index.html'
            className='flex items-center active-nav-link text-white text-lg py-2 pl-4 nav-item'
          >
            <HelpCircle size={24} color='white' className='mr-3' />
            Contate-nos
          </a>
          <a
            href='#'
            className='flex items-center text-white text-lg opacity-75 hover:opacity-100 py-2 pl-4 nav-item'
          >
            <LogOut size={24} color='white' className='mr-3' />
            Sair
          </a>
        </nav>
      </header>
    </>
  )
}

export default HeaderMobile
