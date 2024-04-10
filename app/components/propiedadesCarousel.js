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
import marina from '@/public/images/restaurantes/langosta/1.webp'
import sams from '@/public/images/bienes/sams/1.webp'
import tulipanes from '@/public/images/bienes/tulipanes/1.webp'

import { MdOutlineMap, MdOutlineBathtub, MdOutlineBed, MdOutlineCropFree } from "react-icons/md";
import styles from './styles/destacados.module.css'

export function PropiedadesCarousel() {
    const destacados = [
        {
            propiedad: 'Departamentos cerca de Sams Club',
            image: sams,
            alt: 'Imagen de Departamento en Acapulco',
            tipo: 'Venta',
            precio: '1,950,000.00',
            zona: 'Diana',
            habitaciones: '3',
            banios: '2',
            metros: '115 m2',
            url: '/bienes/1'

        },
        {
            propiedad: 'Casa en fracc. Tulipanes ',
            image: tulipanes,
            alt: 'Imagen de Departamento en Acapulco',
            tipo: 'Venta',
            precio: '920,000.00',
            zona: 'Fracc. Tulipanes',
            habitaciones: '3',
            banios: '1 ',
            metros: '74 m2',
            url: '/bienes/2'

        },

    ]
    return (



        <div className="py-[3rem] md:px-[4rem] md:py-[4rem]  lg:px-[7rem] lg:w-full ">

            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full max-w-sm md:max-w-full "
            >
                <CarouselContent className='w-full h-auto'>
                    {destacados.map((destacado, index) => (
                        <CarouselItem key={index} className={` basis-[250px] md:basis-1/2 lg:basis-[400px] ${styles.carouselItem}`}>
                            <div className="p-1">
                                <Link href={destacado.url}>

                                    <Image
                                        className={styles.img}
                                        src={destacado.image}
                                        width={500}
                                        height={700}
                                        alt={destacado.alt}
                                        priority={true}
                                    />
                                    <div className="flex flex-col gap-3 px-3 mt-4">
                                        <p className="md:text-lg font-bold">{destacado.propiedad}</p>
                                        <p className="">$ {destacado.precio}</p>
                                        <div className="flex gap-2 md:gap-3 items-center ">
                                            <MdOutlineMap className="size-5 md:size-7 " />
                                            <p> {destacado.zona}</p>
                                        </div>
                                        <div className="flex gap-2 md:gap-3 items-center">
                                            <div className="flex gap-3 items-center">
                                                <MdOutlineCropFree className=" size-5 md:size-7 " />
                                                <p> {destacado.metros}</p>

                                            </div>
                                            <div className="flex gap-3 items-center">
                                                <MdOutlineBed className=" size-5 md:size-7 " />
                                                <p> {destacado.habitaciones}</p>

                                            </div>
                                            <div className="flex gap-3 items-center">
                                                <MdOutlineBathtub className=" size-5 md:size-7 " />
                                                <p> {destacado.banios}</p>

                                            </div>
                                        </div>
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
