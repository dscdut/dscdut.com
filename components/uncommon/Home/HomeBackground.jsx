import React from 'react';
import Image from 'next/image';
import styles from '../../../styles/HomeBackground.module.scss';

export default function HomeBackground() {
  return (
    <div className={styles.background}>
      <Image src="/images/dsc_back4.svg" alt="DSC logo background" width={520} height={375} layout="intrinsic" />
    </div>
  );
}
