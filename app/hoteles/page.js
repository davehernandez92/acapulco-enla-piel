import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineMapPin } from "react-icons/hi2";

import hotelSq from '@/public/images/hotelSquare.webp'
import hotel from '@/public/images/hoteles.webp'
import nautilus from '@/public/images/hoteles/nautilus/1.webp'
import olimar from '@/public/images/hoteles/olimar/1.webp'
import puertoAngel from '@/public/images/hoteles/bungalosPangel/1.jpg'
import olivares from '@/public/images/hoteles/BUNGALOWS OLIVARES/1.jpg'
import milagros from '@/public/images/hoteles/milagros/1.webp'

import carlisa from '@/public/images/hoteles/HOTEL CARLISA/1.jpg'
import sol from '@/public/images/hoteles/donde mira el sol/1.jpg'
import delValle from '@/public/images/hoteles/HOTEL DEL VALLE/1.jpg'
import laJungla from '@/public/images/hoteles/HOTEL LA JUNGLA/1.jpg'
import miramar from '@/public/images/hoteles/HOTEL MIRAMAR/1.jpg'
import rove from '@/public/images/hoteles/HOTEL ROVE/1.jpg'
import reyes from '@/public/images/hoteles/HOTEL DE LOS REYES/1.jpg'
import vicky from '@/public/images/hoteles/SUITES VICKY/1.jpg'
import styles from '../styles/hoteles.module.css'



export default function Hotelpage() {
  const hoteles = [

    {
      title: 'Villas Nautilus',
      image: nautilus,
      alt: 'Imagen de Villas Nautilus',
      zona: 'Bonfil',
      type: 'Hotel',
      url: '/hoteles/nautilus'

    },


    {
      title: 'Hotel Olimar',
      image: olimar,
      alt: 'Imagen del Hotel Olimar',
      zona: 'Caletilla',
      type: 'Hotel',
      url: '/hoteles/olimar'

    },
    {
      title: 'Hotel Donde mira el sol',
      image: sol,
      alt: 'Imagen de Hotel donde mira el sol',
      zona: 'Zona Poniente',
      type: 'Hotel',
      url: '/hoteles/dondeMiraElSol'

    },
    {
      title: 'Bungalows los Milagros',
      image: milagros,
      alt: 'Imagen de Bungalows los Milagros',
      zona: 'Fracc. Las Playas',
      type: 'Bungalows',
      url: '/hoteles/bungalowsMilagros'

    },
    {
      title: 'Bungalows Puerto Angel',
      image: puertoAngel,
      alt: 'Imagen de Bungalows Puerto Angel',
      zona: 'Caletilla',
      type: 'Bungalows',
      url: '/hoteles/puertoAngel'

    },
    {
      title: 'Bungalows Olivares',
      image: olivares,
      alt: 'Imagen de Bungalows Olivares',
      zona: 'Caletilla',
      type: 'Bungalows',
      url: '/hoteles/bungalowsOlivares'

    },
    // {
    //   title: 'Hotel Carlisa',
    //   image: carlisa,
    //   alt: 'Imagen del Hotel Carlisa',
    //   zona: 'Zona centro',
    //   type: 'Hotel',
    //   url: '/hoteles/carlisa'

    // },
    // {
    //   title: 'Hotel Rove',
    //   image: rove,
    //   alt: 'Imagen de Hotel Rove',
    //   zona: 'Zona centro',
    //   type: 'Hotel',
    //   url: '/hoteles/rove'

    // },
    
    // {
    //   title: 'Hotel Del Valle',
    //   image: delValle,
    //   alt: 'Imagen del Hotel Del Valle',
    //   zona: 'Fracc Magallanes',
    //   type: 'Hotel',
    //   url: '/hoteles/hotelDelValle'

    // },
    // {
    //   title: 'Hotel Miramar',
    //   image: miramar,
    //   alt: 'Fracc Magallanes',
    //   zona: 'Zona centro',
    //   type: 'Hotel',
    //   url: '/hoteles/hotelMiramar'

    // },
    // {
    //   title: 'Hotel La Jungla',
    //   image: laJungla,
    //   alt: 'Imagen del Hotel La Jungle',
    //   zona: 'Zona Tradicional',
    //   type: 'Hotel',
    //   url: '/hoteles/hotelLaJungla'

    // },
    // {
    //   title: 'Suites Vicky',
    //   image: vicky,
    //   alt: 'Imagen de Suites Vicky',
    //   zona: 'Fracc Magallanes',
    //   type: 'Hotel',
    //   url: '/hoteles/suitesVicky'

    // },
    {
      title: 'Hotel De los Reyes',
      image: reyes,
      alt: 'Imagen del Hotel De los Reyes',
      zona: 'Zona Tradicional',
      type: 'Hotel',
      url: '/hoteles/hotelDeLosReyes'

    },
    
  ]

  return (
    <main className='containerP animate '>
      <div className=' mt-2 lg:mt-5 flex flex-col gap-5 '>
        <h1 className=' font-bold text-4xl lg:text-[3.5rem]'>Hoteles</h1>
        <p className='md:w-[89%] lg:w-[70%]'>Explora una diversidad de opciones, desde acogedores hoteles boutique hasta encantadores hostales, que reflejan la auténtica esencia de Acapulco. Descubre tu lugar perfecto para alojarte en este destino mexicano, donde cada rincón ofrece una experiencia única. </p>
        <p className='mb-10'>¡Bienvenido a tu hogar lejos de casa en Acapulco!</p>
      </div>

      <div >
        <Image
          src={hotel}
          width={1650}
          height={729}
          alt='Hotel en Acapulco Guerrero'
          className='hidden md:block rounded-2xl lg:max-h-[720px]'
        />
        <Image
          src={hotelSq}
          width={450}
          height={450}
          alt='Hotel en Acapulco Guerrero'
          className=' md:hidden w-full rounded-2xl'
        />
      </div>

      <section className='mt-24 md:mt-32 lg:mt-[12rem]'>
        <h2 className='font-bold text-3xl lg:text-[2.8rem] lg:mb-5 '>Hoteles</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4'>
          {hoteles.map((hotel => (
            <Link key={hotel.title} href={hotel.url} className={`${styles.card}`}>
              <div className={`my-5 rounded-2xl overflow-hidden border border-gray-200 shadow-md  ${styles.card}`}>
                <Image
                  src={hotel.image}
                  alt={hotel.alt}
                  width={hotel.width}
                  height={hotel.height}
                  className={`w-full  object-cover ${styles.img}`}
                />
                <div className='p-4 '>
                  <p className='text-gray-500 text-[14px]'>{hotel.type}</p>
                  <h3 className={`text-xl font-semibold mb-2 ${styles.title}`}>{hotel.title}</h3>
                  <div className='flex items-center gap-2'>
                    <HiOutlineMapPin className='text-gray-600' />
                    <p className='text-gray-600'>{hotel.zona}</p>
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
