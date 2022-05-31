const MainFaturamento = () => {
  return (
    <>
      <main className='w-full flex-grow p-6'>
        <h1 className='text-3xl text-black pb-6'>Faturamento</h1>

        <div className='flex flex-wrap'>
          <div className='w-full lg:w-1/2 pr-0 lg:pr-2'>
            {/* <!-- <p className="text-xl pb-3 flex items-center" id="teste">
                    <i className="fas fa-plus mr-3"></i> Parâmetros
                  </p> --> */}
            <div className='p-6 bg-white' id='form-param'>
              <form className='p-6'>
                <div className=''>
                  <label
                    className='block text-sm text-gray-600'
                    htmlFor='empresas'
                  >
                    Empresas
                  </label>
                  <select
                    name='select'
                    className='w-full px-5 py-1 text-gray-700 bg-gray-200 rounded'
                    id='empresas'
                    // name ='empresas'
                  >
                    <option value='todas' selected>
                      Selecione uma empresa
                    </option>
                  </select>
                </div>
                <div className='mt-2'>
                  <label
                    className='block text-sm text-gray-600'
                    htmlFor='dt-inicial'
                  >
                    Data inicial
                  </label>
                  <input
                    className='w-full px-5 py-1 text-gray-700 bg-gray-200 rounded'
                    id='dt-inicial'
                    name='dt-inicial'
                    type='date'
                    placeholder='Data inicial'
                  />
                </div>
                <div className='mt-2'>
                  <label
                    className='block text-sm text-gray-600'
                    htmlFor='dt-final'
                  >
                    Data inicial
                  </label>
                  <input
                    className='w-full px-5 py-1 text-gray-700 bg-gray-200 rounded'
                    id='dt-final'
                    name='dt-final'
                    type='date'
                    placeholder='Data final'
                  />
                </div>
                <div className='mt-6'>
                  <button
                    className='px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded'
                    type='button'
                  >
                    Gerar
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className='w-full lg:w-1/2 pl-0 lg:pl-2 mt-12 lg:mt-0'>
            {/* <!-- <p className="text-xl pb-3 flex items-center">
                    <i className="fas fa-check mr-3"></i> Gráfico
                  </p> --> */}
            <div className='p-6 bg-white' id='chart-dunut'></div>
          </div>
        </div>

        <div className='w-full mt-12'>
          <p className='text-xl pb-3 flex items-center'>
            <i className='fas fa-list mr-3'></i> Faturamento por tipo
          </p>
          <div className='overflow-auto'>
            <table className='table-auto'>
              <thead className='bg-gray-800 text-white'>
                <tr>
                  <th className='w-1/4 text-left pl-2'>Forma de pagamento</th>
                  <th className='w-1/4 text-left'>Valor</th>
                </tr>
              </thead>
              <tbody id='tb-data' className='bg-white'>
                <tr>
                  <td className='p-2'>Espécie</td>
                  <td id='td-especie'>0</td>
                </tr>
                <tr className='bg-gray-200'>
                  <td className='p-2'>Cartão</td>
                  <td id='td-cartao'>0</td>
                </tr>
                <tr>
                  <td className='p-2'>Duplicatas</td>
                  <td id='td-duplicata'>0</td>
                </tr>
                <tr className='bg-gray-200'>
                  <td className='p-2'>Vales Devolução</td>
                  <td id='td-vales'>0</td>
                </tr>
                <tr>
                  <td className='p-2'>Cheque</td>
                  <td id='td-cheque'>0</td>
                </tr>
                <tr className='bg-gray-200'>
                  <td className='p-2'>Cheque Prédatado</td>
                  <td id='td-cheque-pre'>0</td>
                </tr>
                <tr>
                  <td className='p-2'>Retenção</td>
                  <td id='td-retencao'>0</td>
                </tr>
                <tr className='bg-gray-200'>
                  <td className='p-2'>Transferência filial</td>
                  <td id='td-transf-filial'>0</td>
                </tr>
                <tr>
                  <td className='p-2'>Coligadas</td>
                  <td id='td-coligadas'>0</td>
                </tr>
                <tr className='bg-gray-200'>
                  <td className='p-2'>Faturamento Posterior</td>
                  <td id='td-posterior'>0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  )
}

export default MainFaturamento
