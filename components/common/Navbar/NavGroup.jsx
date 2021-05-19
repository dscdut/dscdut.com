import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../../styles/NavGroup.module.scss';
import { NavItem } from './NavItem';
import navItems from '../../../constants/navItems';

export default function NavGroup({ isNavShowing }) {
  return (
    <div className={isNavShowing ? styles.nav_group : styles.nav_group__invisible}>
      {navItems.map((item) => (
        <NavItem
          key={item.icon}
          color={item.color}
          icon={item.icon}
          tooltip={item.tooltip}
          link={item.link}
        />
      ))}
    </div>
  );
}

NavGroup.propTypes = {
  isNavShowing: PropTypes.bool.isRequired,
};
