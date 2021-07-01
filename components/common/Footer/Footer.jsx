import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Input } from 'antd';
import { FacebookFilled, MailFilled, PhoneFilled } from '@ant-design/icons';
import MyButton from '../Button/MyButton';
import styles from '../../../styles/Footer.module.scss';
import 'antd/es/input/style/index.css';

export default function Footer() {
  return (
    <div className={styles.single}>
      <div className={styles.contact}>
        <h1 className={styles.contact_title}>Contact Us</h1>
        <div className={styles.details}>
          <div className={styles.info}>
            <p>
              <PhoneFilled className={styles.icon} style={{ color: '#0f9d58' }} />
              <a className={styles.contact_link} href="tel:+84773288148">(+84) 773 288 148</a>
            </p>
          </div>
          <div className={styles.info}>
            <p>
              <MailFilled className={styles.icon} style={{ color: '#FF3333' }} />
              <a className={styles.contact_link} href="mailto:dsc.dut@gmail.com">dsc.dut@gmail.com</a>
            </p>
          </div>
          <div className={styles.info}>
            <p>
              <FacebookFilled className={styles.icon} style={{ color: '#4267B2' }} />
              <a className={styles.contact_link} href="https://fb.com/dscdut" target="_blank" rel="noreferrer">facebook.com/dscdut</a>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.question}>
        <h1 className={styles.question_title}>You have questions?</h1>
        <div className={styles.form}>
          <Input className={styles.question_elem} size="large" placeholder="Name" />
          <Input className={styles.question_elem} size="large" placeholder="Question" />
          <div className={styles.question_elem}>
            <MyButton content="Send" type="primary" />
          </div>
        </div>
      </div>
      <div className={styles.logo_container}>
        <Link href="/">
          <a href="/">
            <Image
              className={styles.logo}
              alt="DSC logo"
              src="/images/dsc_footer.svg"
              width={500}
              height={150}
              layout="intrinsic"
              quality={100}
            />
          </a>
        </Link>
      </div>
    </div>
  );
}
