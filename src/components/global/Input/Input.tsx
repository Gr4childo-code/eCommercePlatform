import { Buttons } from '../Buttons/Buttons';

import styles from './Input.module.scss';
type InputComponent = {
  placeholder: string;
  textBtn: string;
  icon?: string;
};
export const Input = ({ placeholder, icon, textBtn }: InputComponent) => {
  return (
    <div className={styles.container}>
      {icon && <img src={icon} alt={icon} />}
      <input type='text' placeholder={placeholder} className={styles.container__input} />
      <Buttons color='CLTransparent' backgroundColor='BGPrimary' title={textBtn} />
    </div>
  );
};
