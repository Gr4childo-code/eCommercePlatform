import Logo from '../Logo/Logo';
import Twitter from '../../../assets/Footer/Twitter.svg';
import Instagram from '../../../assets/Footer/Instagram.svg';
import Facebook from '../../../assets/Footer/Facebook.svg';
import LinkedIn from '../../../assets/Footer/Linkedin.svg';

import { Nav } from '../Nav/Nav';
import styles from './Footer.module.scss';
export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Logo />
      <Nav />
      <ul className={styles.footer__links}>
        <li className={styles.footer__links__item}>
          <img src={Facebook} alt='Facebook' className={styles.footer__links__item__img} />
        </li>
        <li className={styles.footer__links__item}>
          <img src={Twitter} alt='Twitter' className={styles.footer__links__item__img} />
        </li>

        <li className={styles.footer__links__item}>
          <img src={Instagram} alt='Instagram' className={styles.footer__links__item__img} />
        </li>
        <li className={styles.footer__links__item}>
          <img src={LinkedIn} alt='LinkedIn' className={styles.footer__links__item__img} />
        </li>
      </ul>
    </footer>
  );
};
