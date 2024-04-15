'use client'

import bienesData from '@/json/inmobiliarios.json';
import { useParams } from 'next/navigation'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { MdOutlineMap, MdOutlineBathtub, MdOutlineBed, MdOutlineCropFree, MdOutlineWhatsapp, MdOutlinePhoneInTalk, MdOutlinePhone, MdOutlineFacebook } from "react-icons/md";
import { FaTiktok } from "react-icons/fa";


import styles from '@/app/styles/inmueble.module.css'

export default function InmueblePage() {

    const params = useParams()
    const { bienesId } = params
    const inmueble = bienesData.find(i => i.id === bienesId);
    if (!inmueble) {
        return <div>Inmueble no encontrado </div>;
    }
    return (
        <main className='containerP'>

            <div className='flex flex-col gap-2'>
                <h1 className="mt-5 md:text-[2.2rem] lg:text-[3rem] font-bold">{inmueble.name}</h1>
                <p className=""> {inmueble.precio}</p>
                <div className="flex  gap-3  my-4">
                    <div className="flex gap-2 md:gap-3 items-center ">
                        <MdOutlineMap className="size-5 md:size-7 " />
                        <p> {inmueble.zona}</p>
                    </div>
                    <div className="flex gap-2 md:gap-3 items-center">
                        <div className="flex gap-3 items-center">
                            <MdOutlineCropFree className=" size-5 md:size-7 " />
                            <p> {inmueble.details.area}</p>

                        </div>
                        <div className="flex gap-3 items-center">
                            <MdOutlineBed className=" size-5 md:size-7 " />
                            <p> {inmueble.details.habitaciones}</p>

                        </div>
                        <div className="flex gap-3 items-center">
                            <MdOutlineBathtub className=" size-5 md:size-7 " />
                            <p> {inmueble.details.banios}</p>

                        </div>
                    </div>
                </div>

                <div className={` ${styles.gallery__grid}`}>

                    {inmueble.images.map((image, index) => (
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

                <div className='flex flex-col gap-2 mt-5 md:max-w-[800px]'>
                    <h2 className=' font-bold text-[#1e293b]'> Detalles </h2>
                    {inmueble.description.map((text, index) => (
                        <p key={index} className=''>{text}</p>
                    ))}
                </div>

                <div className='flex flex-col gap-2 mt-5 md:flex-row md:'>
                    <div className='md:w-1/3'>
                        <h2 className=' font-bold text-[#1e293b]'> Amenidades: </h2>
                        <ul className='mt-3'>
                            {inmueble.details.amenidades.map((amenidad, index) => (
                                <li key={index} className=''>{amenidad}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='mt-5 md:mt-0 md:w-1/3'>
                        <h2 className=' font-bold text-[#1e293b]'> Informacion y citas: </h2>
                        <div className='mt-3 flex gap-8'>
                            
                            <Link href={'tel:7444095627'} className=' text-[2.2rem] hover:text-[#3d5b8a]'><MdOutlinePhone/></Link> 
                            <Link target='blank' href={'https://www.facebook.com/share/oVdKBkvhetpPmd18/?mibextid=WC7FNe'} className=' text-[2.2rem] hover:text-[#1877F2]'><MdOutlineFacebook/></Link>
                            <Link target='blank' href={'https://www.tiktok.com/@maralbr?_t=8kqGA2De3bp&_r=1'} className=' text-[2.2rem] hover:text-[#FF2D55] '><FaTiktok/></Link>

                        </div>
                    </div>
                </div>
            </div>

        </main>
    )
}
