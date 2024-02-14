import React from 'react'
import Image from 'next/image'
import merca from '@/public/images/mercancia/merca.webp'
import mercaMobil from '@/public/images/mercancia/mercaMobil.webp'

export default function page() {
  return (
    <div>
      <Image 
        src={mercaMobil}
        alt='Imagen de Mercancia proximamente'
        width={540}
        height={960}
        className={` w-full h-auto bg-cover px-3 py-6 md:hidden`}
      />
      <Image 
        src={merca}
        alt='Imagen de Mercancia proximamente'
        width={1248}
        height={702}
        className={`hidden md:block w-full h-auto px-3 py-6 `}
      />
    </div>
  )
}
