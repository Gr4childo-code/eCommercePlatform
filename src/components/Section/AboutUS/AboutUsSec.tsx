import AboutUsMan from '../../../assets/aboutUSMan.svg';
import Email from '../../../assets/Email.svg';
import Check from '../../../assets/Check.svg';

import { Buttons } from '../../global/Buttons/Buttons';
import styles from './AboutUs.module.scss';
import { Title } from '../../global/Title/Title';
export const AboutUs = () => {
  return (
    <section className={styles.AboutUs}>
      <div className={styles.left}>
        {/* <div className={styles.left__polygon1} /> */}
        <Title title={'100% SATISFIED GUARANTEE'} />
        <h1 className={styles.left__title}>Power up your shopify products</h1>
        <h2 className={styles.left__subtitle}>
          More than 90,000+ companies trust our business. Get help from a dedicated shopify
          developer today.
        </h2>
        <div className={styles.left__sendEmail}>
          <img src={Email} alt='Email Icon' />
          <input
            type='text'
            placeholder='Your email adress'
            className={styles.left__sendEmail__input}
          />
          <Buttons color='CLTransparent' backgroundColor='BGPrimary' title='Sigh In' />
        </div>
        <div className={styles.left__advantage}>
          <div className={styles.left__advantage__info}>
            <img src={Check} alt='' /> <span>30 days free trial</span>
          </div>
          <div className={styles.left__advantage__info}>
            <img src={Check} alt='' /> <span>No credit card required</span>
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.right__lightyellow} />
        <div className={styles.right__container}>
          <div className={styles.right__container__blue}>
            <div className={styles.right__container__yellow}>
              <img src={AboutUsMan} alt='AboutUsMan' className={styles.right__container__img} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
