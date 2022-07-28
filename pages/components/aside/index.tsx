import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  DollarSign,
  Key,
  AlertTriangle,
  HelpCircle,
  UserPlus,
  LogOut,
} from 'react-feather'

const Aside = () => {
  const router = useRouter()

  const handleShotdown = () => {
    sessionStorage.removeItem('sessionUser')
    router.push('/')
  }
  return (
    <>
      <aside className='relative bg-sidebar h-screen w-72 hidden sm:block shadow-xl'>
        <div className='p-6'>
          <button className='w-full bg-white border rounded-full font-semibold mt-5 flex items-center justify-center'>
            <a
              target='_blank'
              href='https://www.lapinfo.com.br/'
              className='no-underline'
              rel='noreferrer'
            >
              <Image
                className='border rounded-full'
                src='/logoNovo.jpg'
                width='150'
                height='96'
                alt='Logo marca da Lap Informatica'
              />
            </a>
          </button>
          <div className='text-white text-2xl mt-4 font-semibold uppercase hover:text-gray-300'>
            Lap Gerencial
          </div>
        </div>

        <nav className='text-white text-base font-semibold pt-3'>
          {/* <Link href='/liberacao'>
            <a className='flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item'>
              <DollarSign size={24} color='white' className='mr-3' />
              Faturamento
            </a>
          </Link> */}

          <Link href='/usuario'>
            <a className='flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item'>
              <UserPlus size={24} color='white' className='mr-3' />
              Cadastrar usuário(Lapinfo)
            </a>
          </Link>

          <Link href='/liberacao'>
            <a className='flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item'>
              <AlertTriangle size={24} color='white' className='mr-3' />
              Liberação de gerente
            </a>
          </Link>

          <div
            onClick={handleShotdown}
            className='flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item'
          >
            <LogOut size={24} color='white' className='mr-3' />
            Sair
          </div>

          {/* <Link href='/liberacao'>
            <a className='flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item'>
              <Key size={24} color='white' className='mr-3' />
              Desbloqueio
            </a>
          </Link> */}
        </nav>

        <Link href='#'>
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
