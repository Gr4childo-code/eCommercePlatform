import { forwardRef } from 'react';
import styles from './Title.module.scss';
import { motion } from 'framer-motion';
type TitleComponent = {
  title: string;
};
export const Title = forwardRef(({ title }: TitleComponent, ref) => {
  return (
    <p className={styles.title} ref={ref}>
      {title}
    </p>
  );
});
export const MTitle = motion(Title);
