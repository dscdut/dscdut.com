import React from 'react';
import { Button } from 'antd';
import styles from '../styles/MyButton.module.scss'
import 'antd/es/button/style/index.css';

export const MyButton = ( { content, type} ) => {
     return(
          <div className={styles.single}>
               <Button className={styles.btn} type={type} shape="round" size='large'>
                    <strong className={styles.content}>{content}</strong>
               </Button>
          </div>
     );
}