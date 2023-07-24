import { useEffect, useContext } from 'react';
import { AppContext } from '@/app/App';
import { useInView } from 'react-intersection-observer';
import { H2title } from '@/components/global/H2title/H2title';
import { Title } from '@/components/global/Title/Title';
import Chair from '@/assets/ProductChair.svg';
import Check from '@/assets/Check.svg';
import AnimationMotion from '@/AnimationMotion/AnimationMotion';
import styles from './ProductSec.module.scss';
export const ProductSec = () => {
  const { ref, inView } = useInView({ threshold: 1 });
  const { setInitialView } = useContext(AppContext);

  useEffect(() => {
    if (inView) {
      setInitialView('Product');
    } else {
      setInitialView(null);
    }
  }, [inView]);
  return (
    <AnimationMotion>
      <section className={styles.ProductSec} id='Product' ref={ref}>
        <div className={styles.left}>
          <div className={styles.left__cover}>
            <img src={Chair} alt='chair' className={styles.left__img} />
          </div>
        </div>
        <div className={styles.right}>
          <Title title={'OUR PRODUCT STORIES'} />
          <H2title title={'Why product stories? Learn more'} />
          <div className={styles.right__advantage}>
            <div className={styles.right__advantage__info}>
              <img src={Check} alt='' className={styles.right__advantage__info__img} />
              <div className={styles.right__advantage__info__block}>
                <p className={styles.right__advantage__info__title}>
                  SEO optimized, high Google work
                </p>
                <p className={styles.right__advantage__info__text}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </div>
            </div>
            <div className={styles.right__advantage__info}>
              <img src={Check} alt='' className={styles.right__advantage__info__img} />
              <div className={styles.right__advantage__info__block}>
                <p className={styles.right__advantage__info__title}>
                  Fast loading, low bounce rates
                </p>
                <p className={styles.right__advantage__info__text}>
                  It is a long established fact that a reader will be distracted by the readable
                  content
                </p>
              </div>
            </div>
            <div className={styles.right__advantage__info}>
              <img src={Check} alt='' className={styles.right__advantage__info__img} />
              <div className={styles.right__advantage__info__block}>
                <p className={styles.right__advantage__info__title}>
                  SEO optimized, high Google work
                </p>
                <p className={styles.right__advantage__info__text}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimationMotion>
  );
};
