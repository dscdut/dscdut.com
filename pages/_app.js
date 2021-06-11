/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import '../styles/globals.scss';
import Router from 'next/router';
import NProgress from 'nprogress';
import { Provider } from 'react-redux';
import 'nprogress/nprogress.css';
import '../styles/customTooltip.scss';
import { motion, AnimatePresence } from 'framer-motion';
import { appWithTranslation } from 'next-i18next';
import store from '../redux/store';
import useTransitionFix from '../hooks/useTransitionFix';
import applyImageFadeInTransition from '../helpers/applyImageFadeInTransition';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps, router }) {
  const transitionCallback = useTransitionFix();

  useEffect(() => {
    setTimeout(applyImageFadeInTransition, 500);
  });

  const PAGE_VARIANTS = {
    pageInitial: {
      opacity: 0,
    },
    pageAnimate: {
      opacity: 1,
    },
    pageExit: {
      opacity: 0,
    },
  };

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <AnimatePresence exitBeforeEnter onExitComplete={transitionCallback}>
      <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" exit="pageExit" variants={PAGE_VARIANTS}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </motion.div>
    </AnimatePresence>
  );
}

export default appWithTranslation(MyApp);
