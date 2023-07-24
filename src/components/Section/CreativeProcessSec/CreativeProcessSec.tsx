import { useContext, useEffect } from 'react';
import { AppContext } from '@/app/App';
import { useInView } from 'react-intersection-observer';
import { H2title } from '@/components/global/H2title/H2title';
import { Title } from '@/components/global/Title/Title';
import AnimationMotion from '@/AnimationMotion/AnimationMotion';
import ManCreativeProcess from '@/assets/CreativeProcess/ManCreativeProcess.svg';
import styles from './CreativeProcessSec.module.scss';
const CreativeProcessSec = () => {
  const { ref, inView } = useInView({ threshold: 1 });
  const { setInitialView } = useContext(AppContext);

  useEffect(() => {
    if (inView) {
      setInitialView('Process');
    } else {
      setInitialView(null);
    }
  }, [inView]);
  return (
    <AnimationMotion>
      <div className={styles.CreativeProcess} id='Process' ref={ref}>
        <div className={styles.left}>
          <Title title='Creative Process' />
          <H2title title='Know your ads inside & out-perform' />
          <p className={styles.text}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries,
          </p>
        </div>
        <div className={styles.right}>
          <img src={ManCreativeProcess} alt='' />
        </div>
      </div>
    </AnimationMotion>
  );
};

export default CreativeProcessSec;
