import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import BackgroundLogin from '../components/backgroundLogin'
import { IEmpresa } from '../../types/empresa'
import { IUserDb } from '../../types/usuario'

const CadastrarUsuario = (props: IEmpresa) => {
  function handleInsertUser() {}

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
                    Seus dados
                  </h2>

                  <p className='mt-3 text-gray-500 dark:text-gray-300'>
                    Crie agora sua conta
                  </p>
                </div>

                <div className='mt-8'>
                  <form>
                    <div>
                      <label
                        htmlFor='nome'
                        className='block mb-2 text-sm text-gray-600 dark:text-gray-200'
                      >
                        Nome
                      </label>
                      <input
                        type='nome'
                        name='nome'
                        id='nome'
                        placeholder='fulano de tal'
                        className='block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
                      />
                    </div>

                    <div className='mt-4'>
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

                    <div className='mt-4'>
                      <label
                        htmlFor='Empresa'
                        className='block mb-2 text-sm text-gray-600 dark:text-gray-200'
                      >
                        Código da empresa
                      </label>
                      <input
                        type='Empresa'
                        name='Empresa'
                        id='Empresa'
                        placeholder='LAP'
                        className='block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
                      />
                    </div>

                    <div className='mt-4'>
                      <div className='flex justify-between mb-2'>
                        <label
                          htmlFor='password'
                          className='text-sm text-gray-600 dark:text-gray-200'
                        >
                          Senha
                        </label>
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
                      <button
                        type='button'
                        className='w-full px-4 py-2 tracking-wide text-white text-center transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50'
                      >
                        Cadastrar
                      </button>
                    </div>
                  </form>

                  <p className='mt-6 text-sm text-center text-gray-400'>
                    Já tem uma conta?
                    <Link href='/'>
                      <a className='text-blue-500 pl-1 focus:outline-none focus:underline hover:underline'>
                        Entre agora
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

export default CadastrarUsuario

export async function getStaticProps() {
  const empresas = [
    { ljcodemp: 'LAP' },
    { ljcodemp: 'FIL' },
    { ljcodemp: 'IF4' },
    { ljcodemp: 'LAP' },
  ]

  return {
    props: {
      empresas,
    },
  }
}
