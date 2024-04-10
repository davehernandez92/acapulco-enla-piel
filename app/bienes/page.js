
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import bienesMobile from '@/public/images/headerBienesMobile.webp'
import bienesHeader from '@/public/images/headerBienes.webp'

import maral from '@/public/images/maral.jpg'

import styles from '../styles/hoteles.module.css'
import { PropiedadesCarousel } from '../components/propiedadesCarousel'

export default function BienesPage() {

  

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

      <div className={` animate containerP md:flex mt-2 lg:mt-5  flex-col gap-5  ${styles.heroDiv}`}>
        <h1 className=' font-bold mb-5 text-4xl lg:text-[3.5rem] '>Bienes Raices</h1>
        <h2 className='  md:w-[89%] lg:w-[70%]'>¿Buscas casa en Acapulco? </h2>
        <p className=' md:w-[89%] lg:w-[70%]'> Nosotros podemos ayudarte.
A través de MARAL BIENES RAÍCES, puedes acceder a un catálogo de propiedades que seguramente se ajustarán a tus necesidades. Ya sea que busques una casa o departamento, sin duda son los mejores para ayudarte a elegir por ubicación, precio, costo beneficio y todo lo que tú consideres necesario para tu comodidad y satisfacción.
        </p>
        <p className='mb-10'>
        Asesoría y amabilidad totalmente personalizada, es lo que caracteriza el servicio.</p>

        <p className='md:w-[89%] lg:w-[70%]'>Si buscas casa o departamento, ya sea amueblado o sin amueblar, para RENTA en periodos vacacionales, no dudes en llamar o contactar a través de sus redes sociales, ya que también son especializados en el tema.

        </p>

        <Image className='w-2/3 h-auto mx-auto mt-10 md:h-1/3 md:w-auto' src={maral} alt='Imagen Maral' width={450} height={800} />
      </div>

      <div className={`containerP md:flex mt-2  flex-col gap-5 md:px-[7rem]`}>
        <h2>Checa estas propiedades primo</h2>
        
        <PropiedadesCarousel/>
      </div>
    </main>
  )
}

