import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Splide, SplideSlide } from 'splide-nextjs/react-splide';
import styles from '../styles/HomeMain.module.scss';
import { MyHeader } from './MyHeader';
import { HomeMainCarousel } from './HomeMainCarousel';
import { MyButton } from './MyButton';
import 'splide-nextjs/splide/dist/css/themes/splide-default.min.css';

export const HomeMain = ({ toggleNav, coverRef }) => {
  const variants = {
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.8,
      },
    },
  };

  const splideOptions = {
    type: 'fade',
    fixedWidth: '100%',
    rewind: true,
    arrows: false,
    pagination: false,
    autoplay: 'true',
    interval: 4000,
    drag: false,
  };

  const coverImages = ['/images/cover.jpg', '/images/cover2.jpg'];

  const coverMobileRef = useRef();

  const toggleNavigation = () => {
    toggleNav();
  };

  const renderSplide = coverImages.map((image) => (
    <SplideSlide key={image}>
      <Image
        alt="Cover"
        src={image}
        layout="intrinsic"
        width={600}
        height={400}
        objectFit="cover"
        quality={100}
      />
    </SplideSlide>
  ));

  return (
    <motion.div initial="hidden" animate="visible" variants={variants} className={styles.single}>
      <div className={styles.content}>
        <MyHeader toggleNav={toggleNavigation} />
        <div className={styles.img_container}>
          <Splide options={splideOptions} ref={coverMobileRef}>
            {renderSplide}
          </Splide>
        </div>
        <HomeMainCarousel coverRef={coverRef} coverMobileRef={coverMobileRef} />
        <Link href="/ourteam">
          <a className={styles.btn}><MyButton content="Find out more" type="primary" /></a>
        </Link>
      </div>
    </motion.div>
  );
};
