import Link from 'next/link'
import BackgroundLogin from '../components/backgrounds/backgroundLogin'
import { IEmpresa } from '../../types/empresa'
import { IUserDb } from '../../types/usuario'
import { useState } from 'react'
import axios from '../../providers/axios'
import { Edit } from 'react-feather'
import Seo from '../components/seo'
import AlertsCustom from '../components/alerts'

const CadastrarUsuario = (props: IEmpresa) => {
  const [usuario, setUsuario] = useState<Partial<IUserDb>>({})
  const [errorInserted, setErrorInserted] = useState<string>('')

  function handleInsertUser() {
    axios
      .post('/usuarios', usuario)
      .then((response) => {
        setErrorInserted('OK')
      })
      .catch((error) => {
        setErrorInserted('ERROR')
      })
  }

  function handleHiddenMessage() {
    setErrorInserted('')
  }

  return (
    <>
      <Seo
        title='Cadastro de usuário'
        description='Página responsável pelo cadastro dos usuários do sistema'
      />

      {errorInserted === 'ERROR' && (
        <AlertsCustom
          principalColor='red'
          title='ATENÇÃO!'
          message='Dados inválidos,
          informe-os corretamente e tente novamente.'
          hoverColor='red'
          handleHiddenMessage={handleHiddenMessage}
        />
      )}

      {errorInserted === 'OK' && (
        <AlertsCustom
          principalColor='green'
          title='SUCESSO!'
          message='Usuário cadastrado no sistema, volte e faça entre com seus dados.'
          hoverColor='green'
          handleHiddenMessage={handleHiddenMessage}
        />
      )}

      <div className='h-screen overflow-hidden flex items-center justify-center bg-white'>
        <div className='bg-white dark:bg-gray-900'>
          <div className='flex justify-center h-screen'>
            <BackgroundLogin />

            {/* componente de login */}
            <div className='flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6'>
              <div className='flex-1'>
                <div className='text-center'>
                  {/* <h2 className='text-4xl font-bold text-center text-gray-700 dark:text-white'>
                    Seus dados
                  </h2> */}

                  <p className='text-lg font-medium mt-3 text-gray-500 dark:text-gray-300'>
                    Informe seus dados
                  </p>
                </div>

                <div className='mt-8'>
                  <form>
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
                        value={usuario.l2idempr || ''}
                        onChange={(event) => {
                          setUsuario({
                            ...usuario,
                            l2idempr: 1, //Number(event.target.value), Vai ser um select
                          })
                        }}
                        placeholder='TESTE isso sera um select'
                        className='block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
                      />
                    </div>

                    <div>
                      <label
                        htmlFor='nome'
                        className='block mb-2 text-sm text-gray-600 dark:text-gray-200'
                      >
                        Nome no Lapwin
                      </label>
                      <input
                        type='nome'
                        name='nome'
                        id='nome'
                        value={usuario.l2nomeus || ''}
                        onChange={(event) =>
                          setUsuario({
                            ...usuario,
                            l2nomeus: event.target.value,
                          })
                        }
                        placeholder='Seu nome no Lapwin'
                        className='block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
                      />
                    </div>

                    <div className='mt-4'>
                      <div className='flex justify-between mb-2'>
                        <label
                          htmlFor='password'
                          className='text-sm text-gray-600 dark:text-gray-200'
                        >
                          Senha no Lapwin
                        </label>
                      </div>

                      <input
                        type='password'
                        name='password'
                        id='password'
                        value={usuario.l2senhau || ''}
                        onChange={(event) =>
                          setUsuario({
                            ...usuario,
                            l2senhau: event.target.value,
                          })
                        }
                        placeholder='Sua senha no Lapwin'
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
                        value={usuario.l2uemail || ''}
                        onChange={(event) =>
                          setUsuario({
                            ...usuario,
                            l2uemail: event.target.value,
                          })
                        }
                        placeholder='examplo@examplo.com'
                        className='block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
                      />
                    </div>

                    <div className='mt-4'>
                      <div className='flex justify-between mb-2'>
                        <label
                          htmlFor='passwordw'
                          className='text-sm text-gray-600 dark:text-gray-200'
                        >
                          Senha do site
                        </label>
                      </div>

                      <input
                        type='password'
                        name='passwordw'
                        id='passwordw'
                        value={usuario.l2senhaw || ''}
                        onChange={(event) =>
                          setUsuario({
                            ...usuario,
                            l2senhaw: event.target.value,
                          })
                        }
                        placeholder='Sua senha no site'
                        className='block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40'
                      />
                    </div>

                    <div className='mt-6 text-base'>
                      <button
                        type='button'
                        onClick={handleInsertUser}
                        className='w-full px-4 py-2 tracking-wide text-white text-center transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50'
                      >
                        <Edit size={24} color='white' className='mr-3 inline' />
                        <span className='text-lg'>Cadastrar</span>
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
