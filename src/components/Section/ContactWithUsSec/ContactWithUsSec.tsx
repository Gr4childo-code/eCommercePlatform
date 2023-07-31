import { H2title } from '@/components/global/H2title/H2title';
import { Input } from '@/components/global/Input/Input';

import styles from './ContactWithUsSec.module.scss';
import AnimationMotion from '@/AnimationMotion/AnimationMotion';
import { useContext, useEffect } from 'react';
import { AppContext } from '@/app/App';
import { useInView } from 'react-intersection-observer';
export const ContactWithUsSec = () => {
  const { ref, inView } = useInView({ threshold: 0.7 });
  const { setInitialView } = useContext(AppContext);

  useEffect(() => {
    if (inView) {
      setInitialView('Contact');
    } else {
      setInitialView(null);
    }
  }, [inView]);

  return (
    <AnimationMotion>
      <section className={styles.ContactWithUsSec} id='Contact' ref={ref}>
        <H2title title='Contact with us.' />
        <p className={styles.subtitle}>More than 50,000+ companies trusted our business</p>
        <Input placeholder='Type your messages..s' textBtn='Get Started' />
      </section>
    </AnimationMotion>
  );
};
