import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import MyHead from '../../components/common/Head/MyHead';
import MyButton from '../../components/common/Button/MyButton';
import NavGroup from '../../components/common/Navbar/NavGroup';
import SearchBar from '../../components/common/SearchBar/SearchBar';
import MyHeader from '../../components/common/Header/MyHeader';
import ImageUrl from '../../constants/imageUrl';
import styles from '../../styles/MemberDetails.module.scss';
import { data } from '../../services/mockApi/db';

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

const MemberDetails = ({ member }) => (
  <div className={styles.single}>
    <MyHead title={`${member.name} | Profile`} />
    <div className={styles.title}>
      <MyHeader />
      <SearchBar />
    </div>
    <NavGroup />
    <div className={styles.info}>
      <div className={styles.img_container}>
        <Image className={styles.img} src={`${ImageUrl.IMAGE_BIG_URL}/${member.avatar}`} width={360} height={540} layout="intrinsic" object-fit="cover" />
      </div>
      <div className={styles.content}>
        <h1 className={styles.name}>{member.name}</h1>
        <p className={styles.department}>{member.department}</p>
        <div className={styles.biography}>
          <ReactMarkdown>{member.biography}</ReactMarkdown>
        </div>
        <div className={styles.btn_group}>
          <Link href={member.contact}>
            <a href={member.contact}>
              <MyButton content="Contact me" type="primary" />
            </a>
          </Link>
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

MemberDetails.propTypes = {
  member: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    contact: PropTypes.string.isRequired,
    biography: PropTypes.string.isRequired,
  }).isRequired,
};

export default MemberDetails;
