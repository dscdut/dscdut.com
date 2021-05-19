import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import styles from '../../../styles/MyHeader.module.scss';

export default function MyHeader({ toggleNav }) {
  const toggleNavigation = () => {
    toggleNav();
  };

  return (
    <div className={styles.single}>
      <button type="button" className={styles.circle} onClick={toggleNavigation}>
        <Image className={styles.logo} src="/images/dsc_logo.png" alt="DSC logo" layout="intrinsic" width={55} height={35} />
      </button>
      <div className={styles.club_name}>
        <h1 className={styles.club_name_global}>Developer Student Clubs</h1>
        <h2 className={styles.club_name_local}>Danang University of Science and Technology</h2>
      </div>
    </div>
  );
}

MyHeader.propTypes = {
  toggleNav: PropTypes.func.isRequired,
};