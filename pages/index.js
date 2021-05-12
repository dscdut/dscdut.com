import React, { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Homepage.module.scss'
import {Home} from '../components/Home';
import {NavGroup} from '../components/NavGroup';

export default function Homepage( {toggleNav} ) {

  const [isNavShowing, setIsNavShowing] = useState(false);

  const toggleNavigation = () => {  
    setIsNavShowing(!isNavShowing);
    console.log('toggle');
  }

  return (
    <>
    <div className={styles.container}>
      <Head>
        <title>DSC-DUT Website</title>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.background}>
        <Image className={styles.image}
        alt="Cover"
        src="/images/cover.jpg"
        layout="fill"
        objectFit="cover"
        quality={100}
        />
      </div>
      
      <Home toggleNav={toggleNavigation}/>
    </div>
    <NavGroup isNavShowing={isNavShowing}/>
    </>
  )
}
