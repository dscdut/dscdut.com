import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { Card } from 'antd';
import { motion } from 'framer-motion';
import MyHead from '../../components/common/Head/MyHead';
import NavGroup from '../../components/common/Navbar/NavGroup';
import MyHeader from '../../components/common/Header/MyHeader';
import SearchBar from '../../components/common/SearchBar/SearchBar';
import Footer from '../../components/common/Footer/Footer';
import ImageUrl from '../../constants/imageUrl';
import styles from '../../styles/OurTeam.module.scss';

const { Meta } = Card;

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/dscdut`);
  const data = await res.json();

  const departments = new Set();
  data.forEach((member) => departments.add(member.department));

  const result = [];
  departments.forEach((department) => {
    const group = data.filter((member) => member.department === department);
    result.push({
      department,
      group,
    });
  });

  return {
    props: { team: result },
  };
};

const OurTeam = ({ team }) => {
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
      src={`${ImageUrl.IMAGE_MEDIUM_URL}/${member.avatar}`}
      quality={100}
    />
  );

  const renderTeam = team.map((group) => (
    <div key={group.department} className={styles.group_container}>
      <h1 className={styles.group_name}>{group.department.toUpperCase()}</h1>
      <div className={styles.group_members}>
        {group.group.map((member) => (
          <motion.div key={member.fullName} whileHover={hoverMotion}>
            <Link href={`/members/${member.id}`}>
              <a className={styles.group_member} href={`/members/${member.id}`}>
                <Card className={styles.card} cover={renderCard(member)}>
                  <Meta className={styles.meta} title={member.role} description={member.fullName} />
                </Card>
              </a>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  ));

  return (
    <div className={styles.single}>
      <MyHead title="Our Team" />
      <div className={styles.title}>
        <MyHeader />
        <SearchBar />
      </div>
      <NavGroup />

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

OurTeam.propTypes = {
  team: PropTypes.arrayOf(PropTypes.shape({
    department: PropTypes.string.isRequired,
    group: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      fullName: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    })),
  })).isRequired,
};

export default OurTeam;
