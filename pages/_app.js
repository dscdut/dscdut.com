import { useEffect } from 'react';
import '../styles/globals.scss'
import Router from 'next/router';
import NProgress from 'nprogress'; 
import 'nprogress/nprogress.css'; 
import { motion, AnimatePresence } from 'framer-motion';
 
Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps, router }) {
  
  useEffect(() => {
    var images = document.querySelectorAll(`img`);
    for(let i = 0; i < images.length; i++){
      images[i].onload = () => { images[i].style.opacity = 1}
    }
  });

  const variants = {
    pageInitial: {
      opacity: 0
    },
    pageAnimate: {
      opacity: 1
    },
    pageExit: {
      backgroundColor: 'white',
      opacity: 0
    }
  };
  
  return (
      <AnimatePresence>
        <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" exit='pageExit' variants={variants}>
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
  )
}

export default MyApp

