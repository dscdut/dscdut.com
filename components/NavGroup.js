import React from 'react';
import styles from '../styles/NavGroup.module.scss'
import {NavItem} from './NavItem';
import {navItems} from '../constants/navItems';

export const NavGroup = ({ isNavShowing }) => {
     return(
          <div className={ isNavShowing? styles.nav_group : styles.nav_group__invisible} >
               {navItems.map( (item) => {
                    return <NavItem 
                         key={item.icon}
                         color={item.color}
                         icon={item.icon}
                         tooltip={item.tooltip} 
                    />
               })}
          </div>
     );
}