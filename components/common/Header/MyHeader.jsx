import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import { toggleNavigation } from '../../../redux/actions';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import styles from '../../../styles/MyHeader.module.scss';

function MyHeader(props) {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const handleToggleNavigation = (e) => {
    if (width <= 600) {
      e.preventDefault();
      // eslint-disable-next-line react/prop-types
      props.toggleNavigation();
    }
  };
  return (
    <div className={styles.single}>
      <Link href="/">
        <a href="/">
          <button type="button" className={`${styles.circle} ${router.pathname === '/' || (width <= 1024 && width > 600) ? 'disabled-link' : 'link'}`} onClick={handleToggleNavigation}>
            <Image className={styles.logo} src="https://res.cloudinary.com/dz5pvwzm5/image/upload/v1636278416/dsc_images/public/vkqopjogegulvsn281xv.png" alt="DSC logo" layout="intrinsic" width={55} height={35} />
          </button>
        </a>
      </Link>
      <div className={styles.club_name}>
        <h1 className={styles.club_name_global}>Developer Student Clubs</h1>
        <h2 className={styles.club_name_local}>Danang University of Science and Technology</h2>
      </div>
    </div>
  );
}

export default connect(null, { toggleNavigation })(MyHeader);
