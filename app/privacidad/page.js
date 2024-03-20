import React from 'react'
import Link from 'next/link'

export default function PrivacidadPage() {
    return (
        <div className=" animate mt-24 mb-[15rem] econtainerX flex flex-col lg:gap-4 md:w-full md:justify-center lg:w-[70%] lg:mx-auto">
            <h1 className='md:text-[3rem] lg:text-[4rem]'>Nuestro Aviso de Privacidad. </h1>

            <div className='mt-5 flex flex-col gap-5 lg:mt-14'>

                <ol className='flex flex-col gap-5 md:gap-7'>
                    <li>
                        <span className='font-semibold'>Datos solicitados: </span>Los datos solicitados son: nombre completo, número telefónico y dirección de correo electrónico.
                        <br />
                        <br />

                        Adicionalmente, solicitaremos información general sobre su negocio o servicio con fines de publicidad dentro de nuestra página web. Todo esto se almacenará únicamente durante el tiempo que el usuario desee permanecer anunciado en nuestra página y se eliminará inmediatamente después en caso de que decida retirarse. Nos comprometemos a no enviar correos de spam ni anuncios de nuestros servicios de ninguna manera, y no se proporcionarán los datos del usuario a terceros.
                    </li>
                    <li>
                        <span className='font-semibold'>Finalidades: </span> Los datos que recabamos de usted serán utilizados para las siguientes finalidades primarias:
                        <br />
                        <br />

                        Para contactar al participante que desee proceder a anunciar su negocio o servicio con nosotros.
                        Para publicitar su negocio o servicio dentro de nuestra página web.
                    </li>

                    <li>
                        <span className='font-semibold'>Transferencia de datos personales:  </span>No se realizará transferencia de datos personales a terceros. La información recopilada será utilizada únicamente para los fines descritos anteriormente.</li>

                    <li>
                        <span className='font-semibold'> Deslinde de Responsabilidad: </span>
                        Nos deslindamos completamente del contenido presente en las páginas de Facebook u otras redes sociales vinculadas a los negocios o servicios publicitados en nuestra plataforma. Tampoco garantizamos la autenticidad de los negocios o servicios anunciados.</li>

                    <li><span className='font-semibold'> Ejercicio de los derechos ARCO (Acceso, Rectificación, Cancelación y Oposición): </span> El titular de los datos tiene derecho a solicitar en cualquier momento el acceso, rectificación, cancelación u oposición de sus datos personales. Para ejercer estos derechos, puede ponerse en contacto con nosotros a través del correo electrónico <Link className='text-cyan-800 hover:text-cyan-500' href={'mailto:acapulcoenlapiel8@gmail.com'}>acapulcoenlapiel8@gmail.com</Link>, dirigido a Dave Hernandez

                    </li>
                    <li>
                        <span className='font-semibold'> Modificaciones al aviso de privacidad: </span>
                        El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones. Nos comprometemos a informar cualquier cambio a través de nuestro portal web oficial en <Link className='text-cyan-800 hover:text-cyan-500' href={'/privacidad'} >
                            www.acapulcoenlapiel.com.mx/privacidad
                        </Link> </li>

                    <li><span className='font-semibold'> Contacto:</span>Si usted tiene alguna duda sobre el presente aviso de privacidad, puede dirigirla a nuestra dirección de correo electrónico: <Link className='text-cyan-800 hover:text-cyan-500' href={'mailto:acapulcoenlapiel8@gmail.com'} >
                        acapulcoenlapiel8@gmail.com
                    </Link></li>
                </ol>
            </div>

            <Link className='text-cyan-950 hover:text-cyan-700 mt-5' href={'/contacto'}>Regresa a Contacto</Link>

        </div>
    )
}
