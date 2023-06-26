import { ReactNode } from 'react';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

import styles from './Layout.module.scss';

interface IProps {
  children: ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <div className={styles.Layout_wrapper}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
