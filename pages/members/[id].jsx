/* eslint-disable global-require */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import PageLayout from '../../layout/PageLayout';
import MyButton from '../../components/common/Button/MyButton';
import MembersBackground from '../../components/uncommon/Members/MembersBackground';
import getMemberContent from '../../helpers/getMemberContent';
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
  const content = getMemberContent(myData.biography);
  return {
    props: { member: myData, content },
  };
};

const MemberDetails = ({ member, content }) => (
  <PageLayout headTitle={`${member.name} | Profile`} hasFooter={false}>
    <MembersBackground />
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.img_container}>
          <Image
            className={styles.img}
            src={`${ImageUrl.IMAGE_BIG_URL}/${member.avatar}`}
            width={360}
            height={540}
            layout="intrinsic"
            object-fit="cover"
            quality={100}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.name}>{member.name}</h1>
          <p className={styles.department}>{member.role}</p>
          <div className={styles.biography}>
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
          <div className={styles.btn_group}>
            <Link href={member.contact} target="_blank" rel="noreferrer">
              <a href={member.contact} target="_blank" rel="noreferrer">
                <MyButton content="Contact me" type="primary" />
              </a>
            </Link>
            <Link href="javascript:history.back()">
              <a href="javascript:history.back()">
                <MyButton content="Close" type="default" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </PageLayout>
);

MemberDetails.propTypes = {
  member: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    contact: PropTypes.string.isRequired,
    biography: PropTypes.string.isRequired,
  }).isRequired,
  content: PropTypes.string.isRequired,
};

export default MemberDetails;
