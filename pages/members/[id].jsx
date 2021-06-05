import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
import sanitizeHtml from 'sanitize-html';
import { Markup } from 'interweave';
import MyHead from '../../components/common/Head/MyHead';
import MyButton from '../../components/common/Button/MyButton';
import NavGroup from '../../components/common/Navbar/NavGroup';
import SearchBar from '../../components/common/SearchBar/SearchBar';
import MyHeader from '../../components/common/Header/MyHeader';
import styles from '../../styles/MemberDetails.module.scss';
import { data } from '../../services/mockApi/db';

// const ReactMarkdown = require('react-markdown');
// const gfm = require('remark-gfm');

export const getStaticPaths = async () => {
  //  const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/members');
  //  const data = await res.json();

  const paths = data.map((member) => ({
    params: { id: member.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  //  const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + 'members/' + id);
  //  const data = await res.json();
  const myData = data[id - 1];

  return {
    props: { member: myData },
  };
};

const MemberDetails = ({ member }) => {
  const [isNavShowing, setIsNavShowing] = useState(false);

  const toggleNavigation = () => {
    setIsNavShowing(!isNavShowing);
  };

  return (
    <div className={styles.single}>
      <MyHead title={`${member.name} | Profile`} />
      <div className={styles.title}>
        <MyHeader toggleNav={toggleNavigation} />
        <SearchBar />
      </div>
      <NavGroup isNavShowing={isNavShowing} />
      <div className={styles.info}>
        <div className={styles.img_container}>
          <Image className={styles.img} src={member.avatar} width={360} height={540} layout="intrinsic" object-fit="cover" />
        </div>
        <div className={styles.content}>
          <h1 className={styles.name}>{member.name}</h1>
          <p className={styles.department}>{member.department}</p>
          <div className={styles.biography}>
            <Markup content={sanitizeHtml(member.biography)} />
          </div>
          <div className={styles.btn_group}>
            <MyButton content="Contact me" type="primary" />
            <Link href="/members">
              <a href="/members">
                <MyButton content="Close" type="default" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

MemberDetails.propTypes = {
  member: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    biography: PropTypes.string.isRequired,
  }).isRequired,
};

export default MemberDetails;
