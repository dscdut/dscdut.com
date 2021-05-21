import React from 'react';
import Image from 'next/image';
import styles from '../../../styles/MembersBackground.module.scss';

export default function MembersBackground() {
  return (
    <div>
      <div className={styles.background}>
        <Image src="/images/dsc_back.svg" alt="DSC logo background" width={700} height={700} layout="intrinsic" />
      </div>
      <div className={styles.background2}>
        <Image src="/images/dsc_back4.svg" alt="DSC logo background" width={820} height={590} layout="intrinsic" />
      </div>
    </div>
  );
}
