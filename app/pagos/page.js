import Link from 'next/link'
import React from 'react'

export default function Pagospage() {
  return (
    <div className=" animate mt-24 mb-[15rem] containerX flex flex-col gap-3 lg:gap-4 md:w-full md:justify-center lg:w-[70%] lg:mx-auto text-center">
        <h1>Gracias por escoger Acapulco en la piel </h1>
        <h2>Selecciona el tipo de suscripción que desees</h2>

        <div className='flex flex-col gap-5 mt-10 justify-center items-center'>
        <Link className='px-4 py-2 w-2/3 hover:bg-gray-200 hover:border-gray-400 transition-colors duration-300' href={'https://buy.stripe.com/6oE02tdiY1ITdWw28a'}> Suscripción por 1 mes  </Link>
        <Link className='px-4 py-2 w-2/3 hover:bg-gray-200 hover:border-gray-400 transition-colors duration-300' href={'https://buy.stripe.com/fZe7uVdiY2MX19KfYZ'}> Suscripción por 6 meses  </Link>
        <Link className='px-4 py-2 w-2/3 hover:bg-gray-200 hover:border-gray-400 transition-colors duration-300' href={'https://buy.stripe.com/00gaH74MsafpaKk144'}> Suscripción por 1 año  </Link>

        </div>
    </div>
  )
}
