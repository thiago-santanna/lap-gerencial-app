import Image from 'next/image'

const HeaderDesktop = () => {
  return (
    <>
      <header className='w-full items-center bg-white py-2 px-6 hidden sm:flex'>
        <div id='bem-vindo' className='w-1/2'>
          {/* <Image
            src={imgHeader}
            alt='Imagem do usuario'
            layout='responsive'
            height={500}
            width={1000}
          /> */}
        </div>
        <div className='relative w-1/2 flex justify-end'>
          <button className='realtive z-10 w-12 h-12 rounded-full overflow-hidden border-4 border-gray-400 hover:border-gray-300 focus:border-gray-300 focus:outline-none'>
            <Image
              src={'/user.jpeg'}
              alt='Imagem do usuario'
              layout='responsive'
              height={48}
              width={48}
            />
          </button>

          <div
            id='menu-user-desktop'
            className='absolute w-40 bg-white rounded-lg shadow-lg py-2 mt-16 hidden'
          >
            <a
              href='#'
              className='flex gap-x-2 px-4 py-2 account-link hover:text-white'
            >
              <i className='w-4' data-feather='users'></i>Conta
            </a>
            <a
              href='#'
              className='flex gap-x-2 px-4 py-2 account-link hover:text-white'
            >
              <i className='w-4' data-feather='help-circle'></i> Suporte
            </a>
            <a
              href='#'
              className='flex gap-x-2 px-4 py-2 account-link hover:text-white'
            >
              <i className='w-4' data-feather='log-out'></i>Sair
            </a>
          </div>
        </div>
      </header>
    </>
  )
}

export default HeaderDesktop
