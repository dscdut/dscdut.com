import React, { useState } from 'react';
import Head from 'next/head';
import {NavGroup} from '../../components/NavGroup';
import { Title } from '../../components/Title';
import { Thumbnail } from '../../components/Thumbnail';
import styles from '../../styles/Members.module.scss';
import { motion } from 'framer-motion';

export const getStaticProps = async () => {
  const res = await fetch('https://606f0d030c054f001765845d.mockapi.io/api/members');
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
          <motion.div initial="hidden" animate="visible" variants={{
               hidden: {
                 scale: 1,
                 opacity: 0
               },
               visible: {
                 scale: 1,
                 opacity: 1,
                 transition: {
                   delay: .8
                 }
               },
          }} className={styles.single}>
               <Head>
                    <title>Members</title>
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    rel="stylesheet"></link>
                    <link rel="icon" href="/favicon.ico" />
               </Head>
               <div className={styles.title}>
                    <Title toggleNav={toggleNavigation}/>
               </div>
               <NavGroup isNavShowing={isNavShowing}/>
               <Thumbnail members={ members } />
          </motion.div>
     );
}
 
export default Members;