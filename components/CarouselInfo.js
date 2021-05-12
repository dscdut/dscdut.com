import React from 'react';
import { Carousel } from 'antd';
import { aboutDsc } from '../constants/aboutDsc';
import styles from '../styles/CarouselInfo.module.scss'
import 'antd/es/carousel/style/index.css';

export const CarouselInfo = () => {

     const createMarkup = (string) => {
          return {__html: string};
     }

     return(
          <div className={styles.single}>
               <Carousel className={styles.wrapper} dotPosition='bottom' autoplay>
                    {aboutDsc.map(content => 
                         <h3 key={content+1} className={styles.info} dangerouslySetInnerHTML={createMarkup(content)} />
                    )}
               </Carousel>
          </div>
     );
}