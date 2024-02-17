'use client'

import hotelsData from '@/json/hoteles.json';
import { useParams } from 'next/navigation'
import Image from 'next/image';
import Link from 'next/link';
import { GoChevronRight } from "react-icons/go";
import styles from '../../styles/hotelPage.module.css'


export default function HotelPage() {
    const params = useParams()
    const {hotelId} = params
    const hotel = hotelsData.find(h => h.id === hotelId);
    if (!hotel) {
        return <div>Hotel not found</div>;
      }
    
    return (
        <div className='containerP'>
            <div className='flex flex-col gap-5 mt-20 md:mt-10 '>
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
                  <div className='flex flex-col-reverse gap-8'>
                    <p className='lg:w-2/3'>
                    {hotel.description}
                    </p>
                    <Image
                        src={hotel.images[0]}
                        width={600}
                        height={400}
                        alt={`Imagen del ${hotel.name}`}
                        className='rounded-lg md:hidden '
                    />
                    <Image
                        src={hotel.images[0]}
                        width={1200}
                        height={800}
                        alt={`Imagen del ${hotel.name}`}
                        className='hidden rounded-lg lg:w-[50%] '
                    />

                  </div>


                


                 </div>



            </div>
          
     
      <h2>Images:</h2>
      <ul>
        {hotel.images.map((image, index) => (
          <li key={index} className='my-5'>
            <Image 
            src={image} 
            alt={`Image ${index + 1}`} 
            width={600}
            height={400}
            className='rounded-md my-5 '

            />
          </li>
        ))}
      </ul>
    </div>
  )
}
