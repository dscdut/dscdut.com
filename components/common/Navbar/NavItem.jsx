import React from 'react';
import Link from 'next/link';
import { Tooltip, Button } from 'antd';
import styles from '../../../styles/NavItem.module.scss';
import 'antd/es/tooltip/style/index.css';
import 'antd/es/button/style/index.css';

export const NavItem = ({color, icon, tooltip, link}) => (
  <Link href={link}>
    <Tooltip className="tooltip" placement="right" title={tooltip}>
      <Button className={styles.single} shape="circle" style={{backgroundColor:`${color}`}}>
        <span className="material-icons">
          {icon}
        </span>
      </Button>
    </Tooltip>
  </Link>
);
