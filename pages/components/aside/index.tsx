import Image from 'next/image'
import Link from 'next/link'
import { DollarSign, Key, AlertTriangle, HelpCircle } from 'react-feather'

const Aside = () => {
  return (
    <>
      <aside className='relative bg-sidebar h-screen w-72 hidden sm:block shadow-xl'>
        <div className='p-6'>
          <div className='text-white text-3xl font-semibold uppercase hover:text-gray-300'>
            {/* <Image
              src='/iLapGerencial.jpg'
              width='48'
              height='48'
              alt='Logo marca do iLap Gerencial'
            /> */}
            Lap Gerencial
          </div>
          <button className='w-full bg-white font-semibold py-2 mt-5 rounded-bl-xl rounded-tr-xl shadow-lg hover:shadow-lg hover:bg-gray-200 flex items-center justify-center'>
            <a
              target='_blank'
              href='https://www.lapinfo.com.br/'
              className='no-underline'
              rel='noreferrer'
            >
              <Image
                src='/logoNovo.jpg'
                width='176'
                height='96'
                alt='Logo marca da Lap Informatica'
              />
            </a>
          </button>
        </div>

        <nav className='text-white text-base font-semibold pt-3'>
          <Link href='/faturamento'>
            <a className='flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item'>
              <DollarSign size={24} color='white' className='mr-3' />
              Faturamento
            </a>
          </Link>

          <Link href='/liberacao'>
            <a className='flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item'>
              <AlertTriangle size={24} color='white' className='mr-3' />
              Liberação de gerente
            </a>
          </Link>

          <Link href='/desbloqueio'>
            <a className='flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item'>
              <Key size={24} color='white' className='mr-3' />
              Desbloqueio
            </a>
          </Link>
        </nav>

        <Link href='/contato'>
          <a className='absolute w-full upgrade-btn bottom-0 active-nav-link text-white flex items-center justify-center py-4'>
            <HelpCircle size={24} color='white' className='mr-3' />
            Contate-nos
          </a>
        </Link>
      </aside>
    </>
  )
}

export default Aside
