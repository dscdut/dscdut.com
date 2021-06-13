import React from 'react';
import styles from '../../../styles/Loader.module.scss';

const Loader = () => (
  <div className={styles.container}>
    <div className={styles.loader}>
      <div className={styles.dot1} />
      <div className={styles.dot2} />
      <div className={styles.dot3} />
      <div className={styles.dot4} />
      <div className={styles.dot5} />
      <div className={styles.dot6} />
      <div className={styles.dot7} />
    </div>
  </div>
);

export default Loader;
