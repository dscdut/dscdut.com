import React from 'react';
import Link from 'next/link';
import { Tooltip } from 'antd';
import styles from '../../../styles/NavItem.module.scss';
import 'antd/es/tooltip/style/index.css';
import 'antd/es/button/style/index.css';

export const NavItem = ({color, icon, tooltip, link}) => (
  <Link href={link}>
    <Tooltip className="tooltip" placement="right" title={tooltip}>
      <button className={styles.single} style={{backgroundColor:`${color}`}}>
        <span className="material-icons">
          {icon}
        </span>
      </button>
    </Tooltip>
  </Link>
);
