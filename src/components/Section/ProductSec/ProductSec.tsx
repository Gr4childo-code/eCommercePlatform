import { H2title } from '../../global/H2title/H2title';
import { Title } from '../../global/Title/Title';
import styles from './ProductSec.module.scss';
import Chair from '../../../assets/ProductChair.svg';
import Check from '../../../assets/Check.svg';
export const ProductSec = () => {
  return (
    <section className={styles.ProductSec}>
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
              <p className={styles.right__advantage__info__title}>Fast loading, low bounce rates</p>
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
  );
};
