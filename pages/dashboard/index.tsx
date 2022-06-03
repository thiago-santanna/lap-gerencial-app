import { NextPage } from 'next'
import Seo from '../components/seo'

const Dashboard: NextPage = () => {
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
