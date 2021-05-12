import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { ButtonMore } from '../../components/Button';
import { NavGroup } from '../../components/NavGroup';
import { SearchBar } from '../../components/SearchBar';
import { Title } from '../../components/Title';
import styles from '../../styles/MemberDetails.module.scss';

export const getStaticPaths = async () => {
     const res = await fetch('https://606f0d030c054f001765845d.mockapi.io/api/members');
     const data = await res.json();
   
     const paths = data.map(member => {
       return {
         params: { id: member.id.toString() }
       }
     })
   
     return {
       paths,
       fallback: false
     }
   }
   
   export const getStaticProps = async (context) => {
     const id = context.params.id;
     const res = await fetch('https://606f0d030c054f001765845d.mockapi.io/api/members/' + id);
     const data = await res.json();
   
     return {
       props: { member: data }
     }
   }


   const MemberDetails = ( {member} ) => {

    const [isNavShowing, setIsNavShowing] = useState(false);

    const toggleNavigation = () => {  
        setIsNavShowing(!isNavShowing);
    }
    
    const createMarkup = (member) => {
      return {__html: member.biography};
    }
     
    return ( 
          <div className={styles.single}>
            <Head>
              <title>{member.name} | Profile</title>
              <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"></link>
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.title}>
              <Title toggleNav={toggleNavigation}/>
              <SearchBar />
            </div>
            <NavGroup isNavShowing={isNavShowing}/>
            <div className={styles.info}>
              <div className={styles.img_container}>
                <Image className={styles.img} src={member.avatar} width={360} height={540} layout='intrinsic' object-fit='cover'/>
              </div>
              <div className={styles.content}>
                <h1 className={styles.name}>{member.name}</h1>
                <p className={styles.department}>{member.department}</p>
                <div className={styles.biography} dangerouslySetInnerHTML={createMarkup(member)} />
                <div className={styles.btn_group}>
                  <ButtonMore content="Contact me" type="primary"/>
                  <Link href="/members">
                    <a> 
                      <ButtonMore content="Close" type="default"/>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>

     );
}
 
export default MemberDetails;