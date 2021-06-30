import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const MY_SEO = {
  description: 'Official website of Developer Student Clubs - Danang University of Science and Technology.',
  type: 'website',
  url: 'https://dscwebsite.vercel.app',
  siteName: 'DSC-DUT',
  image: '/thumbnail.png',
  icon: '/favicon.ico',
  pngIcon: '/images/dsc_icon.png',
  appleTouchIcon: '/images/dsc_icon_light.png',
  appleMaskIcon: '/images/logo.svg',
};

const MyHead = ({ title, pathName }) => (
  <Head>
    <title>{title}</title>
    <meta charSet="utf-8" key="charset" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" key="httpequiv" />
    <meta name="viewport" content="width=device-width, initial-scale=1" key="viewport" />
    <meta name="description" content={MY_SEO.description} key="desc" />
    <meta name="robots" content="index, follow" key="robots" />
    <link rel="shortcut icon" href={MY_SEO.icon} />
    <link rel="icon" type="image/png" sizes="32x32" href={MY_SEO.pngIcon} />
    <link rel="icon" type="image/png" sizes="16x16" href={MY_SEO.pngIcon} />
    {/* Open Graph */}
    <meta property="og:type" content={MY_SEO.type} key="ogtype" />
    <meta property="og:url" content={MY_SEO.url + pathName} key="ogurl" />
    <meta property="og:image" content={MY_SEO.image} key="ogimage" />
    <meta property="og:site_name" content={MY_SEO.siteName} key="ogsitename" />
    <meta property="og:title" content={title} key="ogtitle" />
    <meta property="og:description" content={MY_SEO.description} key="ogdesc" />
    {/* Apple */}
    <meta name="apple-mobile-web-app-title" content={title} key="apltitle" />
    <link rel="apple-touch-icon" sizes="180x180" href="/images/dsc_icon_light.png" />
    <link rel="mask-icon" href="/images/logo.svg" color="grey" />
    {/* Twitter */}
    <meta name="twitter:title" content={title} key="twtitle" />
    <meta name="twitter:card" content="summary" key="twcard" />
    <meta name="twitter:description" content={MY_SEO.description} key="twdesc" />
    <meta name="twitter:image" content={MY_SEO.image} key="twimage" />
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-QSRT8HLGLG" />
    <script src="/js/analytics.js" />
  </Head>
);

MyHead.propTypes = {
  title: PropTypes.string.isRequired,
  pathName: PropTypes.string.isRequired,
};

export default MyHead;
