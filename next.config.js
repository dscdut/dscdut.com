/* eslint-disable object-shorthand */
/* eslint-disable func-names */
// next.config.js
// const { i18n } = require('./next-i18next.config');

module.exports = {
  // Target must be serverless
  target: 'serverless',
  distDir: 'docs',
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    return config;
  },
  images: {
    domains: ['res.cloudinary.com'],
    loader: 'imgix',
    path: '',
  },
  devIndicators: {
    autoPrerender: false,
  },
};
