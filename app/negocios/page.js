import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineMapPin } from "react-icons/hi2";

import restMobile from '@/public/images/negocios.webp'
import restaurante from '@/public/images/heroNegocios.webp'
import sotelo from '@/public/images/restaurantes/sotelo/1.webp'
import langosta from '@/public/images/restaurantes/langosta/1.webp'
import fondita from '@/public/images/restaurantes/lafondita/1.webp'

import styles from '../styles/hoteles.module.css'



export default function ResturantePage() {
  const negocios = [

    {
      title: 'Tacos Sotelo',
      image: sotelo,
      alt: 'Imagen de Tacos Sotelo',
      zona: 'Zona Poniente',
      type: 'Taqueria',
      url: '/negocios/sotelo'

    },


    {
      title: 'Restaurante La Langosta',
      image: langosta,
      alt: 'Imagen de restaurante La Langosta',
      zona: 'Puerto Marqués',
      type: 'Restaurante',
      url: '/negocios/laLangosta'

    },
    {
      title: 'Restaurante La Fondita',
      image: fondita,
      alt: 'Imagen del Restaurante La Fondita',
      zona: 'Zona Diamante',
      type: 'Restaurante',
      url: '/negocios/laFondita'

    },

  ]

  return (
    <main className=' animate '>
    
      <div className='section' >
        <Image
          src={restaurante}
          width={1650}
          height={729}
          alt='Imagen de Comida en Acapulco Guerrero'
          className='hidden md:block md:pt-5 md:rounded-md   lg:max-h-[720px] w-full pt-10'
        />
        <Image
          src={restMobile}
          width={600}
          height={1200}
          alt='Hotel en Acapulco Guerrero'
          className=' md:hidden w-full rounded-sm'
        />
      </div>

      <div className={`hidden md:flex mt-2 lg:mt-5  flex-col gap-5  ${styles.heroDiv}`}>
        <h1 className=' font-bold text-4xl lg:text-[3.5rem]'>Negocios en Acapulco</h1>
        <p className='md:w-[89%] lg:w-[70%]'>Sumérgete en una variedad de sabores, desde acogedores rincones de tacos hasta encantadores restaurantes, que capturan la auténtica esencia gastronómica de Acapulco. Descubre tu rincón perfecto para saborear en este destino mexicano, donde cada establecimiento ofrece una experiencia única.</p>
        <p className='mb-10'>¡Bienvenido a tu paraíso culinario en Acapulco!</p>
      </div>

      <section className='containerX mt-24 md:mt-32 lg:mt-[5rem]'>
        <h2 className='font-bold text-3xl md:hidden'>Negocios en Acapulco</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4'>
          {negocios.map((negocio => (
            <Link key={negocio.title} href={negocio.url} className={`${styles.card}`}>
              <div className={`my-5 rounded-2xl overflow-hidden border border-gray-200 shadow-md  ${styles.card}`}>
                <Image
                  src={negocio.image}
                  alt={negocio.alt}
                  width={negocio.width}
                  height={negocio.height}
                  className={`w-full  object-cover ${styles.img}`}
                />
                <div className='p-4 '>
                  <p className='text-gray-500 text-[14px]'>{negocio.type}</p>
                  <h3 className={`text-xl font-semibold mb-2 ${styles.title}`}>{negocio.title}</h3>
                  <div className='flex items-center gap-2'>
                    <HiOutlineMapPin className='text-gray-600' />
                    <p className='text-gray-600'>{negocio.zona}</p>
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
