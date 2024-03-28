'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import styles from './styles/heroSlide.module.css'
import logo from '../../public/images/acapulcoW.png'
import image1 from '../../public/images/home.webp'
import image2 from '../../public/images/main.webp'


const HeroSlider = () => {


    return (

        <motion.div

            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={` containerX  ${styles.slider__div}`}
        >
            <Image
                src={image2}
                alt={`Imagen de acapulco`}
                width={700}
                height={900}
                className={` section md:hidden ${styles.slider__img}`}
            />



            <div className='relative flex items-center justify-center'>
                <Image
                    src={image1}
                    alt={`Imagen de acapulco`}
                    width={1500}
                    height={786}
                    className={`hidden md:block ${styles.slider__imgDesk}`}
                />
                <motion.div initial={{ opacity: 0, y: -10 }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: { delay: 0.13, duration: 0.3 },
                    }} className={`hidden md:block absolute top-1/2   ${styles.slider__logo}`}

                >
                    <Image src={logo}
                        width={180}
                        height={180}
                        alt='Logo Acapulco '
                        className={styles.logo}
                    />

                </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, y: -10 }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.13, duration: 0.3 },
                }} className=' mt-14'>
                <h1 className={` ${styles.heading}`}>Descubre Acapulco
                </h1>
                <p>Checa nuestros destacados y descubre Acapulco con nosotros.</p>
            </motion.div>
        </motion.div>

    );
};

export default HeroSlider;
