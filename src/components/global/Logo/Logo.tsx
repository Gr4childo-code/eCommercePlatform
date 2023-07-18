import styles from './Logo.module.scss';
import LogoIMG from '../../../assets/Logo/Logo.svg';
const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={LogoIMG} alt='Logo' />
    </div>
  );
};

export default Logo;
