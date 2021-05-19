import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import styles from '../../../styles/MyButton.module.scss';
import 'antd/es/button/style/index.css';

export default function MyButton({ content, type }) {
  return (
    <div className={styles.single}>
      <Button className={styles.btn} type={type} shape="round" size="large">
        <strong className={styles.content}>{content}</strong>
      </Button>
    </div>
  );
}

MyButton.propTypes = {
  content: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
