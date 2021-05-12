import React from 'react';
import { Carousel } from 'antd';
import styles from '../styles/CarouselInfo.module.scss'
import 'antd/es/carousel/style/index.css';

export const CarouselInfo = () => {
     return(
          <div className={styles.single}>
               <Carousel className={styles.wrapper} dotPosition='bottom' autoplay>
                    <div>
                         <h3 className={styles.info}>Developer Student Clubs (DSC) is program presented by Google Developers.<br /><br />
     DSCs are university-based community groups for students. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome.</h3>
                    </div>
                    <div>
                         <h3 className={styles.info}>By joining a DSC, the students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.<br/><br/>
     Developer Student Club - Danang University of Science and Technology is a chapter of DSC.</h3>
                    </div>
               </Carousel>
          </div>
     );
}