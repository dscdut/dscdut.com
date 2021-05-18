import React, { useState } from 'react';
import Image from 'next/image';
import { Card } from 'antd';
import { motion } from 'framer-motion';
import { MyHead } from '../../components/MyHead';
import { NavGroup } from '../../components/NavGroup';
import { MyHeader } from '../../components/MyHeader';
import { SearchBar } from '../../components/SearchBar';
import { Footer } from '../../components/Footer';
import styles from '../../styles/OurTeam.module.scss';

const { Meta } = Card;

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/ourteam`);
  const data = await res.json();

  return {
    props: { team: data },
  };
};

const OurTeam = ({ team }) => {
  const [isNavShowing, setIsNavShowing] = useState(false);

  const toggleNavigation = () => {
    setIsNavShowing(!isNavShowing);
  };

  const hoverMotion = {
    position: 'relative',
    zIndex: 1,
    background: 'white',
    scale: [1, 1.05],
    transition: {
      duration: 0.3,
    },
  };

  const renderCard = (member) => (
    <Image
      className={styles.img}
      height={300}
      width={300}
      alt={member.name}
      src={member.avatar}
    />
  );

  const renderTeam = team.map((group) => (
    <div key={group.id} className={styles.group_container}>
      <h1 className={styles.group_name}>{group.name.toUpperCase()}</h1>
      <div className={styles.group_members}>
        {group.group.map((member) => (
          <motion.div key={member.name} whileHover={hoverMotion}>
            <Card className={styles.card} cover={renderCard(member)}>
              <Meta className={styles.meta} title={member.role} description={member.name} />
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  ));

  return (
    <div className={styles.single}>
      <MyHead title="Our Team" />
      <div className={styles.title}>
        <MyHeader toggleNav={toggleNavigation} />
        <SearchBar />
      </div>
      <NavGroup isNavShowing={isNavShowing} />

      <div className={styles.cover}>
        <Image
          className={styles.coverImg}
          alt="Out team cover image"
          src="/images/ourteam_cover.svg"
          width={1120}
          height={480}
          layout="intrinsic"
          objectFit="cover"
          loading="lazy"
        />
      </div>
      <div className={styles.team}>
        {renderTeam}
      </div>
      <Footer />
    </div>

  );
};

export default OurTeam;
