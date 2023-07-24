import { Title } from '../../global/Title/Title';
import styles from './CreativeProcessSec.module.scss'
const CreativeProcessSec = () => {
  return (
    <div className={styles.CreativeProcess}>
      <div className={styles.left}>
        <Title title='Creative Process'/>
      </div>
      <div className={styles.right}></div>
    </div>
  )
}

export default CreativeProcessSec