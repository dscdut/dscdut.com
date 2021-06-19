/* eslint-disable max-len */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import '../styles/globals.scss';
import 'material-icons/iconfont/material-icons.css';
import Router from 'next/router';
import NProgress from 'nprogress';
import { Provider } from 'react-redux';
import 'nprogress/nprogress.css';
import '../styles/customTooltip.scss';
import { motion, AnimatePresence } from 'framer-motion';
// eslint-disable-next-line no-unused-vars
import { appWithTranslation } from 'next-i18next';
import Loader from '../components/common/Loader/Loader';
import store from '../redux/store';
import useTransitionFix from '../hooks/useTransitionFix';
import applyImageFadeInTransition from '../helpers/applyImageFadeInTransition';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps, router }) {
  const transitionCallback = useTransitionFix();
  const [isLoading, setIsLoading] = useState(false);

  const handleVisibilityChange = (hiddenType) => {
    if (!hiddenType) {
      setTimeout(applyImageFadeInTransition, 500);
    }
  };

  useEffect(() => {
    setTimeout(applyImageFadeInTransition, 500);
    let hidden;
    let visibilityChange;
    if (typeof document.hidden !== 'undefined') { // Opera 12.10 and Firefox 18 and later support
      hidden = 'hidden';
      visibilityChange = 'visibilitychange';
    } else if (typeof document.msHidden !== 'undefined') {
      hidden = 'msHidden';
      visibilityChange = 'msvisibilitychange';
    } else if (typeof document.webkitHidden !== 'undefined') {
      hidden = 'webkitHidden';
      visibilityChange = 'webkitvisibilitychange';
    }
    document.addEventListener(visibilityChange, () => handleVisibilityChange(document[hidden]));
    return () => document.removeEventListener(visibilityChange, () => handleVisibilityChange(document[hidden]));
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

  useEffect(() => {
    router.events.on('routeChangeStart', () => setIsLoading(true));
    router.events.on('routeChangeComplete', () => setIsLoading(false));
    return () => {
      router.events.off('routeChangeStart', () => setIsLoading(true));
      router.events.off('routeChangeComplete', () => setIsLoading(false));
    };
  }, [router.events]);

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <AnimatePresence exitBeforeEnter onExitComplete={transitionCallback}>
      <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" exit="pageExit" variants={PAGE_VARIANTS}>
        <Provider store={store}>
          { isLoading
            ? (
              <div className="loader">
                <Loader />
              </div>
            )
            : null }
          <Component {...pageProps} />
        </Provider>
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
