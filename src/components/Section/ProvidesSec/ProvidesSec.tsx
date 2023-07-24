import ProvidesSVG from '@/assets/provideSec.svg';
import { H2title } from '@/components/global/H2title/H2title';
import { Title } from '@/components/global/Title/Title';
import { ProvidesTitleAch } from './ProvidesTitleAch/ProvidesTitleAch';

import styles from './Provides.module.scss';
import AnimationMotion from '@/AnimationMotion/AnimationMotion';
import { AppContext } from '@/app/App';
import { useEffect, useContext } from 'react';
import { useInView } from 'react-intersection-observer';

export const Provides = () => {
  const { ref, inView } = useInView({ threshold: 0.7 });
  const { setInitialView } = useContext(AppContext);

  useEffect(() => {
    if (inView) {
      setInitialView('Provides');
    } else {
      setInitialView(null);
    }
  }, [inView]);
  return (
    <AnimationMotion>
      <section className={styles.Provides} id='Provides' ref={ref}>
        <div className={styles.left}>
          <img src={ProvidesSVG} alt='ProvidesSVG' className={styles.left__img} />
        </div>
        <div className={styles.right}>
          <Title title={'SERVICES WE PROVIDES'} />
          <H2title title={'Build on both: Google web stories and AMP website format'} />

          <div className={styles.right__achievements}>
            <ProvidesTitleAch
              title={'5660'}
              color={'CPrimary'}
              text={'Product sale per day working and sales'}
            />
            <div className={styles.right__hr}></div>
            <ProvidesTitleAch
              title={'4M+'}
              color={'CAccent2'}
              text={'Downloaded saled in your good.'}
            />
          </div>
        </div>
      </section>
    </AnimationMotion>
  );
};
