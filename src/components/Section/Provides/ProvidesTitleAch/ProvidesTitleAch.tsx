import styles from './ProvidesTitleAch.module.scss';

type ProvidesTitleAchComponent = {
  title: string;
  color: 'CPrimary' | 'CAccent2';
  text: string;
};

export const ProvidesTitleAch = ({ color, title, text }: ProvidesTitleAchComponent) => {
  return (
    <div className={styles.Provides}>
      <p className={`${styles.Provides__title} ${styles[color]}`}>{title}</p>
      <p className={styles.Provides__text}> {text}</p>
    </div>
  );
};
