import React from 'react';
import Link from 'next/link';
import styles from '../styles/NavItem.module.scss'
import { Tooltip } from 'antd';
import 'antd/es/tooltip/style/index.css';

export const NavItem = ({color, icon, tooltip, link}) => {
     return(
          <Link href={link}>
               <Tooltip className='tooltip' placement="right" title={tooltip}>
                    <button className={styles.single} style={{backgroundColor: `${color}`}}>
                         <span className="material-icons">
                              {icon}
                         </span>
                    </button>
               </Tooltip>
          </Link>
     );
}