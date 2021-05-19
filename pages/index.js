/* eslint-disable react/jsx-filename-extension */
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { Splide, SplideSlide } from 'splide-nextjs/react-splide';
import styles from '../styles/Home.module.scss';
import MyHead from '../components/common/Head/MyHead';
import HomeMain from '../components/uncommon/Home/HomeMain';
import NavGroup from '../components/common/Navbar/NavGroup';
import 'splide-nextjs/splide/dist/css/themes/splide-default.min.css';

export default function Home() {
  const [isNavShowing, setIsNavShowing] = useState(false);
  const coverRef = useRef();

  const toggleNavigation = () => {
    setIsNavShowing(!isNavShowing);
  };

  const options = {
    type: 'fade',
    fixedWidth: '100%',
    rewind: true,
    arrows: false,
    pagination: false,
    autoplay: true,
    interval: 4000,
    drag: false,
  };

  const coverImages = ['/images/cover.jpg', '/images/cover2.jpg'];

  const renderSplide = coverImages.map((image) => (
    <SplideSlide className={styles.slide} key={image}>
      <Image
        alt="Cover"
        src={image}
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </SplideSlide>
  ));

  return (
    <>
      <div className={styles.container}>
        <MyHead title="DSC-DUT Website" />

        <div className={styles.background}>
          <Splide className={styles.wrapper} options={options} ref={coverRef}>
            {renderSplide}
          </Splide>
        </div>

        <HomeMain toggleNav={toggleNavigation} coverRef={coverRef} />
      </div>
      <NavGroup isNavShowing={isNavShowing} />
    </>
  );
}
