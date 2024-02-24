import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { buttonVariants } from "@/components/ui/button"
import restaurantes from '@/public/images/restaurantes.webp'
import hoteleSq from '@/public/images/hotelSquare.webp'
import mercancia from '@/public/images/mercancia.webp'
import visita from '@/public/images/visitar.webp'
import servicios from '@/public/images/servicios.webp'
import youtube from '@/public/images/youtube.webp'
import youtubeSq from '@/public/images/youtube2.webp'
import otis from '@/public/images/otis.webp'
import styles from './styles/bentoSection.module.css'


export default function BentoSection() {
    return (
        <div className=' mt-5 text- containerP'>
            <h1 className=' font-medium mb-5 md:font-[600] text-[2rem] lg:text-[3rem]'> Explora nuestas opciones</h1>
            {/* First row  */}
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-3 lg:h-[380px] ${styles.wrapper}`}>
                <div className={`relative rounded-2xl  ${styles.card__horizontal}`}>
                    <Image
                        src={restaurantes}
                        width={1600}
                        height={700}
                        alt='Imagen de Restaurantes en Acapulco'
                        className={`w-full min-h-[200px] object-cover rounded-2xl md:min-h-auto ${styles.img__horizontal}`}
                    />
                    <div className={`absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 rounded-2xl ${styles.card__overlay}`}>
                        <div className={`w-full h-full  p-3 ${styles.card__txt}`}>
                            <h2>Restaurantes</h2>
                            <p>¿Buscas gastronomía?</p>
                            <p>El verdadero sabor de Acapulco</p>
                            <Link href={'/restaurantes'} className={buttonVariants({ variant: "outline" })}>Ver más</Link>
                        </div>
                    </div>
                </div>
                <div className={`relative rounded-2xl  ${styles.card__Sq}`}>
                    <Image
                        src={hoteleSq}
                        width={700}
                        height={700}
                        alt='Imagen de hotel en Acapulco'
                        className={`w-full h-full object-cover rounded-2xl ${styles.img__sq}`}
                    />
                    <div className={`absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 rounded-2xl ${styles.card__overlay}`}>
                        <div className={`w-full h-full p-3 ${styles.card__txt}`}>
                            <h2>Hoteles</h2>
                            <p>¿Buscas hospedaje?</p>
                            <p>Ve nuestras sugerencias</p>
                            <Link href={'/hoteles'} className={buttonVariants({ variant: "outline" })}>Ver más</Link>
                        </div>
                    </div>
                </div>
            </div>


            {/* Second row  */}
            <div className={`grid grid-cols-1 mt-3 md:grid-cols-2 gap-3 lg:h-[760px] ${styles.grid__wrapper}`}>
                <div className={`relative rounded-2xl min-h-[200px] md:min-h-auto  ${styles.card__Sq} ${styles.grid__merca}`}>
                    <Image
                        src={mercancia}
                        width={700}
                        height={700}
                        alt='Imagen de Restaurantes en Acapulco'
                        className={`w-full min-h-[200px] object-contain rounded-2xl md:min-h-auto ${styles.img__sq}`}
                    />
                    <div className={`absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 rounded-2xl ${styles.card__overlay}`}>
                        <div className={`w-full h-full p-3 ${styles.card__txt} ${styles.merca__txt}`}>
                            <h2>Nuestra merca</h2>
                            <p>Porque sabemos que quieres llevar a Acapulco en la piel</p>
                            <Link href={'/mercancia'} className={buttonVariants({ variant: "outline" })}>Ver más</Link>
                        </div>
                    </div>
                </div>

                <div className={`relative  md:min-h-auto rounded-2xl ${styles.grid__visita}`}>
                    <Image
                        src={visita}
                        width={1600}
                        height={700}
                        alt='Imagen de hotel en Acapulco'
                        className={`w-full h-full object-cover rounded-2xl ${styles.img__horizontal}`}
                    />
                    <div className={`absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 rounded-2xl ${styles.card__overlay}`}>
                        <div className={`w-full h-full p-3 ${styles.card__txt}`}>
                            <h2>Visita</h2>
                            <p>¡Checa estos lugares!</p>
                            <p>¡No te los pierdas!</p>
                            <Link href={'/visita'} className={buttonVariants({ variant: "outline" })}>Ver más</Link>
                        </div>
                    </div>
                </div>

                <div className={`relative rounded-2xl  ${styles.card__horizontal} ${styles.servicios}`}>
                    <Image
                        src={servicios}
                        width={1600}
                        height={700}
                        alt='Imagen de Acapulco'
                        className={`w-full min-h-[200px] object-cover rounded-2xl md:min-h-auto ${styles.img__horizontal}`}
                    />
                    <div className={`absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 rounded-2xl ${styles.card__overlay}`}>
                        <div className={`w-full h-full  p-3 ${styles.card__txt}`}>
                            <h2>Servicios</h2>
                            
                            <p>¿Necesitas doctor, mecanico o algun servicio?</p>
                            
                            <Link href={'/servicios'} className={buttonVariants({ variant: "outline" })}>Ver sugerencias</Link>
                        </div>
                    </div>
                </div>
            </div>

                {/* Third row  */ }
                <div className={`grid grid-cols-1 md:grid-cols-3 gap-3 mt-3 lg:h-[380px] ${styles.wrapper}`}>
                <div className={`relative rounded-2xl  ${styles.card__horizontal}`}>
                    <Image
                        src={youtube}
                        width={1600}
                        height={700}
                        alt='Imagen de Acapulco'
                        className={`hidden md:block w-full min-h-[200px] object-cover rounded-2xl md:min-h-auto ${styles.img__horizontal}`}
                    />
                    <Image
                        src={youtubeSq}
                        width={700}
                        height={400}
                        alt='Imagen de Acapulco'
                        className={`w-full min-h-[200px] object-cover rounded-2xl md:min-h-auto md:hidden ${styles.img__horizontal}`}
                    />
                    <div className={`absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 rounded-2xl ${styles.card__overlay}`}>
                        <div className={`w-full h-full  p-3 ${styles.card__txt}`}>
                            <h2>Visita nuestro canal</h2>
                            
                            <p>Adentrate a nuestro canal y conoce Acapulco desde adentro!</p>
                            <Link target='blank' href={'https://www.youtube.com/@acapulcoenlapiel'} className={buttonVariants({ variant: "outline" })}>Ver canal</Link>
                        </div>
                    </div>
                </div>
                <div className={`relative rounded-2xl  ${styles.card__Sq}`}>
                    <Image
                        src={otis}
                        width={700}
                        height={700}
                        alt='Imagen de mercado en Acapulco'
                        className={`w-full h-full object-cover rounded-2xl ${styles.img__sq}`}
                    />
                    <div className={`absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 rounded-2xl ${styles.card__overlay}`}>
                        <div className={`w-full h-full p-3 ${styles.card__txt}`}>
                            <h2>OTIS</h2>
                            <p>Nuestra experiencia a través de nuestra cámara.</p>
                            <Link href={'/otis'} className={buttonVariants({ variant: "outline" })}>Ver más</Link>
                        </div>
                    </div>
                </div>
            </div>
            
                   
        </div>



    )
}
