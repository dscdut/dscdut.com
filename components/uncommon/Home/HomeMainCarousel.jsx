/* eslint-disable react/prop-types */
import React, { useRef, useEffect } from 'react';
import sanitizeHtml from 'sanitize-html';
import { Markup } from 'interweave';
import { Splide, SplideSlide } from 'splide-nextjs/react-splide';
import aboutDsc from '../../../constants/aboutDsc';
import styles from '../../../styles/HomeMainCarousel.module.scss';
import 'splide-nextjs/splide/dist/css/themes/splide-default.min.css';

export default function HomeMainCarousel({ coverRef, coverMobileRef }) {
  const aboutRef = useRef();

  useEffect(() => {
    aboutRef.current.sync(coverRef.current.splide);
    coverMobileRef.current.sync(aboutRef.current.splide);
  });

  const options = {
    type: 'slide',
    rewind: true,
    arrows: true,
    drag: false,
    pagination: false,
    autoplay: true,
    interval: 4000,
    resetProgress: false,
    breakpoints: {
      600: {
        arrows: false,
        drag: true,
        pagination: true,
      },
    },
  };

  return (
    <div className={styles.single}>
      <Splide className={styles.wrapper} options={options} ref={aboutRef}>
        {aboutDsc.map((content) => (
          <SplideSlide key={content + 1}>
            <h3 className={styles.info}>
              <Markup content={sanitizeHtml(content)} />
            </h3>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
