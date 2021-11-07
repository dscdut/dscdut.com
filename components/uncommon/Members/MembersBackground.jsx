import React from 'react';
import Image from 'next/image';
import styles from '../../../styles/MembersBackground.module.scss';

export default function MembersBackground() {
  return (
    <div>
      <div className={styles.background}>
        <Image src="https://res.cloudinary.com/dz5pvwzm5/image/upload/v1636278427/dsc_images/public/ap0jpumrvs3vsanyldjb.svg" alt="DSC logo background" width={700} height={700} layout="intrinsic" />
      </div>
      <div className={styles.background2}>
        <Image src="https://res.cloudinary.com/dz5pvwzm5/image/upload/v1636278430/dsc_images/public/lymyazck8btwaq9ifdfu.svg" alt="DSC logo background" width={820} height={590} layout="intrinsic" />
      </div>
    </div>
  );
}
