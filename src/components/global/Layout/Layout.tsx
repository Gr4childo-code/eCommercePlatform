import { ReactNode } from 'react';

import { Header } from '@/components/global/Header/Header';
import { Footer } from '@/components/global/Footer/Footer';

import styles from './Layout.module.scss';

interface IProps {
  children: ReactNode;
}

export const Layout = ({ children }: IProps) => {
  return (
    <div className={styles.Layout_wrapper}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
