import React, { useRef, useEffect } from 'react';
import { Splide, SplideSlide } from 'splide-nextjs/react-splide';
import { aboutDsc } from '../constants/aboutDsc';
import styles from '../styles/HomeMainCarousel.module.scss'
import 'splide-nextjs/splide/dist/css/themes/splide-default.min.css';

export const HomeMainCarousel = ( {coverRef, coverMobileRef} ) => {

     const aboutRef = useRef();

     useEffect(() => {
          aboutRef.current.sync(coverRef.current.splide);
          aboutRef.current.sync(coverMobileRef.current.splide);
     }, []);

     const options = {
          type: 'slide',
          rewind: true,
          arrows: false,
          pagination: false,
          autoplay: 'true',
          interval: 4000,
        } 

     const createMarkup = (string) => {
          return {__html: string};
     }

     return(
          <div className={styles.single}>
               <Splide className={styles.wrapper} options={options} ref={aboutRef}>
                    {aboutDsc.map(content => (
                         <SplideSlide key={content+1}>
                              <h3 className={styles.info} dangerouslySetInnerHTML={createMarkup(content)} />
                         </SplideSlide>
                    ))}
               </Splide>
          </div>
     );
}