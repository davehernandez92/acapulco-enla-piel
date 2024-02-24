'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import otisGalery from '@/json/otisGaleria.json';
import { motion } from 'framer-motion'
import otis from '@/public/images/otis4.webp'
import otisMobile from '@/public/images/otisMobile.webp'
import youtube from '@/public/images/youtubeBlack.png';
import styles from '@/app/components/styles/galleryGrid.module.css'

export default function OtisPage() {
  const galeria = otisGalery
  return (
    <main>
      <div className='w-100 h-100 relative  bg-slate-950 '>
        <motion.div initial={{ opacity: 0, y: 10 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.3 },
          }}
          viewport={{ once: true }}
        >
          <Image
            src={otisMobile}
            width={650}
            height={1000}
            alt='Imagen de Acapulco OTIS'
            className=' w-full h-[90vh] z-[1] md:hidden'

          />
          <Image
            src={otis}
            width={2000}
            height={1000}
            alt='Imagen de Acapulco OTIS'
            className=' hidden md:block  w-full  z-[1]'

          />
        </motion.div>
        <div className='absolute z-[2] top-[30%] md:top-[15%] w-full flex gap-2 justify-center '>
          <motion.h1 initial={{ opacity: 0, y: 10 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.13, duration: 0.9 },
            }} className='text-[9.2rem] text-slate-200 md:text-[10.2rem] md:text-slate-300 lg:text-[25rem] lg:text-slate-200'>O</motion.h1>
          <motion.h1 initial={{ opacity: 0, y: 10 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.15, duration: 0.9 },
            }} className='text-[9.2rem] text-slate-200 md:text-[10.2rem] md:text-slate-300 lg:text-[25rem] lg:text-slate-200'>T</motion.h1>
          <motion.h1 initial={{ opacity: 0, y: 10 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.18, duration: 0.9 },
            }} className='text-[9.2rem] text-slate-200 md:text-[10.2rem] md:text-slate-300 lg:text-[25rem] lg:text-slate-200'>I</motion.h1>
          <motion.h1 initial={{ opacity: 0, y: 10 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.18, duration: 0.9 },
            }} className='text-[9.2rem] text-slate-200 md:text-[10.2rem] md:text-slate-300 lg:text-[25rem] lg:text-slate-200'>S</motion.h1>
        </div>

      </div>
      <div className='containerP my-[1rem] flex flex-col gap-5 text-center lg:gap-8 lg:items-center lg:justify-center lg:h-[60vh]'>
        <motion.p initial={{ opacity: 0, y: 7 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.3 },
          }}
          viewport={{ once: true }} className='px-[1rem] md:text-[1.8rem] lg:w-[60%]'>
          Galería exclusiva de nuestra experiencia con el huracán más poderoso que haya golpeado a Acapulco alguna vez.
        </motion.p>
        <motion.p initial={{ opacity: 0, y: 7 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.2, duration: 0.3 },
          }}
          viewport={{ once: true }} className='px-[1rem] md:text-[1.8rem] lg:w-[60%]'>
          Fotografías que no hemos publicado y que no vas a encontrar en otro lugar, solamente aquí en nuestra página web.
        </motion.p>

      </div>
      <div>
      <h2 className='mt-10 mb-4 lg:mt-36 text-center text-[2.5rem] lg:text-[3.8rem]'> Galería </h2>
            <div className={`px-3 ${styles.gallery__grid}`}>
                
                {galeria.images.map((image, index) => (
                    <div key={index} className={styles.gallery__item}>
                        <Image
                            
                            src={image.src}
                            alt={`Imagen de Acapulco OTIS `}
                            width={image.width}
                            height={image.height}
                        />
                    </div>
                ))}
            </div>

      </div>
      <div className='containerP my-10 md:my-[6rem] lg:my-[10rem]'>
        <h2 className=' text-[1.8rem] md:text-center lg:text-[2.8rem]'>Checa nuestro documental en el canal de YouTube.</h2>

        <Link title='Video de youtube' target='blank' href={'https://www.youtube.com/watch?v=BRuMDCfq_gE&ab_channel=AcapulcoEnLaPiel'}>
          <div className='relative group md:w-[600px] m-auto lg:w-[800px] '>
            <Image
              src={youtube}
              alt='Enlace a youtube'
              width={1000}
              height={500}
              className='mt-8 md:w-[400px] m-auto lg:w-[800px] transition-transform duration-300 transform hover:scale-105 hover:filter-grayscale'
            />
            <div className='absolute inset-0 bg-gray-300 opacity-0 group-hover:opacity-25'></div>
          </div>
        </Link>

      </div>


    </main>
  )
}
