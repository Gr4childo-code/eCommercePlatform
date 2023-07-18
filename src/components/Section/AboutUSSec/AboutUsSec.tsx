import AboutUsMan from '../../../assets/aboutUSMan.svg';
import Email from '../../../assets/Email.svg';
import Check from '../../../assets/Check.svg';

import styles from './AboutUs.module.scss';
import { Title } from '../../global/Title/Title';
import { Input } from '../../global/Input/Input';
import { RectangleOrange, RectanglePink, RectangleYellow } from '../../global/Rectangle/Rectangle';
export const AboutUs = () => {
  return (
    <section className={styles.AboutUs}>
      <RectangleYellow />
      <div className={styles.left}>
        {/* <div className={styles.left__polygon1} /> */}
        <Title title={'100% SATISFIED GUARANTEE'} />
        <h1 className={styles.left__title}>Power up your shopify products</h1>
        <h2 className={styles.left__subtitle}>
          More than 90,000+ companies trust our business. Get help from a dedicated shopify
          developer today.
        </h2>
        <div className={styles.left__sendEmail}>
          <Input placeholder='Your email address' icon={Email} textBtn='Sign up' />
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
        <RectangleOrange />
        <div className={styles.right__lightpurple} />
        <div className={styles.right__container}>
          <div className={styles.right__container__blue}>
            <RectanglePink />
          </div>

          <div className={styles.right__container__yellow}></div>

          <img src={AboutUsMan} alt='AboutUsMan' className={styles.right__container__img} />
        </div>
      </div>
    </section>
  );
};
