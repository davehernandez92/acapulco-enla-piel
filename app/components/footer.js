'use client'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import { motion } from 'framer-motion';
import { LiaInstagram, LiaFacebookF, LiaYoutube } from "react-icons/lia";
import logo from '@/public/images/acapulcoW.png'

import styles from './styles/footer.module.css'

export default function Footer() {
  return (
    <motion.footer initial={{ opacity: 0, y: -10 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { delay: 0.33, duration: 0.3 },
      }} viewport={{ once: true }}
      className={`containerP flex flex-col gap-4 mt-8 py-16 px-5 w-full md:px10 ${styles.footer}`}>
      <div className={` ${styles.colab}`}>
        <h2>¿Quieres ver aquí tu negocio?</h2>
        <motion.div className={styles.contacto__btn} whileTap={{ border: 'indigo' }}>
          <Link href={'/contacto'}>¡Contactanos!</Link>

        </motion.div>
      </div>

      <span className={`md:hidden ${styles.divider}`} />

      <div className='flex flex-col gap-4 md:flex-row md:items-center md:gap-24 lg:justify-around'>
        <div className={`flex flex-col gap-2 ${styles.redes__div}`}>
          <h2>Siguenos en redes</h2>
          <ul className={`flex flex-col gap-2`}>
            <motion.li whileTap={{ borderBottom: '2px solid #fefefe' }}><Link className='flex gap-2 items-center' target='blank' href={'/'}> Facebook <LiaFacebookF className={styles.icon} /></Link></motion.li>
            <motion.li whileTap={{ borderBottom: '2px solid #fefefe' }}><Link className='flex gap-2 items-center' target='blank' href={'/'}>  Instagram <LiaInstagram className={styles.icon} /> </Link></motion.li>
            <motion.li whileTap={{ borderBottom: '2px solid #fefefe' }}><Link className='flex gap-2 items-center' target='blank' href={'/'}>  Youtube <LiaYoutube className={styles.icon} /> </Link></motion.li>
          </ul>
        </div>

        <span className={`md:hidden ${styles.divider}`} />

        <div className={` ${styles.menu__footer}`}>
          <ul>
            <motion.li whileTap={{ borderBottom: '2px solid #fefefe' }} ><Link href={'/'}>Inicio</Link></motion.li>
            <motion.li whileTap={{ borderBottom: '2px solid #fefefe' }}><Link href={'/hoteles'}>Hoteles</Link></motion.li>
            <motion.li whileTap={{ borderBottom: '2px solid #fefefe' }}><Link href={'/restaurantes'}>Restaurantes</Link></motion.li>
            <motion.li whileTap={{ borderBottom: '2px solid #fefefe' }}><Link href={'/servicios'}>Servicios</Link></motion.li>
            <motion.li whileTap={{ borderBottom: '2px solid #fefefe' }}><Link href={'/visita'}>Visita</Link></motion.li>
            <motion.li whileTap={{ borderBottom: '2px solid #fefefe' }}><Link href={'/mercancia'}>Mercancia</Link></motion.li>
            <motion.li whileTap={{ borderBottom: '2px solid #fefefe' }}><Link href={'/contacto'}>Contacto</Link></motion.li>
          </ul>
        </div>

        <Image className={`hidden md:block w-auto h-full ${styles.logo}`} src={logo} width={100} height={100} alt='Logo Acapulco'/>
      </div>

      <span className={`md:hidden ${styles.divider}`} />

      <div className={styles.copy}>
        <p>&copy; 2024 Acapulco en la Piel. Todos los derechos reservados.</p>
        <Link target='blank' href={'https://davedev.ca/'}>Website by DaveDev.</Link>
      </div>
    </motion.footer>
  )
}
