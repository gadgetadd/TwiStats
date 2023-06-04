import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

function BirdAnimation() {
  const lottieContainerRef = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: lottieContainerRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://assets3.lottiefiles.com/packages/lf20_nkf5e15x.json',
    });

    return () => anim.destroy();
  }, []);

  return (
    <div
      ref={lottieContainerRef}
      style={{ width: 150, height: 150, margin: 32 }}
    />
  );
}

export default BirdAnimation;
