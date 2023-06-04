import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

function EmptyAnimation() {
  const lottieContainerRef = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: lottieContainerRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://assets9.lottiefiles.com/packages/lf20_eq1aIIplXI.json',
    });
    return () => anim.destroy();
  }, []);

  return (
    <div
      ref={lottieContainerRef}
      style={{ width: 380, height: 380, margin: 16 }}
    />
  );
}

export default EmptyAnimation;
