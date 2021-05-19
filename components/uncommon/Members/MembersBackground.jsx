import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../../../styles/MembersBackground.module.scss';

export default function MembersBackground() {
  const variants = {
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.8,
      },
    },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={variants}>
      <div className={styles.background}>
        <Image src="/images/dsc_back.svg" alt="DSC logo background" width={700} height={700} layout="intrinsic" />
      </div>
      <div className={styles.background2}>
        <Image src="/images/dsc_back4.svg" alt="DSC logo background" width={820} height={590} layout="intrinsic" />
      </div>
    </motion.div>
  );
}
