import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MyHead } from '../../components/MyHead';
import { MyButton } from '../../components/MyButton';
import { NavGroup } from '../../components/NavGroup';
import { SearchBar } from '../../components/SearchBar';
import { MyHeader } from '../../components/MyHeader';
import styles from '../../styles/MemberDetails.module.scss';
import { data } from '../../services/mockApi/db';

export const getStaticPaths = async () => {
  //  const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/members');
  //  const data = await res.json();

  const paths = data.map((member) => ({
    params: { id: member.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  //  const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + 'members/' + id);
  //  const data = await res.json();
  const myData = data[id - 1];

  return {
    props: { member: myData },
  };
};

const MemberDetails = ({ member }) => {
  const [isNavShowing, setIsNavShowing] = useState(false);

  const toggleNavigation = () => {
    setIsNavShowing(!isNavShowing);
  };

  const createMarkup = (member) => ({ __html: member.biography });

  return (
    <div className={styles.single}>
      <MyHead title={`${member.name} | Profile`} />
      <div className={styles.title}>
        <MyHeader toggleNav={toggleNavigation} />
        <SearchBar />
      </div>
      <NavGroup isNavShowing={isNavShowing} />
      <div className={styles.info}>
        <div className={styles.img_container}>
          <Image className={styles.img} src={member.avatar} width={360} height={540} layout="intrinsic" object-fit="cover" />
        </div>
        <div className={styles.content}>
          <h1 className={styles.name}>{member.name}</h1>
          <p className={styles.department}>{member.department}</p>
          <div className={styles.biography} dangerouslySetInnerHTML={createMarkup(member)} />
          <div className={styles.btn_group}>
            <MyButton content="Contact me" type="primary" />
            <Link href="/members">
              <a>
                <MyButton content="Close" type="default" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>

  );
};

export default MemberDetails;
