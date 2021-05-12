import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Splide, SplideSlide } from 'splide-nextjs/react-splide';
import Image from 'next/image';
import {ButtonMore} from './Button';
import styles from '../styles/Thumbnail.module.scss';
import 'splide-nextjs/splide/dist/css/themes/splide-default.min.css';

export const Thumbnail = ( {members} ) => {

     const primaryOptions = {
          type      : 'loop',
		gap       : '10rem',
		pagination: false,
          fixedWidth  : '90%',
          autoplay  : true,
          interval  : 3000,
          pauseOnHover : true,
          arrows    :false,
          breakpoints : {
               '600': {
                    fixedWidth: "100vw",
                    gap       : 0,
               }
          }
     };

     const secondaryOptions = {
          type        : 'slide',
          rewind      : true,
          fixedWidth  : 80,
          fixedHeight : 80,
          isNavigation: true,
          gap         : 25,
          focus       : 'center',
          trimSpace   : 'true',
          pagination  : false,
          cover       : true,
          perPage     : 10
     };

     const primaryRef = useRef();
     const secondaryRef = useRef();
     
     useEffect(() => {
          primaryRef.current.sync(secondaryRef.current.splide);
     }, []);

	const renderPrimarySlides =  members.map( member => (
			<SplideSlide className={styles.member_container} key={ member.id }>
                    <div className={styles.info}>
                         <h1 className={styles.name}>{ member.name }</h1>
                         <p className={styles.department}>{ member.department }</p>
                         <Link  href={'/members/' + member.id} >
                              <a><ButtonMore content="Know more" type="primary"/></a>
                         </Link>
                    </div>
                    <div className={styles.avatar}>
                         <Image className={styles.img} src={ member.avatar } alt={ member.name }  width={400} height={600} />
                    </div>
			</SplideSlide>
	));

     const renderSecondarySlides = members.map( member => (
			<SplideSlide className={styles.secondary_container}  key={ member.id }>
                    <Image className={styles.secondary_img} src={ member.avatar } alt={ member.name } width={120} height={120} objectFit='cover' layout='intrinsic' />
			</SplideSlide>
	));

     return (
		<div className={styles.single}>
			<Splide className={styles.wrapper} options={ primaryOptions } ref={ primaryRef } >
				{ renderPrimarySlides }
			</Splide>

			<Splide className={styles.secondary_wrapper} options={ secondaryOptions } ref={ secondaryRef }>
				{ renderSecondarySlides }
			</Splide>
		</div>
	);
}