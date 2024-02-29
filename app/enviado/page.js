import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button";
import { FaRegCheckCircle } from "react-icons/fa";


export default function EnviadoPage() {
    return (
        <div className='animate containerP mt-10 flex flex-col gap-4 text-center items-center justify-center h-[500px] lg:h-[65vh]'>
            <div className=' space-y-4 '>
                <h1>Tu mensaje se ha enviado exitosamente! </h1>
                <p>Espera un correo nuestro en las proximas 24 a 48 hrs con los siguientes pasos</p>
            </div>
            <FaRegCheckCircle className=' text-green-600 text-[3rem] '/>
            <Link href={'/'} className='mt-5 md:mt-10'>
                <Button variant="outline">
                    Regresar a Inicio
                </Button>
                
            </Link>
        </div>
    )
}
