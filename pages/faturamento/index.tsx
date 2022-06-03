import { NextPage } from 'next'
import Seo from '../components/seo'

const Faturamento: NextPage = () => {
  return (
    <>
      <Seo
        title='Dashboard'
        description='Página principal do sistema, selecione o serviço'
      />

      <main className='w-full flex-grow p-6'>
        <p>Faturamento</p>
      </main>
    </>
  )
}

export default Faturamento
