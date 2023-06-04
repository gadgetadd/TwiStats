import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

function ErrorAnimation() {
  const lottieContainerRef = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: lottieContainerRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://assets5.lottiefiles.com/packages/lf20_gs9xrxtb.json',
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

export default ErrorAnimation;
