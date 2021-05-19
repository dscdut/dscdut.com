import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MyHead from '../../components/common/Head/MyHead';
import MembersBackground from '../../components/uncommon/Members/MembersBackground';
import NavGroup from '../../components/common/Navbar/NavGroup';
import MyHeader from '../../components/common/Header/MyHeader';
import MembersCarouselWithThumbnails from '../../components/uncommon/Members/MembersCarouselWithThumbnails';
import styles from '../../styles/Members.module.scss';

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/members`);
  const data = await res.json();

  return {
    props: { members: data },
  };
};

const Members = ({ members }) => {
  const [isNavShowing, setIsNavShowing] = useState(false);

  const toggleNavigation = () => {
    setIsNavShowing(!isNavShowing);
  };

  return (
    <div className={styles.single}>
      <MyHead title="Our Members" />
      <MembersBackground />
      <div className={styles.title}>
        <MyHeader toggleNav={toggleNavigation} />
      </div>
      <NavGroup isNavShowing={isNavShowing} />
      <MembersCarouselWithThumbnails members={members} />
    </div>
  );
};

Members.propTypes = {
  members: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
  })).isRequired,
};

export default Members;
