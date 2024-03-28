
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineMapPin } from "react-icons/hi2";

import bienesMobile from '@/public/images/headerBienesMobile.webp'
import bienesHeader from '@/public/images/headerBienes.webp'

import sotelo from '@/public/images/restaurantes/sotelo/1.webp'
import langosta from '@/public/images/restaurantes/langosta/1.webp'

import styles from '../styles/hoteles.module.css'

export default function BienesPage() {

  const restaurantes = [

    {
      title: 'Tacos Sotelo',
      image: sotelo,
      alt: 'Imagen de Tacos Sotelo',
      zona: 'Zona Poniente',
      type: 'Taqueria',
      url: '/bienes/sotelo'

    },


    {
      title: 'Restaurante La Langosta',
      image: langosta,
      alt: 'Imagen de restaurante La Langosta',
      zona: 'Puerto Marqués',
      type: 'Restaurante',
      url: '/bienes/laLangosta'

    },
    

  ]

  return (
    <main className=' animate '>
    
      <div className='section' >
        <Image
          src={bienesHeader}
          width={1650}
          height={729}
          alt='Imagen de Bienes raices en Acapulco Guerrero'
          className='hidden md:block md:pt-5 md:rounded-md   lg:max-h-[720px] w-full pt-10'
        />
        <Image
          src={bienesMobile}
          width={600}
          height={1200}
          alt='Bienes raices en Acapulco Guerrero'
          className=' md:hidden w-full rounded-sm'
        />
      </div>

      <div className={`hidden md:flex mt-2 lg:mt-5  flex-col gap-5  ${styles.heroDiv}`}>
        <h1 className=' font-bold text-4xl lg:text-[3.5rem]'>Bienes Raices</h1>
        <p className='md:w-[89%] lg:w-[70%]'>Embárcate en un viaje a través de una amplia gama de propiedades, desde acogedoras casas familiares hasta lujosas residencias frente al mar, que capturan la auténtica esencia del mercado inmobiliario en Acapulco. Descubre tu rincón perfecto para vivir en este destino paradisíaco, donde cada propiedad ofrece un estilo de vida único.
</p>
        <p className='mb-10'>
¡Bienvenido a tu paraíso inmobiliario en Acapulco!</p>
      </div>

      <section className='containerX mt-24 md:mt-32 lg:mt-[5rem]'>
        <h2 className='font-bold text-3xl md:hidden'>Restaurantes</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4'>
          {restaurantes.map((restaurante => (
            <Link key={restaurante.title} href={restaurante.url} className={`${styles.card}`}>
              <div className={`my-5 rounded-2xl overflow-hidden border border-gray-200 shadow-md  ${styles.card}`}>
                <Image
                  src={restaurante.image}
                  alt={restaurante.alt}
                  width={restaurante.width}
                  height={restaurante.height}
                  className={`w-full  object-cover ${styles.img}`}
                />
                <div className='p-4 '>
                  <p className='text-gray-500 text-[14px]'>{restaurante.type}</p>
                  <h3 className={`text-xl font-semibold mb-2 ${styles.title}`}>{restaurante.title}</h3>
                  <div className='flex items-center gap-2'>
                    <HiOutlineMapPin className='text-gray-600' />
                    <p className='text-gray-600'>{restaurante.zona}</p>
                  </div>
                </div>
              </div>
            </Link>
          )))}
        </div>
      </section>
    </main>
  )
}

