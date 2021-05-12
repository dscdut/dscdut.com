import React from 'react';
import styles from '../styles/Title.module.scss'
import Image from 'next/image'

export const Title = ( { toggleNav }) => {
     
     const toggleNavigation = () => {
          toggleNav();
     }
     
     return(
          <div className={styles.single}>
               <button className={styles.circle} onClick={toggleNavigation}>
                    <Image className={styles.logo} src='/images/dsc_logo.png' alt='DSC logo' layout='intrinsic' width={55} height={35} />
               </button>
               <div className={styles.club_name}>
                    <h1 className={styles.club_name_global}>Developer Student Clubs</h1>
                    <h2 className={styles.club_name_local}>Danang University of Science and Technology</h2>
               </div>
          </div>
     );
}