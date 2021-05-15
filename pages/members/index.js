import React, { useState } from 'react';
import { MyHead } from '../../components/MyHead';
import { MembersBackground } from '../../components/MembersBackground';
import { NavGroup } from '../../components/NavGroup';
import { MyHeader } from '../../components/MyHeader';
import { CarouselWithThumbnails } from '../../components/CarouselWithThumbnails';
import styles from '../../styles/Members.module.scss';
import { motion } from 'framer-motion';
import { BASE_URL } from '../../constants/url';

export const getStaticProps = async () => {
  const res = await fetch(BASE_URL + '/members');
  const data = await res.json();

  return {
    props: { members: data }
  }
}

const Members = ( {members} ) => {

     const [isNavShowing, setIsNavShowing] = useState(false);
     const [index, setIndex] = useState(0);

     const toggleNavigation = () => {  
          setIsNavShowing(!isNavShowing);
     }

     const changeIndex = () => {
          setIndex((index + 1) % 3);
     }

     return (  
          <div className={styles.single}>
               <MyHead title='Our Members' />
               <MembersBackground backgroundIndex={index}/>
               <div className={styles.title}>
                    <MyHeader toggleNav={toggleNavigation}/>
               </div>
               <NavGroup isNavShowing={isNavShowing}/>
               <CarouselWithThumbnails members={ members } change={changeIndex}/>
          </div>
     );
}
 
export default Members;