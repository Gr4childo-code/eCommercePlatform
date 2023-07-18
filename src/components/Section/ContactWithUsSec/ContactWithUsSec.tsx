import { H2title } from '../../global/H2title/H2title';
import { Input } from '../../global/Input/Input';
import styles from './ContactWithUsSec.module.scss';
export const ContactWithUsSec = () => {
  return (
    <section className={styles.ContactWithUsSec}>
      <H2title title='Contact with us.' />
      <p className={styles.subtitle}>More than 50,000+ companies trusted our business</p>
      <Input placeholder='Type your messages..s' textBtn='Get Started' />
    </section>
  );
};
