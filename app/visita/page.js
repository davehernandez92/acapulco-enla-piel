import React from 'react'
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import visita from '@/public/images/visita.webp'
import visitaSq from '@/public/images/visitaSq.webp'
import sanDiego from '@/public/images/visita/fuerte.webp'
import museoNaval from '@/public/images/visita/naval.webp'
import museoMascara from '@/public/images/visita/mascara.webp'
import galerias from '@/public/images/visita/galerias.webp'
import galeriasAca from '@/public/images/visita/galeriasAca.webp'
import isla from '@/public/images/visita/isla.webp'
import palmas from '@/public/images/visita/palmas.webp'
import sinfo from '@/public/images/visita/sinfo.webp'
import quebrada from '@/public/images/visita/quebrada.webp'
import papagayo from '@/public/images/visita/papagayo.webp'
import jardin from '@/public/images/visita/jardin.webp'
import styles from '../styles/visita.module.css'

export default function page() {
  const museos = [
    {
      title: 'Fuerte de San Diego',
      image: sanDiego,
      alt: 'Imagen del Fuerte de San Diego ',
      text: 'Una de las fortalezas antiguas mejor restauradas y conservadas de México, el museo exhibe parte de la historia del puerto de Acapulco.',
    },
    {
      title: 'Museo Historico Naval',
      image: museoNaval,
      alt: 'Imagen del Museo Historico Naval ',
      text: 'El lugar perfecto para aprender un poco más, sobre historia Naval de México y Acapulco. Cuenta con muchas réplicas de navíos en escala y sus distintas variedades de equipamientos.'
    },
    {
      title: 'Museo de la Máscara',
      image: museoMascara,
      alt: 'Imagen del Museo de la Máscara ',
      text: 'El lugar ideal para apreciar muchas de las máscaras que son originarias del Estado de Guerrero, así como de otras partes de México. Las máscaras son una elaboración 100% mexicana, desde tiempos anteriores a la revolución.'
    },
  ]
  const plazas = [
    {
      title: 'Centro comercial La Isla',
      image: isla,
      alt: 'Imagen del Centro comercial La Isla ',
      text: 'Ubicado también en la zona Diamante de Acapulco, pero muy cerca del Aeropuerto, este centro comercial es el más grande de Acapulco. cuenta con cine, extensas áreas de paseo, tiendas de marca, restaurantes y bares que te harán disfrutar desde el amanecer, hasta el anochecer.'
    },
    {
      title: 'Galerías Diana',
      image: galerias,
      alt: 'Imagen de Galerías Diana ',
      text: 'Cerca de la glorieta de La Diana, sobre la Av Costera Miguel Alemán, se encuentra este centro comercial, con muchas tiendas de marcas internacionales, cines y área de comida, con restaurantes exclusivos. '
    },
    {
      title: 'Galerías Acapulco',
      image: galeriasAca,
      alt: 'Imagen del Galerías Acapulco ',
      text: 'Antes conocido como "La Gran Plaza", es uno de los centros comerciales más grandes de Acapulco y en su interior, puedes encontrar distintos locales de interés, cines, área de comida, el centro recreativo "Recórcholis" y muchas cosas más.'
    },
    {
      title: 'Multiplaza Las Palmas',
      image: palmas,
      alt: 'Imagen del Multiplaza Las Palmas ',
      text: 'Ubicada en la zona Diamante de Acapulco, cuenta con muchos locales de interés, así como cines , food court y tiendas de autoservicio.'
    },
  ]
  const sitios = [
    {
      title: 'Parque Papagayo',
      image: papagayo,
      alt: 'Imagen del Parque Papagayo',
      text: 'Actualmente remodelado, es el parque más importante del Estado de Guerrero. Cuenta con áreas de comida, juegos para niños y muchas áreas verdes.'
    },
    {
      title: 'Sinfonía del Mar',
      image: sinfo,
      alt: 'Imagen de Sinfonía del Mar',
      text: 'Una ventana natural hacia el imponente e inmenso Océano Pacífico, el lugar perfecto para presenciar unos atardeceres increíbles.'
    },
    {
      title: 'La Quebrada',
      image: quebrada,
      alt: 'Imagen de La Quebrada',
      text: 'El lugar tradicional por excelencia del puerto de Acapulco. Diariamente, los clavadistas de La Quebrada realizan actos increíbles que, en algunos momentos, ponen en peligro la vida de quienes los llevan a cabo. No importa si es un día soleado, hay mar de fondo o llueve, ellos siempre dan un espectáculo arriesgado, pero muy bien reconocido a nivel mundial.'
    },
    {
      title: 'Jardín Botánico de Acapulco',
      image: jardin,
      alt: 'Imagen de La Quebrada',
      text: 'En lo alto del cerro de Cumbres de Llano Largo, detrás de la reconocida Universidad Loyola, se encuentra el Jardín Botánico de Acapulco. Cientos de variedades y especies de plantas pueden admirarse aquí, así como unas carpas Koi en sus estanques, y pláticas de interés respecto a temas de biología y naturaleza en su auditorio.'
    },
    
  ]
  return (
    <main className=''>
      <div className=' animate flex flex-col-reverse gap-4 '>
        <div className={` containerX flex mt-[3rem] flex-col gap-5  pb-10 md:pb-[10%] md:pt-20  lg:mt-28 lg:gap-9 ${styles.heroDiv}`}>
          <h1 className=' font-bold text-4xl lg:text-[3.8rem]'>Visita Acapulco</h1>
          <p className='md:w-[89%] lg:w-[70%]'>Explora Acapulco más allá de sus playas y restaurantes. Sumérgete en nuestra riqueza cultural e historia y descubre una ciudad que va más allá de sus icónicas playas, donde museos fascinantes, plazas vibrantes y sitios emblemáticos esperan ser explorados. </p>
          <p className='md:w-[89%] lg:w-[70%]'>Suma a tu experiencia turística la visita a estos puntos de interés que revelan la auténtica esencia de Acapulco. ¡Embárcate en un viaje más allá de las costas y descubre la fascinante historia que Acapulco tiene para ofrecer! </p>

        </div>
        <Image
          src={visitaSq}
          alt='Imagen de Acapulco'
          width={624}
          height={1000}
          className='section w-full h-auto md:hidden'
          priority={true}
        />
        <Image
          src={visita}
          alt='Imagen de Acapulco'
          width={1200}
          height={650}
          className='hidden md:block md:pt-5 md:rounded-md   lg:max-h-[720px] w-full pt-10'
        />
      </div>

      <div className='containerP '>
        <Tabs defaultValue="museos" className=" w-full bg-transparent">
          <TabsList className='bg-transparent flex justify-between md:justify-start md:gap-3 lg:w-[50%] '>
            <TabsTrigger value="museos" className='text-[1.1rem] md:text-xl lg:text-2xl'>Museos</TabsTrigger>
            <TabsTrigger value="plazas" className='text-[1.1rem] md:text-xl lg:text-2xl'>Plazas</TabsTrigger>
            <TabsTrigger value="sitios" className='text-[1.1rem] md:text-xl lg:text-2xl'>Sitios</TabsTrigger>
          </TabsList>
          <TabsContent className='animateLeft' value="museos">
            <div>
              <h2 className='mt-10 text-[2.1rem]  md:text-[2.4rem] lg:text-[2.8rem]'>¡Explora nuestros museos!</h2>
              {museos.map((museo => (
                <div key={museo.title} className={`${styles.card} mt-10 mb-16 lg:my-16`}>
                  <div className={`flex flex-col gap-6 lg:flex-row `}>
                    <div className='lg:flex-2 lg:pt-16 lg:pr-16'>
                      <h3 className=' mb-2 text-[1.4rem] lg:text-[2.1rem]'> {museo.title}</h3>
                      <p>{museo.text}</p>
                    </div>
                    <Image
                      src={museo.image}
                      alt={museo.alt}
                      width={1000}
                      height={700}
                      className={`w-full  object-cover lg:flex0 lg:w-[50%] ${styles.img}`}
                    />




                  </div>
                </div>
              )))}
            </div>
          </TabsContent>
          <TabsContent className='animateLeft' value="plazas">
            <div>
            <h2 className='mt-10 text-[2.1rem]  md:text-[2.4rem] lg:text-[2.8rem]'>¡Explora nuestras Plazas!</h2>
              {plazas.map((plaza => (
                <div key={plaza.title} className={`${styles.card} mt-10 mb-16 lg:my-16`}>
                  <div className={`flex flex-col gap-6 lg:flex-row `}>
                    <div className='lg:flex-2 lg:pt-16 lg:pr-16'>
                      <h3 className=' mb-2 text-[1.4rem] lg:text-[2.1rem]'> {plaza.title}</h3>
                      <p>{plaza.text}</p>
                    </div>
                    <Image
                      src={plaza.image}
                      alt={plaza.alt}
                      width={1000}
                      height={700}
                      className={`w-full  object-cover lg:flex0 lg:w-[50%] ${styles.img}`}
                    />




                  </div>
                </div>
              )))}
            </div>
          </TabsContent>
          <TabsContent className='animateLeft' value="sitios">
          <div>
              <h2 className='mt-10 text-[2.1rem] md:text-[2.4rem]'>¡Conoce estos sitios!</h2>
              {sitios.map((sitio => (
                <div key={sitio.title} className={`${styles.card}mt-10 mb-16 lg:my-16`}>
                  <div className={`flex flex-col gap-6 lg:flex-row `}>
                    <div className='lg:flex-2 lg:pt-16 lg:pr-16'>
                      <h3 className=' mb-2 text-[1.4rem] lg:text-[2.1rem]'> {sitio.title}</h3>
                      <p>{sitio.text}</p>
                    </div>
                    <Image
                      src={sitio.image}
                      alt={sitio.alt}
                      width={1000}
                      height={700}
                      className={`w-full  object-cover lg:flex0 lg:w-[50%] ${styles.img}`}
                    />




                  </div>
                </div>
              )))}
            </div>
          </TabsContent>
        </Tabs>

      </div>
    </main>
  )
}
