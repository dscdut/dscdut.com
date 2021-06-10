import React from 'react';
import Image from 'next/image';
import { connect } from 'react-redux';
import { toggleNavigation } from '../../../redux/actions';
import styles from '../../../styles/MyHeader.module.scss';

function MyHeader(props) {
  const handleToggleNavigation = () => {
    // eslint-disable-next-line react/prop-types
    props.toggleNavigation();
  };
  return (
    <div className={styles.single}>
      <button type="button" className={styles.circle} onClick={handleToggleNavigation}>
        <Image className={styles.logo} src="/images/dsc_logo.png" alt="DSC logo" layout="intrinsic" width={55} height={35} />
      </button>
      <div className={styles.club_name}>
        <h1 className={styles.club_name_global}>Developer Student Clubs</h1>
        <h2 className={styles.club_name_local}>Danang University of Science and Technology</h2>
      </div>
    </div>
  );
}

export default connect(null, { toggleNavigation })(MyHeader);
