import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

export default function MyHead({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="This is official website of Developer Student Clubs - Danang University of Science and Technology." />
      <meta name="robots" content="index, follow" />
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

MyHead.propTypes = {
  title: PropTypes.string.isRequired,
};
