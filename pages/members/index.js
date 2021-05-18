import React, { useState } from 'react';
import { MyHead } from '../../components/MyHead';
import { MembersBackground } from '../../components/MembersBackground';
import { NavGroup } from '../../components/NavGroup';
import { MyHeader } from '../../components/MyHeader';
import { CarouselWithThumbnails } from '../../components/CarouselWithThumbnails';
import styles from '../../styles/Members.module.scss';
import { motion } from 'framer-motion';

export const getStaticProps = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/members');
  const data = await res.json();

  return {
    props: { members: data }
  }
}

const Members = ( {members} ) => {

     const [isNavShowing, setIsNavShowing] = useState(false);

     const toggleNavigation = () => {  
          setIsNavShowing(!isNavShowing);
     }

     return (  
          <div className={styles.single}>
               <MyHead title='Our Members' />
               <MembersBackground />
               <div className={styles.title}>
                    <MyHeader toggleNav={toggleNavigation}/>
               </div>
               <NavGroup isNavShowing={isNavShowing}/>
               <CarouselWithThumbnails members={ members } />
          </div>
     );
}
 
export default Members;