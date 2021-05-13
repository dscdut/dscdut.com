import React from 'react';
import styles from '../styles/Home.module.scss'
import Link from 'next/link';
import Image from 'next/image';
import {Title} from './Title';
import {CarouselInfo} from './CarouselInfo';
import {ButtonMore} from './Button';
import { motion } from 'framer-motion';

export const Home = ({ toggleNav }) => {

     const toggleNavigation = () => {
          toggleNav();
     }

     return (
          <motion.div initial="hidden" animate="visible" variants={{
               hidden: {
                 scale: .8,
                 opacity: 0
               },
               visible: {
                 scale: 1,
                 opacity: 1,
                 transition: {
                   delay: .8
                 }
               },
             }} className={styles.single}>
               <div className={styles.content}>
                    <Title toggleNav={toggleNavigation}/>
                    <div className={styles.img_container}>
                         <Image
                         alt='cover'
                         src='/images/cover.jpg'
                         width={600}
                         height={400}
                         objectFit='cover'
                         layout='intrinsic'
                         />
                    </div>
                    <CarouselInfo />
                    <Link href='/ourteam'>
                         <a className={styles.btn}><ButtonMore content="Find out more" type="primary"/></a>
                    </Link>
               </div>
          </motion.div>  
     );
}