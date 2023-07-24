import { Buttons } from '@/components/global/Buttons/Buttons';
import Logo from '@/components/global/Logo/Logo';
import { Nav } from '@/components/global/Nav/Nav';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header_wrapper}>
      <Logo />
      <Nav />
      <div className={styles.header__buttons}>
        <Buttons color='CLPrimary' backgroundColor='BGTransparent' title='Sign in' />
        <Buttons color='CLTransparent' backgroundColor='BGPrimary' title='Try Free ' />
      </div>
    </header>
  );
};
