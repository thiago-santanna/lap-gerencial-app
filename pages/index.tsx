import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Head from 'next/head'
import BackgroundLogin from '../pages/components/backgroundLogin'
import { useState } from 'react'
import axios from '../providers/axios'

const Home: NextPage = () => {
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [errorAuthenticated, setErrorAuthenticated] = useState(false)

  const router = useRouter()

  function handleDashboard() {
    axios
      .post('/auth', {
        username,
        password,
      })
      .then(function (response) {
        const isAuthenticated = response.data
        console.log(response.data)
        if (isAuthenticated) {
          setErrorAuthenticated(false)
          router.push('/dashboard')
        } else {
          setErrorAuthenticated(true)
          console.log('usuario nao logado')
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }

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
                  {/* componente de erro login */}
                  {errorAuthenticated && (
                    <div role='alert' className='mb-2'>
                      <div className='bg-red-500 text-white font-bold rounded-t px-4 py-2'>
                        ATENÇÃO
                      </div>
                      <div className='border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700'>
                        <p>Usuário ou senha inválidos.</p>
                      </div>
                    </div>
                  )}
                  {/* componente de erro login */}

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
                        value={username}
                        onChange={(event) => setUserName(event.target.value)}
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
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        className='block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
                      />
                    </div>

                    <div className='mt-6'>
                      <button
                        type='button'
                        onClick={handleDashboard}
                        className='w-full px-4 py-2 tracking-wide text-white text-center transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50'
                      >
                        Entrar
                      </button>
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
