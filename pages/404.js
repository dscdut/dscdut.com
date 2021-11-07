/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import MyHead from '../components/common/Head/MyHead';
import styles from '../styles/My404.module.scss';

const My404 = () => {
  const router = useRouter();

  return (
    <div className={styles.single}>
      <MyHead title="GDSC-DUT | 404 Error" pathName={router.asPath} />
      <Image src="/images/dsc_404.png" width={360} height={210} layout="intrinsic" quality={100} />
      <h1 className={styles.code}>404</h1>
      <h2 className={styles.message}>Page not found</h2>
      <Link href="/">
        <a href="/" className={styles.link}>
          Back to Home
        </a>
      </Link>
    </div>
  );
};

export default My404;
