import React, { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Homepage.module.scss'
import {Home} from '../components/Home';
import {NavGroup} from '../components/NavGroup';
import { Splide, SplideSlide } from 'splide-nextjs/react-splide';
import 'splide-nextjs/splide/dist/css/themes/splide-default.min.css';

export default function Homepage( {toggleNav} ) {

  const [isNavShowing, setIsNavShowing] = useState(false);
  const [coverImage, setCoverImage] = useState('/images/cover.jpg')

  const toggleNavigation = () => {  
    setIsNavShowing(!isNavShowing);
    console.log('toggle');
  }

  const options = {
    type: 'fade',
    fixedWidth: '100%',
    rewind: true,
    arrows: false,
    pagination: false,
    autoplay: 'true',
    interval: 3000,
  }

  const coverImages = ['/images/cover.jpg', '/images/cover2.jpg'];

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
        <Splide className={styles.wrapper} options={ options }>
          {coverImages.map(image => {
            return(
              <SplideSlide className={styles.slide} key={image}>
                    <Image 
                    alt="Cover"
                    src={image}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    />
			        </SplideSlide>
            );
          })}
        </Splide>
      </div>
      
      <Home toggleNav={toggleNavigation} />
    </div>
    <NavGroup isNavShowing={isNavShowing}/>
    </>
  )
}
