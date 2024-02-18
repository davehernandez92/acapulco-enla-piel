'use client'

import hotelsData from '@/json/hoteles.json';
import { useParams } from 'next/navigation'
import Image from 'next/image';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Link from 'next/link';
import { GoChevronRight } from "react-icons/go";
import { LuFacebook } from "react-icons/lu";
import { LuInstagram } from "react-icons/lu";
import { LuPhone } from "react-icons/lu";
import { LuMail } from "react-icons/lu";
import { LuGlobe } from "react-icons/lu";
import { LuYoutube } from "react-icons/lu";
import { LiaWhatsapp } from "react-icons/lia";
import youtube from '@/public/images/youtubeBlack.png';







import styles from '../../styles/hotelPage.module.css'


export default function HotelPage() {
    const params = useParams()
    const { hotelId } = params
    const hotel = hotelsData.find(h => h.id === hotelId);
    if (!hotel) {
        return <div>Hotel not found</div>;
    }

    return (
        <div className='containerP lg:mx-10'>
            <div className='flex flex-col gap-5 mt-14 md:my-10 animate'>
                <div className='flex flex-col gap-8'>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-[2.4rem] md:text-[3rem] lg:text-[5.5rem]'>{hotel.name}</h1>
                        <p className=' font-light  '> Hotel</p>
                    </div>
                    <ul className='flex gap-1'>
                        <li className={`flex gap-2 items-center`}>
                            <Link href={'/'}>
                                Inicio
                            </Link>
                            <GoChevronRight />
                        </li>
                        <li className='flex gap-2 items-center'>
                            <Link href={'/hoteles'}>
                                Hoteles
                            </Link>
                            <GoChevronRight />
                        </li>
                        <li>
                            <p className="relative inline-block">
                                <span className="text-gray-800">{hotel.name}</span>
                                <span className="absolute inset-x-0 bottom-0 h-[0.1px] bg-slate-400"></span>
                            </p>

                        </li>


                    </ul>
                    <div className='flex flex-col-reverse gap-8 lg:flex-row lg:mt-9 '>
                        <p className='lg:w-2/3 lg:text-[18px] lg:pt-10'>
                            {hotel.description}
                        </p>
                        <Image
                            src={hotel.images[0]}
                            width={600}
                            height={400}
                            alt={`Imagen del ${hotel.name}`}
                            className='rounded-lg md:hidden '
                            priority={true}

                        />
                        <Image
                            src={hotel.images[0]}
                            width={1200}
                            height={800}
                            alt={`Imagen del ${hotel.name}`}
                            className='hidden md:block rounded-lg lg:w-[50%] '
                        />
                    </div>
                </div>
            </div>


            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full max-w-sm md:max-w-full py-5 md:py-10 my-12 md:my-16 lg:my-28  "
            >   <h2 className='text-[1.8rem] lg:text-[2.8rem]'> Galería </h2>
                <CarouselContent className='w-full'>
                    {hotel.images.map((image, index) => (
                        <CarouselItem key={index} className={` basis-[320px] md:basis-1/2 lg:basis-[500px] ${styles.carouselItem}`}>
                            <div className="p-1">


                                <Image
                                    src={image}
                                    alt={`Image ${index + 1}`}
                                    width={600}
                                    height={400}
                                    className='rounded-md my-5 '
                                />



                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className='hidden md:block' />
                <CarouselNext className='hidden md:block' />
            </Carousel>

            <div className='my-8 flex flex-col lg:flex-row md:gap-4 lg:my-[7rem] lg:gap-10'>

                <div className='mt-6'>
                    <h2 className='  text-[1.8rem] md:text-center lg:text-[2.8rem]'>¡Checa nuestro review en youtube!</h2>
                    <Link title='Video de youtube' target='blank' href={hotel.youtube}>
                        <div className='relative group md:w-[600px] m-auto lg:w-[800px] '>
                            <Image
                                src={youtube}
                                alt='Enlace a youtube'
                                width={1000}
                                height={500}
                                className='mt-8 md:w-[600px] m-auto lg:w-[800px] transition-transform duration-300 transform hover:scale-105 hover:filter-grayscale'
                            />
                            <div className='absolute inset-0 bg-gray-300 opacity-0 group-hover:opacity-25'></div>
                        </div>
                    </Link>
                </div>
                <div className=' flex flex-col gap-4 my-12 py-5 md:py-10 md:my-16 lg:mt-6 lg:py-0 lg:m-auto  '>


                    <h2 className='text-[1.8rem] lg:text-[2.8rem]'>¡Ponte en contacto!</h2>
                    <div className=' flex flex-col gap-3 lg:mt-6 lg:text-center '>
                        <p>¿Quieres saber más sobre este hotel?</p>
                        <p>Te dejamos sus datos de contacto.</p>
                    </div>


                    <div className='mt-8'>
                        <ul className='flex flex-col gap-5'>
                            <li >
                                <Link
                                    title='Telefono'
                                    target='blank'
                                    href={`tel:${hotel.phoneNumber}`}
                                    className='flex gap-2 items-center text-[1.1rem] lg:text-[1.3rem] 
                                    lg:m-auto 
                                    w-fit
                                    transition-transform duration-300 transform hover:text-teal-800 focus:outline-none focus:ring focus:border-blue-300'
                                >
                                    <LuPhone />
                                    {hotel.phoneNumber}
                                </Link>

                            </li>
                            {hotel.whatsapp && (
                                <li className=''>
                                    <Link
                                        title='Enviar mensaje por Whatsapp'
                                        target='blank'
                                        href={`https://wa.me/+52${hotel.whatsapp}`}
                                        className='flex gap-2 items-center text-[1.1rem] lg:text-[1.3rem] 
                                    lg:m-auto   
                                    w-fit
                                    transition-transform duration-300 transform hover:text-teal-800 focus:outline-none focus:ring focus:border-blue-300'
                                    >
                                        <LiaWhatsapp />
                                        {hotel.whatsapp}
                                    </Link>

                                </li>

                            )}
                            {hotel.email && (
                                <li className=''>
                                    <Link
                                        title='Email'
                                        target='blank'
                                        href={`mailto:${hotel.email}`}
                                        className='flex gap-2 items-center text-[1.1rem] lg:text-[1.3rem] 
                                    lg:m-auto   
                                    w-fit
                                    transition-transform duration-300 transform hover:text-teal-800 focus:outline-none focus:ring focus:border-blue-300'
                                    >
                                        <LuMail />
                                        {hotel.email}
                                    </Link>

                                </li>

                            )}
                            {hotel.website && (
                                <li className=''>
                                    <Link
                                        title='Website'
                                        target='blank'
                                        href={`mailto:${hotel.email}`}
                                        className='flex gap-2 items-center text-[1.1rem] lg:text-[1.3rem] 
                                    lg:m-auto   
                                    w-fit
                                    transition-transform duration-300 transform hover:text-teal-800 focus:outline-none focus:ring focus:border-blue-300'
                                    >
                                        <LuGlobe />
                                        Website
                                    </Link>

                                </li>

                            )}

                            {hotel.facebook && (
                                <li className=''>
                                    <Link
                                        title='Facebook'
                                        target='blank'
                                        href={`${hotel.facebook}`}
                                        className='flex gap-2 items-center text-[1.1rem] lg:text-[1.3rem] 
                                    lg:m-auto   
                                    w-fit
                                    transition-transform duration-300 transform hover:text-teal-800 focus:outline-none focus:ring focus:border-blue-300'
                                    >
                                        <LuFacebook />
                                        Facebook
                                    </Link>

                                </li>

                            )}


                        </ul>


                    </div>

                </div>

            </div>



        </div>
    )
}
