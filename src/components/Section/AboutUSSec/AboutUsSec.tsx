import { useInView } from 'react-intersection-observer';
import { useEffect, useContext } from 'react';
import { AppContext } from '@/app/App';
import { motion } from 'framer-motion';
import manAbout from '@/assets/AboutUs/manAbout.svg';
import womanAbout from '@/assets/AboutUs/womanAbout.svg';
import Email from '@/assets/Email.svg';
import Check from '@/assets/Check.svg';
import Play from '@/assets/Play.svg';
import Plan from '@/assets/AboutUs/planAbout.svg';

import { MTitle, Title } from '@/components/global/Title/Title';
import { Input } from '@/components/global/Input/Input';
import {
  RectangleOrange,
  RectanglePink,
  RectangleYellow
} from '@/components/global/Rectangle/Rectangle';
import { Buttons } from '@/components/global/Buttons/Buttons';
import AnimationMotion from '@/AnimationMotion/AnimationMotion';
import styles from './AboutUs.module.scss';

export const AboutUs = () => {
  const { ref, inView } = useInView({ threshold: 0.7 });
  const { setInitialView } = useContext(AppContext);

  useEffect(() => {
    if (inView) {
      setInitialView('About');
    } else {
      setInitialView(null);
    }
  }, [inView]);

  const blockAnimations = {
    hidden: {
      x: 100,
      y: 50,
      opacity: 0
    },
    visible: {
      x: 0,
      y: 0,

      opacity: 1
    }
  };
  const textAnimations = {
    hidden: {
      y: -100,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  return (
    // <AnimationMotion>
    <section className={styles.AboutUs} id='About' ref={ref}>
      <RectangleYellow />
      <motion.div
        initial='hidden'
        whileInView='visible'
        variants={blockAnimations}
        transition={{ duration: 0.5, delay: 0.25 }}
        custom={0}
        className={styles.left}
      >
        {/* <div className={styles.left__polygon1} /> */}
        <MTitle
          variants={textAnimations}
          transition={{ duration: 0.5, delay: 0.25 }}
          custom={1}
          title={'100% SATISFIED GUARANTEE'}
        />
        <motion.h1
          variants={textAnimations}
          transition={{ duration: 0.5, delay: 0.7 }}
          custom={2}
          className={styles.left__title}
        >
          Power up your shopify products
        </motion.h1>
        <h2 className={styles.left__subtitle}>
          More than 90,000+ companies trust our business. Get help from a dedicated shopify
          developer today.
        </h2>
        <motion.div
          variants={blockAnimations}
          transition={{ duration: 0.5, delay: 0.5 }}
          custom={2}
          className={styles.left__sendEmail}
        >
          <Input placeholder='Your email address' icon={Email} textBtn='Sign up' />
        </motion.div>
        <motion.div
          variants={blockAnimations}
          transition={{ duration: 0.5, delay: 0.5 }}
          custom={2}
          className={styles.left__advantage}
        >
          <div className={styles.left__advantage__info}>
            <img src={Check} alt='' /> <span>30 days free trial</span>
          </div>
          <div className={styles.left__advantage__info}>
            <img src={Check} alt='' /> <span>No credit card required</span>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial='hidden'
        whileInView='visible'
        variants={blockAnimations}
        custom={1}
        transition={{ duration: 0.5, delay: 0.75 }}
        className={styles.right}
      >
        <div className={styles.right__lightyellow} />
        <RectangleOrange />
        <div className={styles.right__lightpurple} />
        <div className={styles.right__container}>
          <div className={styles.right__container__buyplan}>
            <img src={Plan} alt={Plan} />
            <p className={styles.title}>Make Progress</p>
            <p className={styles.subtitle}> with opening plans</p>
            <Buttons color='CLWhite' backgroundColor='BGSecondary' title='Buy plan' />
          </div>
          <div className={styles.right__container__blue}>
            <RectanglePink />
          </div>
          <div className={styles.right__container__yellow}></div>
          <img src={manAbout} alt={manAbout} className={styles.right__container__img} />
          <div className={styles.right__container__services}>
            <div className={styles.right__container__services__cover}>
              <img
                src={womanAbout}
                alt={womanAbout}
                className={styles.right__container__services__img}
              />
            </div>
            <div className={styles.right__container__services__right}>
              <p className={styles.title}>Margaret Philips</p>
              <p className={styles.subtitle}>Watch our best services</p>
            </div>
            <img src={Play} alt={Play} className={styles.right__container__services__play} />
          </div>
        </div>
      </motion.div>
    </section>
    // </AnimationMotion>
  );
};
