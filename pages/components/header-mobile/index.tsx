import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import {
  DollarSign,
  Key,
  AlertTriangle,
  HelpCircle,
  LogOut,
  User as UserIcon,
  Menu,
  UserPlus,
} from 'react-feather'

import lapCircularImg from '../../../public/circular.png'

const HeaderMobile = () => {
  const [menuIsHidden, setMenuIsHidden] = useState(true)
  const [classMenu, setClassMenu] = useState('flex flex-col pt-4 hidden')

  const handleShowMenu = () => {
    const value = !menuIsHidden
    if (value) {
      setMenuIsHidden(true)
      setClassMenu('flex flex-col pt-4 hidden')
    } else {
      setMenuIsHidden(false)
      setClassMenu('flex flex-col pt-4')
    }
  }

  return (
    <>
      <header className='w-full bg-sidebar py-5 px-6 sm:hidden'>
        <div className='flex gap=2 items-center justify-between'>
          <a
            target='_blank'
            href='https://www.lapinfo.com.br/'
            className='flex justify-between justify-items-center gap-2 text-white text-3xl font-semibold hover:text-gray-300 '
            rel='noreferrer'
          >
            <Image
              src={lapCircularImg}
              width='56'
              height='56'
              alt='Logo marca da Lap Informatica'
            />
            <span className='self-center'>Lap Gerencial</span>
          </a>

          <button onClick={handleShowMenu} className=''>
            <div>
              <Menu size={24} color='white' className='mr-3' />
            </div>
          </button>
        </div>

        <nav className={classMenu}>
          <Link href='/usuario'>
            <a className='flex items-center text-white text-lg opacity-75 hover:opacity-100 py-2 pl-4 nav-item'>
              <UserPlus size={24} color='white' className='mr-3' />
              Cadastrar usuário(Lapinfo)
            </a>
          </Link>

          {/* <Link href='/liberacao'>
            <a className='flex items-center text-white text-lg opacity-75 hover:opacity-100 py-2 pl-4 nav-item'>
              <DollarSign size={24} color='white' className='mr-3' />
              Faturamento
            </a>
          </Link> */}

          <Link href='/liberacao'>
            <a className='flex items-center text-white text-lg opacity-75 hover:opacity-100 py-2 pl-4 nav-item'>
              <AlertTriangle size={24} color='white' className='mr-3' />
              Liberação de gerente
            </a>
          </Link>

          {/* <Link href='/liberacao'>
            <a className='flex items-center text-white text-lg opacity-75 hover:opacity-100 py-2 pl-4 nav-item'>
              <Key size={24} color='white' className='mr-3' />
              Desbloqueio
            </a>
          </Link> */}

          {/* <Link href='#'>
            <a className='flex items-center text-white text-lg opacity-75 hover:opacity-100 py-2 pl-4 nav-item'>
              <UserIcon size={24} color='white' className='mr-3' />
              Conta
            </a>
          </Link> */}

          {/* <Link href='/liberacao'>
            <a className='flex items-center text-white text-lg opacity-75 hover:opacity-100 py-2 pl-4 nav-item'>
              <HelpCircle size={24} color='white' className='mr-3' />
              Contate-nos
            </a>
          </Link> */}

          <div className='flex items-center text-white text-lg opacity-75 hover:opacity-100 py-2 pl-4 nav-item'>
            <LogOut size={24} color='white' className='mr-3' />
            Sair
          </div>
        </nav>
      </header>
    </>
  )
}

export default HeaderMobile
