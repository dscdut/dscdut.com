import React from 'react';
import { connect } from 'react-redux';
import styles from '../../../styles/NavGroup.module.scss';
import NavItem from './NavItem';
import navItems from '../../../constants/navItems';

// eslint-disable-next-line react/prop-types
function NavGroup({ isNavOpen }) {
  return (
    <div className={isNavOpen ? styles.nav_group : styles.nav_group__invisible}>
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

const mapStateToProps = (state) => ({
  isNavOpen: state.nav.isNavOpen,
});

export default connect(mapStateToProps)(NavGroup);
