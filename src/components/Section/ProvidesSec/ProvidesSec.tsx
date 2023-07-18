import ProvidesSVG from '../../../assets/provideSec.svg';
import { H2title } from '../../global/H2title/H2title';
import { Title } from '../../global/Title/Title';
import styles from './Provides.module.scss';
import { ProvidesTitleAch } from './ProvidesTitleAch/ProvidesTitleAch';

export const Provides = () => {
  return (
    <section className={styles.Provides}>
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
  );
};
