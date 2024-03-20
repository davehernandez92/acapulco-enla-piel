'use client'

import serviciosData from '@/json/servicios.json';
import { useParams } from 'next/navigation'
import Image from 'next/image';

import Link from 'next/link';
import { GoChevronRight } from "react-icons/go";
import { LuFacebook } from "react-icons/lu";
import { LuInstagram } from "react-icons/lu";
import { LuPhone } from "react-icons/lu";
import { LuMail } from "react-icons/lu";
import { LuGlobe } from "react-icons/lu";
import { LuYoutube } from "react-icons/lu";
import { LiaWhatsapp } from "react-icons/lia";
import styles from '../../styles/hotelPage.module.css'


export default function HotelPage() {
    const params = useParams()
    const { servicioId } = params
    const hotel = serviciosData.find(h => h.id === servicioId);
    if (!hotel) {
        return <div>Servicio no encontrado</div>;
    }

    return (
        <div className='containerP lg:mx-10'>
            <div className='flex flex-col gap-5 mt-14 md:my-10 animate'>
                <div className='flex flex-col gap-8'>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-[2.4rem] md:text-[3rem] lg:text-[5.5rem]'>{hotel.name}</h1>
                        <p className=' font-light  '> {hotel.servicio}</p>
                    </div>
                    <ul className='flex gap-1'>
                        <li className={`flex gap-2 items-center`}>
                            <Link href={'/'}>
                                Inicio
                            </Link>
                            <GoChevronRight />
                        </li>
                        <li className='flex gap-2 items-center'>
                            <Link href={'/servicios'}>
                                Servicios
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
                        <p className='lg:w-2/3 lg:text-[18px] lg:pt-16'>
                            {hotel.description}
                        </p>
                        <Image
                            src={hotel.portada[0].src}
                            width={600}
                            height={400}
                            alt={`Imagen de ${hotel.name}`}
                            className='rounded-lg md:hidden '
                            priority={true}

                        />
                        <Image
                            src={hotel.portada[0].src}
                            width={400}
                            height={500}
                            alt={`Imagen de ${hotel.name}`}
                            className='hidden md:block rounded-lg lg:w-[50%] '
                        />
                    </div>
                </div>
            </div>

            <h2 className='mt-10 mb-4 lg:mt-36 text-center text-[2.5rem] lg:text-[3.8rem]'> Galería </h2>
            <div className={` ${styles.gallery__grid}`}>
                
                {hotel.images.map((image, index) => (
                    <div key={index} className={styles.gallery__item}>
                        <Image
                            
                            src={image.src}
                            alt={`Image ${index + 1}`}
                            width={image.width}
                            height={image.height}
                        />
                    </div>
                ))}
            </div>

            <div className='my-8 flex flex-col lg:flex-row md:gap-4 lg:my-[7rem] lg:gap-10'>


                <div className=' flex flex-col gap-4 my-12 py-5 md:py-10 md:my-16 lg:mt-6 lg:py-0 lg:m-auto  '>


                    <h2 className='text-[1.8rem] lg:text-[2.8rem]'>¡Ponte en contacto!</h2>
                    <div className=' flex flex-col gap-3 lg:mt-6 lg:text-center '>
                        <p>¿Quieres saber más sobre {hotel.name}?</p>
                        <p>Te dejamos sus datos de contacto.</p>
                    </div>


                    <div className='mt-8'>
                        <ul className='flex flex-col gap-5'>
                            {hotel.whatsapp && (
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

                            )}
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
                            
                            {hotel.instagram && (
                                <li className=''>
                                    <Link
                                        title='Facebook'
                                        target='blank'
                                        href={`${hotel.instagram}`}
                                        className='flex gap-2 items-center text-[1.1rem] lg:text-[1.3rem] 
                                    lg:m-auto   
                                    w-fit
                                    transition-transform duration-300 transform hover:text-teal-800 focus:outline-none focus:ring focus:border-blue-300'
                                    >
                                        <LuInstagram />
                                        Instagram
                                    </Link>

                                </li>

                            )}


                        </ul>


                    </div>

                </div>

            </div>
            <div className='flex justify-center py-9'>
                <Link className=' text-[18px] py-2 border-b-2 transition-transform duration-300 transform hover:text-teal-800 font-[500] focus:outline-none focus:ring focus:border-b-0 ' href={'/servicios'}>
                    Ver mas servicios
                </Link>
            </div>



        </div>
    )
}
