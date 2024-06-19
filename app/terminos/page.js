import React from 'react'
import Link from 'next/link'

export default function TerminosPage() {
    return (
        <div className=" animate mt-24  mb-[15rem]  containerX flex flex-col lg:gap-4 md:w-full md:justify-center lg:w-[70%] lg:mx-auto">
            <h1 className='md:text-[3rem] lg:text-[4rem]'>Terminos y condiciones </h1>

            <div className='mt-5 flex flex-col gap-5 lg:mt-14'>
                <h2 className='lg:mb-10'>
                    ¡Bienvenido a Acapulco en la Piel! Te agradecemos por utilizar nuestros servicios. Antes de continuar, por favor lee detenidamente los siguientes términos y condiciones que rigen el uso de nuestra plataforma:
                </h2>
                <ol className='flex flex-col gap-5 md:gap-7'>
                    <li>
                        <span className='font-semibold'>Descripción del Servicio: </span>Acapulco en la Piel es una plataforma en línea dedicada a la publicidad de servicios y negocios ubicados en Acapulco. Nuestro objetivo es proporcionar a nuestros visitantes un lugar centralizado donde puedan explorar diversas opciones disponibles en Acapulco.
                    </li>
                    <li>
                    <span className='font-semibold'>Modelo de Negocio: </span> Los usuarios que deseen publicitar sus negocios o servicios en nuestra página web deben pagar una cuota de membresía. Ofrecemos dos opciones de pago: una cuota mensual de 120 pesos sin plazo forzoso, 600 pesos por seis meses o una cuota anual de 1,000 pesos. <br/>Esta cuota es no reembolsable. Como marca y canal de YouTube, no tenemos ninguna afiliación ni somos empleados de los negocios o servicios publicitados en nuestra plataforma. Simplemente proporcionamos un servicio de anuncios.</li>

                    <li>
                    <span className='font-semibold'>Responsabilidad del Usuario:  </span>Acapulco en la Piel no se hace responsable de la calidad o legalidad de las imágenes proporcionadas por el usuario para su anuncio, ni de cualquier problema de copyright asociado con esas imágenes. Ofrecemos servicios adicionales de fotografía semi-profesional y video tipo reseña de YouTube por un costo extra.</li>

                    <li>
                    <span className='font-semibold'> Deslinde de Responsabilidad: </span>
                    Nos deslindamos completamente del contenido presente en las páginas de Facebook u otras redes sociales vinculadas a los negocios o servicios publicitados en nuestra plataforma. Tampoco garantizamos la autenticidad de los negocios o servicios anunciados.</li>

                    <li><span className='font-semibold'> Métodos de Pago: </span> Aceptamos pagos mediante transferencia o depósito bancario, así como a través de PayPal y pago en tiendas OXXO. Una vez confirmado el pago y recibida la información solicitada, Acapulco en la Piel se compromete a publicar el anuncio en nuestra plataforma en un plazo máximo de 3 días hábiles.

                    </li>
                    <li>
                    <span className='font-semibold'>Privacidad de los Datos: </span>
                     Los datos recopilados por Acapulco en la Piel se utilizarán únicamente con el propósito de crear el anuncio del negocio o servicio y para mantener comunicación con el cliente. No compartiremos ni venderemos esta información a terceros en ningún caso.
                     <br/>
                     Es importante destacar que no almacenaremos ni guardaremos datos bancarios ni cualquier tipo de dato del tipo de pago que el usuario use para pagar su membresía.
                     </li>
                     
                    <li><span className='font-semibold'> Contacto:</span> Ante cualquier duda o aclaración sobre estos términos y condiciones, por favor contáctanos por correo electrónico a: <Link className='text-cyan-800 hover:text-cyan-500' href={' mailto:acapulcoenlapiel8@gmail.com'} >
                    acapulcoenlapiel8@gmail.com
                    </Link></li>
                </ol>
            </div>

            <Link className='text-cyan-950 hover:text-cyan-700 mt-5' href={'/contacto'}>Regresa a Contacto</Link>

        </div>
    )
}
