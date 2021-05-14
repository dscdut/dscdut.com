import React from 'react';
import styles from '../styles/HomeMain.module.scss'
import Link from 'next/link';
import Image from 'next/image';
import { MyHeader } from './MyHeader';
import { HomeMainCarousel } from './HomeMainCarousel';
import { MyButton } from './MyButton';
import { motion } from 'framer-motion';

export const HomeMain = ({ toggleNav, coverRef }) => {

     const variants = {
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
          }
     };

     const toggleNavigation = () => {
          toggleNav();
     }

     return (
          <motion.div initial="hidden" animate="visible" variants={variants} className={styles.single}>
               <div className={styles.content}>
                    <MyHeader toggleNav={toggleNavigation}/>
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
                    <HomeMainCarousel coverRef={coverRef}/>
                    <Link href='/ourteam'>
                         <a className={styles.btn}><MyButton content="Find out more" type="primary"/></a>
                    </Link>
               </div>
          </motion.div>  
     );
}