import styles from './H2title.module.scss';

type H2titleComponent = {
  title: string;
};

export const H2title = ({ title }: H2titleComponent) => {
  return <h2 className={styles.title}> {title}</h2>;
};
