const Aside = () => {
  return (
    <>
      <aside className='relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl'>
        <div className='p-6'>
          <a
            href='index.html'
            className='text-white text-3xl font-semibold uppercase hover:text-gray-300'
          >
            Lap Gerencial
          </a>
          <button className='w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center'>
            <i className='fas fa-plus mr-3'></i> Logo Marca
          </button>
        </div>

        <nav className='text-white text-base font-semibold pt-3'>
          <a
            href='blank.html'
            className='flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item'
          >
            <i data-feather='dollar-sign' className='mr-3'></i>Faturamento
          </a>
          <a
            href='blank.html'
            className='flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item'
          >
            <i data-feather='plus' className='mr-3'></i>Liberação de gerente
          </a>
          <a
            href='blank.html'
            className='flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item'
          >
            <i data-feather='plus' className='mr-3'></i>Desbloqueio
          </a>
        </nav>
        <a
          href='contato.html'
          className='absolute w-full upgrade-btn bottom-0 active-nav-link text-white flex items-center justify-center py-4'
        >
          <i data-feather='help-circle' className='mr-3'></i>Contate-nos
        </a>
      </aside>
    </>
  )
}

export default Aside
