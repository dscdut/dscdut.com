import React from 'react';
import styles from '../styles/NavItem.module.scss'
import { Tooltip } from 'antd';
import 'antd/es/tooltip/style/index.css';

export const NavItem = ({color, icon, tooltip}) => {
     return(
          <Tooltip className='tooltip' placement="right" title={tooltip}>
               <button className={styles.single} style={{backgroundColor: `${color}`}}>
                    <span className="material-icons">
                         {icon}
                    </span>
               </button>
          </Tooltip>
     );
}