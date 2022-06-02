import { useState } from 'react'
import { IAlertCustom } from '../../../types/alert-custom'

function AlertsCustom(props: IAlertCustom) {
  const [errorInserted, setErrorInserted] = useState<string>('')

  function handleHiddenMessage() {
    setErrorInserted('')
  }
  return (
    <>
      <div
        className={`bg-red-100 py-5 px-6 mb-3 text-base text-${props.principalColor}-700 inline-flex items-center w-full`}
        role='alert'
      >
        <strong className='mr-1'>{props.title} </strong> {props.message}
        <button
          type='button'
          onClick={handleHiddenMessage}
          className={`font-bold box-content w-4 h-4 p-1 ml-auto text-${props.principalColor}-700 border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-${props.hoverColor}-900 hover:opacity-75 hover:no-underline`}
        >
          X
        </button>
      </div>
    </>
  )
}

export default AlertsCustom
