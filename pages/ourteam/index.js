import React, { useState } from 'react'; 
import Image from 'next/image';
import Head from 'next/head';
import {NavGroup} from '../../components/NavGroup';
import {Title} from '../../components/Title';
import {SearchBar} from '../../components/SearchBar';
import {Footer} from '../../components/Footer';
import styles from '../../styles/OurTeam.module.scss';
import { Card } from 'antd';
import { motion } from 'framer-motion';
import { BASE_URL } from '../../constants/url';

const { Meta } = Card;

export const getStaticProps = async () => {
  const res = await fetch(BASE_URL + '/ourteam');
  const data = await res.json();

  return {
    props: { team: data }
  }
}

const OurTeam = ( {team} ) => {

     const [isNavShowing, setIsNavShowing] = useState(false);

     const toggleNavigation = () => {  
          setIsNavShowing(!isNavShowing);
     }

     return ( 
          <div className={styles.single}>
            <Head>
              <title>Our team</title>
              <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"></link>
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.title}>
              <Title toggleNav={toggleNavigation}/>
              <SearchBar />
            </div>
            <NavGroup isNavShowing={isNavShowing}/>
            
            <div className={styles.cover}>
                 <Image
                    className={styles.coverImg}
                    alt="Out team cover image"
                    src="/images/ourteam_cover.svg"
                    width={1120}
                    height={480}
                    layout='intrinsic'
                    objectFit='cover'
                    loading='lazy'
                 />
            </div>
            <div className={styles.team}>
               {team.map(group => {
                    return(
                         <div key={group.id} className={styles.group_container}>
                              <h1 className={styles.group_name}>{group.name.toUpperCase()}</h1>
                              <div className={styles.group_members}>
                                   {group.group.map(member => {
                                        return(
                                             <motion.div 
                                                  key={member.name}
                                                  whileHover={{
                                                       position: 'relative',
                                                       zIndex: 1,
                                                       background: 'white',
                                                       scale: [1, 1.05],   
                                                       transition: {
                                                         duration: .3
                                                       }
                                                  }}>
                                             <Card 
                                                  
                                                  className={styles.card}
                                                  cover={
                                                       <Image className={styles.img}
                                                       height={300}
                                                       width={300}
                                                       alt={member.name}
                                                       src={member.avatar}
                                                       />
                                                  }
                                             >
                                                  <Meta className={styles.meta} title={member.role} description={member.name} />
                                             </Card>
                                             </motion.div>
                                        );
                                   })}
                              </div>
                         </div>
                    );
               })}
            </div>
            <Footer />
          </div>

     );
}
 
export default OurTeam;