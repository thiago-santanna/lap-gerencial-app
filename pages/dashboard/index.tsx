import { NextPage } from 'next'
import Seo from '../components/seo'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Dashboard: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
    const credentials = sessionStorage.getItem('sessionUser')
    if (!credentials) {
      router.push('/')
    }
  }, [router])
  return (
    <>
      <Seo
        title='Dashboard'
        description='Página principal do sistema, selecione o serviço'
      />

      <main className='w-full flex-grow p-6'>
        <p>Dashboard</p>
      </main>
    </>
  )
}

export default Dashboard
