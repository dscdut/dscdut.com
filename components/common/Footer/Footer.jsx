import React from 'react';
import Image from 'next/image';
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
              (+84) 773 288 148
            </p>
          </div>
          <div className={styles.info}>
            <p>
              <MailFilled className={styles.icon} style={{ color: '#FF3333' }} />
              dsc.dut@gmail.com
            </p>
          </div>
          <div className={styles.info}>
            <p>
              <FacebookFilled className={styles.icon} style={{ color: '#4267B2' }} />
              facebook.com/dscdut
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
        <Image
          className={styles.logo}
          alt="DSC logo"
          src="/images/dsc_footer.svg"
          width={500}
          height={150}
          layout="intrinsic"
        />
      </div>
    </div>
  );
}
