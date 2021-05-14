import React, { useState } from 'react';
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import { MyHead } from '../components/MyHead';
import { HomeMain } from '../components/HomeMain';
import { NavGroup } from '../components/NavGroup';
import { Splide, SplideSlide } from 'splide-nextjs/react-splide';
import 'splide-nextjs/splide/dist/css/themes/splide-default.min.css';

export default function Home( {toggleNav} ) {

  const [isNavShowing, setIsNavShowing] = useState(false);

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
      <MyHead title='DSC-DUT Website' />

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
      
      <HomeMain toggleNav={toggleNavigation} />
    </div>
    <NavGroup isNavShowing={isNavShowing}/>
    </>
  )
}
