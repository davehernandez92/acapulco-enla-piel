'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import galeryInfo from '@/json/galeria.json';
import { motion } from 'framer-motion'
import header from '@/public/images/headerGaleria.webp'
import youtube from '@/public/images/youtubeBlack.png';
import styles from '@/app/components/styles/galleryGrid.module.css'

export default function GaleriaPage() {
  const galeria = galeryInfo
  return (
    <main>
      
        <motion.div initial={{ opacity: 0, y: 10 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.3 },
          }}
          viewport={{ once: true }}
        >
          
          <Image
            src={header}
            width={2000}
            height={600}
            alt='Imagen de Acapulco'
            className=' h-auto  w-full'

          />
        </motion.div>
        

      
      
      <div>
      <h2 className='mt-10 mb-4 lg:mt-36 text-center text-[2.5rem] lg:text-[3.8rem]'> Galería </h2>
      <p className='text-center text-[2rem] lg:text-[2.4rem]'> Este es un pequeño vistazo de Acapulco</p>
            <div className={`px-3 ${styles.gallery__grid}`}>
                
                {galeria.images.map((image, index) => (
                    <div key={index} className={styles.gallery__item}>
                        <Image
                            
                            src={image.src}
                            alt={`Imagen de Acapulco `}
                            width={image.width}
                            height={image.height}
                            className='animate'
                        />
                    </div>
                ))}
            </div>

      </div>
      <div className='containerP my-10 md:my-[6rem] lg:my-[10rem]'>
        <h2 className=' text-[1.8rem] md:text-center lg:text-[2.8rem]'>Checa nuestro canal de YouTube.</h2>

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
