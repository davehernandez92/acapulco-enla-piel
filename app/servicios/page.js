import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineMapPin } from "react-icons/hi2";

import heroMobile from '@/public/images/servicios/servicios2.webp'
import hero from '@/public/images/servicios/servicios.webp'
import dea from '@/public/images/servicios/dea.webp'
import drone from '@/public/images/servicios/drone.webp'
import allan from '@/public/images/servicios/allan.webp'

import styles from '../styles/hoteles.module.css'

export default function ServiciosPage() {
  const servicios = [

    {
      title: 'Dea García ',
      image: dea,
      alt: 'Imagen de Dea Garcia',
      servicio: 'Fotografía y artes gráficas',
      url: '/servicios/DeaGarcia'

    },


    {
      title: 'Dr Dronemx',
      image: drone,
      alt: 'Imagen de Dr Dronemx',
      servicio: 'Servicio de video con drone',
      url: '/servicios/dronemx'

    },
    {
      title: 'Allan Banuelos',
      image: allan,
      alt: 'Imagen del Restaurante La Fondita',
      servicio: 'Fotografo de bodas y parejas',
      url: 'https://allan-photographer.vercel.app/'

    },

  ]
  return (


    <main className=' animate '>

      <div className='section' >
        <Image
          src={hero}
          width={1650}
          height={729}
          alt='Banner de servicios'
          className='hidden md:block md:pt-5 md:rounded-md   lg:max-h-[720px] w-full pt-10'
        />
        <Image
          src={heroMobile}
          width={600}
          height={1200}
          alt='Banner de servicos'
          className=' md:hidden w-full rounded-sm pt-2 mt-5'
        />
      </div>

      <div className={` containerP flex mt-2 lg:mt-5  flex-col gap-5  ${styles.heroDiv}`}>
        <h1 className=' font-bold text-4xl lg:text-[3.5rem]'>Nuestros Servicios</h1>
        <p className='md:w-[89%] lg:w-[78%]'>Explora una amplia gama de servicios en Acapulco, desde profesionales de la salud como doctores y dentistas, hasta talentosos fotógrafos, planificadores de bodas, hábiles plomeros, mecánicos y estilistas. </p>
        <p className='hidden md:block md:w-[89%] lg:w-[78%]'>Descubre la auténtica esencia de la comunidad acapulqueña a través de la calidad y calidez de los servicios ofrecidos en este destino mexicano. Cada profesional y establecimiento brinda una experiencia única, garantizando satisfacción y profesionalismo en cada servicio. </p>

        <p className='mb-10'>¡Bienvenido a la diversidad de servicios en Acapulco, donde la comunidad está lista para atenderte con calidez y amabilidad, como buenos acapulqueños!</p>

      </div>

      <section className='containerX mt-24 md:mt-32 lg:mt-[5rem]'>
        <h2 className='font-bold text-3xl md:hidden'>Servicios</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4'>
          {servicios.map((servicio => (
            <Link key={servicio.title} href={servicio.url} className={`${styles.card}`}>
              <div className={`my-5 rounded-2xl overflow-hidden border border-gray-200 shadow-md  ${styles.card}`}>
                <Image
                  src={servicio.image}
                  alt={servicio.alt}
                  
                  className={`w-full  object-cover ${styles.img}`}
                />
                <div className='p-4 '>
                  
                  <div className='flex items-center gap-2'>
                    
                    <p className='text-gray-600'>{servicio.servicio}</p>
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
