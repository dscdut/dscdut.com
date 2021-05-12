import '../styles/globals.scss'
import Router from 'next/router';
import NProgress from 'nprogress'; 
import 'nprogress/nprogress.css'; 
import { motion, AnimatePresence } from 'framer-motion';

//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start()); 
Router.events.on('routeChangeComplete', () => NProgress.done()); 
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps, router }) {
  return (
      <AnimatePresence>
        <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" exit='pageExit' variants={{
          pageInitial: {
            opacity: 0
          },
          pageAnimate: {
            opacity: 1,
            delay  : 1
          },
          pageExit: {
            backgroundColor: 'white',
            opacity: 0
          }
        }}>
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
  )
}

export default MyApp

