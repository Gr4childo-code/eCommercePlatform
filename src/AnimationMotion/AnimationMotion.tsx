import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface Props {
  children: JSX.Element;
}
const AnimationMotion = ({ children }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible');
    } else {
      mainControls.start('hidden');
    }
  }, [isInView]);
  return (
    <div ref={ref} style={{ position: 'relative', overflow: 'hidden' }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 70 },
          visible: { opacity: 1, y: 0 }
        }}
        initial='hidden'
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AnimationMotion;
