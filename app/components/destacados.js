import * as React from "react"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import langosta from '@/public/images/restaurantes/langosta/1.webp'
import sotelo from '@/public/images/restaurantes/sotelo/1.webp'
import nautilus from '@/public/images/hoteles/nautilus/1.webp'
import olimar from '@/public/images/hoteles/olimar/1.webp'

import { MdOutlineRestaurant, MdOutlineHotel  } from "react-icons/md";
import styles from './styles/destacados.module.css'

export function DestacadosCarousel() {
    const destacados = [
        { 
            title: 'Tacos Sotelo',
            image: sotelo,
            alt: 'Imagen de Tacos Sotelo',
            type: 'Restaurante',
            url: '/restaurantes/sotelo'

        },
        { 
            title: 'La Langosta',
            image: langosta,
            alt: 'Imagen del Restaurante La Langosta',
            type: 'Restaurante',
            url: '/restaurantes/langosta'

        },
        { 
            title: 'Villas Nautilus',
            image: nautilus,
            alt: 'Imagen de Villas Nautilus',
            type: 'Hotel',
            url: '/hoteles/nautilus'

        },
        { 
            title: 'Hotel Olimar',
            image: olimar,
            alt: 'Imagen del Hotel Olimar',
            type: 'Hotel',
            url: '/hoteles/olimar'

        },
    ]
  return (
    
   
    
    <div className="py-[3rem] md:px-[4rem] md:py-[4rem]  lg:px-[7rem] lg:w-full ">

    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-sm md:max-w-full"
    >
      <CarouselContent className='w-full'>
      {destacados.map((destacato, index) => (
            <CarouselItem key={index} className={` basis-[350px] md:basis-1/2 lg:basis-[500px] ${styles.carouselItem}`}>
              <div className="p-1">
                <Link href={destacato.url}>
                  
                    <Image
                      className={styles.img}
                      src={destacato.image}
                      width={500}
                      height={700}
                      alt={destacato.alt}
                      priority={true}
                    />
                    <div className="flex items-center gap-3 px-4 mt-4">
                      <p className="text-lg font-bold">{destacato.title}</p>
                      {destacato.type === 'Restaurante' ? (
                        <MdOutlineRestaurant className="text-sm" />
                      ) : destacato.type === 'Hotel' ? (
                        <MdOutlineHotel className="text-sm" />
                      ) : null}
                    </div>
                  
                </Link>
              </div>
            </CarouselItem>
          ))}
      </CarouselContent>
      {/* <CarouselPrevious />
      <CarouselNext /> */}
    </Carousel>
    </div>
    
  )
}
