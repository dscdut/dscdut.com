import React from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import MyHead from '../components/common/Head/MyHead';
import NavGroup from '../components/common/Navbar/NavGroup';
import MyHeader from '../components/common/Header/MyHeader';
import SearchBar from '../components/common/SearchBar/SearchBar';
import Footer from '../components/common/Footer/Footer';
import styles from '../styles/PageLayout.module.scss';

function PageLayout({ headTitle, children, hasFooter }) {
  const router = useRouter();

  return (
    <div className={styles.single}>
      <MyHead title={headTitle} pathName={router.asPath} />
      <div className={styles.title}>
        <MyHeader />
        <SearchBar />
      </div>
      <NavGroup />
      <>{children}</>
      { hasFooter && <Footer /> }
    </div>
  );
}

PageLayout.propTypes = {
  headTitle: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  hasFooter: PropTypes.bool.isRequired,
};

export default PageLayout;
