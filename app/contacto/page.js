"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import emailjs from '@emailjs/browser';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import Image from 'next/image'
import { Toaster, toast } from "sonner";
import contacto from '@/public/images/contact.webp'
import styles from '../styles/contacto.module.css'

export default function ContactoPage() {

  const publicKey = process.env.EMAIL_KEY
  const form = useRef();


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(""); // New state for phone number
  const [projectDetails, setProjectDetails] = useState("");




  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleProjectDetailsChange = (e) => {
    setProjectDetails(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Use the Email.js sendForm method to send the email
    emailjs.sendForm('service_7b68kpl', 'template_x2tm7a5', form.current, publicKey)
      .then((result) => {
        console.log('Email sent successfully:', result.text);

        // Display success message in the toast


        // Reset form fields
        setName("");
        setEmail("");
        setPhoneNumber("");
        setProjectDetails("");
        window.location.href = '/enviado';

      })
      .catch((error) => {
        console.error('Error sending email:', error.text);



      });
  };
  return (

    <>

      <div className="mt-20 containerX flex flex-col lg:gap-4 lg:flex-row md:w-full md:justify-center">
        <div className="flex flex-col gap-3 md:text-center ">
          <h1 className=" md:text-[2.7rem]">Quieres ver aqui a tu negocio?</h1>
          <h2>Hay algunas cosas que necesitamos decirte</h2>

          <div className="flex flex-col gap-3 mt-10 md:mb-20">
            <AlertDialog  >
              <AlertDialogTrigger>Ver terminos y condiciones</AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Conoce nuestros terminos y condiciones</AlertDialogTitle>
                  <AlertDialogDescription>

                    ¡Hola! Agradecemos tu interés en promocionar tu negocio o servicio en Acapulco en la Piel. Antes de continuar, te pedimos que revises nuestros términos y condiciones para garantizar una experiencia transparente y satisfactoria. En ellos encontrarás información importante sobre el uso de nuestra plataforma, el modelo de negocio, responsabilidades del usuario, métodos de pago, privacidad de datos y cómo contactarnos en caso de dudas o aclaraciones. Tu conformidad con estos términos es esencial para utilizar nuestros servicios. ¡Gracias por confiar en nosotros para promover tu negocio en Acapulco!
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cerrar</AlertDialogCancel>
                  <AlertDialogAction><Link target="blank" href="/terminos">Revisa nuestros terminos y condiciones</Link></AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            <AlertDialog  >
              <AlertDialogTrigger>Aviso de privacidad</AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Conoce nuestro aviso de privacidad</AlertDialogTitle>
                  <AlertDialogDescription>
                    En Acapulco en la Piel, valoramos tu privacidad. Todos los datos que nos proporciones serán utilizados exclusivamente para contactarte y publicitar tu negocio o servicio en nuestra página web. Para conocer más sobre cómo protegemos tus datos y tus derechos, consulta nuestro aviso de privacidad completo aquí
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cerrar</AlertDialogCancel>
                  <AlertDialogAction ><Link href="/privacidad">Revisa el aviso de privacidad</Link></AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

          </div>
        </div>
        <div></div>
      </div>
      <div className='containerP flex flex-col lg:gap-4 lg:flex-row md:w-full'>



        <Image
          src={contacto}
          width={1200}
          height={900}
          alt='Imagen de Playa Calta en Acapulco Guerrero'
          className='flex-0 lg:w-1/2 h-auto rounded-md '
        />
        <div className="pt-5 md:pt-10  lg:p-0 w-full ">

          <form
            ref={form}
            onSubmit={handleSubmit}

            className={`  ${styles.form}`}
          >
            <h1> Contáctanos </h1>
            <div className={styles.formgroup}>
              <div className="flex flex-col w-full max-w-sm  gap-4 lg:max-w-[40rem]">
                <Label htmlFor="name">Nombre</Label>
                <Input
                  type="text"
                  id="name"
                  name="customer"
                  placeholder="Ingrese su nombre"
                  value={name}
                  onChange={handleNameChange}
                  required
                  className={styles.input}
                />

                <Label htmlFor="email">Email</Label>

                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Ingrese su correo electrónico"
                  value={email}
                  onChange={handleEmailChange}
                  required
                  className={styles.input}
                />

                {/* New form group for phone number */}

                <Label htmlFor="phoneNumber">Telefono</Label>
                <Input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Ingrese su número de teléfono"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  required
                  className={styles.input}
                />

                <Label htmlFor="project-details">Cuentame sobre ti</Label>
                <Textarea
                  id="project-details"
                  name="project-details"
                  placeholder="Escriba detalles sobre sus servicios o negocio"
                  value={projectDetails}
                  onChange={handleProjectDetailsChange}
                  required
                  className={styles.textarea}
                />
              </div>
              <Toaster richColors position="bottom-center" />
              <Button onClick={() => toast.success('Tu mensaje se ha enviado!')} type="submit" className=" bg-slate-900 hover:bg-sky-900 mt-6 w-full md:w-[30%] md:mt-8">
                Enviar mensaje
              </Button>
            </div>
          </form>
        </div>


      </div>

    </>

  )
}
