import styles from './Title.module.scss';

type TitleComponent = {
  title: string;
};
export const Title = ({ title }: TitleComponent) => {
  return <p className={styles.title}>100% SATISFIED GUARANTEE</p>;
};
