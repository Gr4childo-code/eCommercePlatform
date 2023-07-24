import { H2title } from '@/components/global/H2title/H2title';
import { Title } from '@/components/global/Title/Title';
import { WhaWeDoItems } from './WhaWeDoItems/WhaWeDoItems';

import Traffic from '@/assets/WhatWeDo/Grow your traffic.svg';
import ContentFSales from '@/assets/WhatWeDo/Content for sales.svg';
import Report from '@/assets/WhatWeDo/Report.svg';
import Conversion from '@/assets/WhatWeDo/Conversion.svg';

import styles from './WhaWeDoSec.module.scss';

export const WhaWeDoSec = () => {
  return (
    <section className={styles.WhaWeDoSec}>
      <div className={styles.left}>
        <Title title={'WHAT WE DO'} />
        <H2title title={'Our creative process for your business'} />
        <p className={styles.left__text}>
          As our motto, we always provide the best service especially for you and your company by
          growing your company to be better.
        </p>
      </div>
      <div className={styles.right}>
        <WhaWeDoItems
          title={'Grow your traffic'}
          img={Traffic}
          text={'We always help your company to grow with us.'}
          BgColor='primary-shade-1'
        />
        <WhaWeDoItems
          title={'Content for sales'}
          img={ContentFSales}
          text={'Every company that we handel. We always content more sales.'}
          BgColor='secondary-color-shade'
        />
        <WhaWeDoItems
          title={'Reporting & analytics'}
          img={Report}
          text={'Lorem ipsum dolor sit amet, consectetur adipiscing'}
          BgColor='accent1-color-shade'
        />
        <WhaWeDoItems
          title={'Better Conversion'}
          img={Conversion}
          text={'We always help your company to grow with us.'}
          BgColor='accent2-color-shade'
        />
      </div>
    </section>
  );
};
