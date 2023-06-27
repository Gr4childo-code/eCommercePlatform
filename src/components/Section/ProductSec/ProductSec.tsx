import { H2title } from '../../global/H2title/H2title';
import { Title } from '../../global/Title/Title';
import styles from './ProductSec.module.scss';
import Chair from '../../../assets/ProductChair.svg';
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
      </div>
    </section>
  );
};
