import React from 'react'
import Image from 'next/image'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import visita from '@/public/images/visita.webp'
import visitaSq from '@/public/images/visitaSq.webp'
import styles from '../styles/visita.module.css'

export default function page() {
  return (
    <main className=''>
      <div className=' animate flex flex-col-reverse gap-4'>
      <div className={`  containerX flex mt-[3rem] lg:mt-24  flex-col gap-5  ${styles.heroDiv}`}>
        <h1 className=' font-bold text-4xl lg:text-[3.5rem]'>Visita Acapulco</h1>
        <p className='md:w-[89%] lg:w-[70%]'>Sumérgete en una variedad de sabores, desde acogedores rincones de tacos hasta encantadores restaurantes, que capturan la auténtica esencia gastronómica de Acapulco. Descubre tu rincón perfecto para saborear en este destino mexicano, donde cada establecimiento ofrece una experiencia única.</p>
        
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

      <div className='containerP'>
        <Tabs defaultValue="museos" className=" w-full bg-transparent">
          <TabsList className='bg-transparent flex justify-around '>
            <TabsTrigger value="museos">Museos</TabsTrigger>
            <TabsTrigger value="plazas">Plazas</TabsTrigger>
            <TabsTrigger value="sitios">Sitios</TabsTrigger>
          </TabsList>
          <TabsContent className='animateLeft' value="museos">Make changes to your account here.</TabsContent>
          <TabsContent className='animateLeft' value="plazas">Change your password here.</TabsContent>
          <TabsContent className='animateLeft' value="sitios">Change your password here.</TabsContent>
        </Tabs>

      </div>
    </main>
  )
}
