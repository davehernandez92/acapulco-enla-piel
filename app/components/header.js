
"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import nav from '@/public/images/menuu.webp'

import { cn } from "@/lib/utils"
import logo from "@/public/images/logoN.png"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { motion } from "framer-motion";

import styles from './styles/navmenu.module.css'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOnSection, setIsOnSection] = useState(false);


    const toggleMenu = () => {
        setIsOpen(!isOpen);


    };
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.getElementsByClassName('section');
            const navbarHeight = 20; // Set the navbar height to 110px

            for (let i = 0; i < sections.length; i++) {
                const section = sections[i];

                if (!section) continue; // Skip if section element is undefined

                const sectionTop = section.offsetTop - navbarHeight;
                const sectionBottom = sectionTop + section.offsetHeight;

                if (scrollY >= sectionTop && scrollY < sectionBottom) {
                    setIsOnSection(true);
                    
                    return;
                }
            }

            setIsOnSection(false);
           
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header>
            <nav className='containerNav'>

                {/* MOBILE NAV MENU  */}
                <div className={`fixed w-full z-30 left-0 right-0 flex justify-between items-center pt-5 px-5 ${styles.navMobile}`}>
                    <Link href={'/'}>
                        <Image
                            src={logo}
                            width={35}
                            height={35}
                            alt="Logo Acapulco en la Piel "
                            className=" md:hidden "

                        />
                    </Link>
                    <div className={`md:hidden  z-20 ${styles.hamburger__menu} ${isOpen ? styles.open : ''}`} onClick={toggleMenu}>

                        
                        
                        <div className={`${styles.bar} ${isOnSection ? styles.white : ''}`}></div>

                        <div className={`${styles.bar} ${isOnSection ? styles.white : ''}`}></div>

                        <div className={`${styles.bar} ${isOnSection ? styles.white : ''}`}></div>

                    </div>
                    <div className={`md:hidden absolute  ${styles.nav} ${isOpen ? styles.open : ''}`}>
                        
                        <motion.ul

                            className=" flex flex-col gap-8 h-full justify-center items-center ">
                            <motion.li
                                initial={{ opacity: 0, y: -10 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: { delay: 0.13, duration: 0.3 },
                                }}
                            >
                                <Link onClick={toggleMenu} href={'/'}>
                                    Inicio
                                </Link>
                            </motion.li

                            >
                            <motion.li
                                initial={{ opacity: 0, y: -10 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: { delay: 0.23, duration: 0.3 },
                                }}
                            >
                                <Link onClick={toggleMenu} href={'/hoteles'}>
                                    Hoteles
                                </Link>
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, y: -10 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: { delay: 0.28, duration: 0.3 },
                                }}
                            >
                                <Link onClick={toggleMenu} href={'/restaurantes'}>
                                    Restaurantes
                                </Link>
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, y: -10 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: { delay: 0.33, duration: 0.3 },
                                }}
                            >
                                <Link onClick={toggleMenu} href={'/servicios'}>
                                    Servicios
                                </Link>
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, y: -10 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: { delay: 0.33, duration: 0.3 },
                                }}
                            >
                                <Link onClick={toggleMenu} href={'/negocios'}>
                                    Negocios
                                </Link>
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, y: -10 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: { delay: 0.33, duration: 0.3 },
                                }}
                            >
                                <Link onClick={toggleMenu} href={'/visita'}>
                                    Visita
                                </Link>
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, y: -10 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: { delay: 0.33, duration: 0.3 },
                                }}
                            >
                                <Link onClick={toggleMenu} href={'/bienes'}>
                                    Bienes Raices
                                </Link>
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, y: -10 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: { delay: 0.36, duration: 0.3 },
                                }}
                            >
                                <Link onClick={toggleMenu} href={'/contacto'}>
                                    Contacto
                                </Link>
                            </motion.li>

                        </motion.ul>

                    </div>
                </div>


                {/* TABLET AND DESKTOP NAV MENU  */}
                <div className={`hidden md:flex w-full  ${styles.navDesk}`}>
                    <Link href={'/'}><Image className="w-auto h-auto" src={logo} alt="Logo Acapulco en la Piel" width={60} height={60} /></Link>
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <Link href="/" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Inicio
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                
                                <Link href="/hoteles" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Hoteles
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/restaurantes" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Restaurantes 
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/servicios" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Servicios
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/negocios" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Negocios
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/visita" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Visita
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/bienes" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Bienes Raices
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/contacto" legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        Contacto
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                </div>

            </nav>
        </header>

    );
};

const ListItem = React.forwardRef((props, ref) => {
    const { className, title, children, ...rest } = props;

    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...rest}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});

ListItem.displayName = "ListItem";



export default Header;
