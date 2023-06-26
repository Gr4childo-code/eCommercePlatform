import styles from './WhaWeDoItems.module.scss';

type WhaWeDoItemsComponent = {
  img: string;
  title: string;
  text: string;
  BgColor:
    | 'primary-shade-1'
    | 'secondary-color-shade'
    | 'accent1-color-shade'
    | 'accent2-color-shade';
};

export const WhaWeDoItems = ({ img, title, text, BgColor }: WhaWeDoItemsComponent) => {
  return (
    <div className={styles.container}>
      <img src={img} alt={img} className={`${styles.container__img} ${styles[BgColor]}`} />
      <h3 className={styles.container__title}>{title}</h3>
      <p className={styles.container__text}>{text}</p>
    </div>
  );
};
