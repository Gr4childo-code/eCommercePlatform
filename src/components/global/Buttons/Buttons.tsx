import styles from './Buttons.module.scss';
type Props = {
  color?: 'CLTransparent' | 'CLPrimary' | 'CLWhite';
  backgroundColor?: 'BGTransparent' | 'BGPrimary' | 'BGSecondary';
  title?: string;
};

export const Buttons = ({
  color = 'CLPrimary',
  backgroundColor = 'BGPrimary',
  title = 'title'
}: Props) => {
  return (
    <button className={`${styles.button} ${styles[backgroundColor]} ${styles[color]}`}>
      {title}
    </button>
  );
};
