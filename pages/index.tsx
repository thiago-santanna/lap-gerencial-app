import type { NextPage, GetServerSideProps } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import BackgroundLogin from '../pages/components/backgroundLogin'
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Lap Gerencial</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>

      <div className='h-screen overflow-hidden flex items-center justify-center bg-white'>
        <div className='bg-white dark:bg-gray-900'>
          <div className='flex justify-center h-screen'>
            <BackgroundLogin />

            {/* componente de login */}
            <div className='flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6'>
              <div className='flex-1'>
                <div className='text-center'>
                  <h2 className='text-4xl font-bold text-center text-gray-700 dark:text-white'>
                    Seja bem vindo
                  </h2>

                  <p className='mt-3 text-gray-500 dark:text-gray-300'>
                    Acesse agora sua conta
                  </p>
                </div>

                <div className='mt-8'>
                  <form>
                    <div>
                      <label
                        htmlFor='email'
                        className='block mb-2 text-sm text-gray-600 dark:text-gray-200'
                      >
                        Endereço de e-mail
                      </label>
                      <input
                        type='email'
                        name='email'
                        id='email'
                        placeholder='examplo@examplo.com'
                        className='block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
                      />
                    </div>

                    <div className='mt-6'>
                      <div className='flex justify-between mb-2'>
                        <label
                          htmlFor='password'
                          className='text-sm text-gray-600 dark:text-gray-200'
                        >
                          Senha
                        </label>
                        <a
                          href='#'
                          className='text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline'
                        >
                          Esqueceu da senha?
                        </a>
                      </div>

                      <input
                        type='password'
                        name='password'
                        id='password'
                        placeholder='Sua Senha'
                        className='block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
                      />
                    </div>

                    <div className='mt-6'>
                      <div className='w-full px-4 py-2 tracking-wide text-white text-center transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50'>
                        <Link href='/dashboard'>
                          <a>Entrar</a>
                        </Link>
                      </div>
                    </div>
                  </form>

                  <p className='mt-6 text-sm text-center text-gray-400'>
                    Não tem uma conta?
                    <Link href='/usuario/cadastrar'>
                      <a className='text-blue-500 pl-1 focus:outline-none focus:underline hover:underline'>
                        Cadastre-se
                      </a>
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
            {/* componente de login */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
