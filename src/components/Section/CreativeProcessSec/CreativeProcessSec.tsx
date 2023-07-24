import { H2title } from '@/components/global/H2title/H2title';
import { Title } from '@/components/global/Title/Title';

import ManCreativeProcess from '@/assets/CreativeProcess/ManCreativeProcess.svg';
import styles from './CreativeProcessSec.module.scss';
const CreativeProcessSec = () => {
  return (
    <div className={styles.CreativeProcess}>
      <div className={styles.left}>
        <Title title='Creative Process' />
        <H2title title='Know your ads inside & out-perform' />
        <p className={styles.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry's standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries,
        </p>
      </div>
      <div className={styles.right}>
        <img src={ManCreativeProcess} alt='' />
      </div>
    </div>
  );
};

export default CreativeProcessSec;
