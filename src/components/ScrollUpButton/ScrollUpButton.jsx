import { useState, useEffect } from 'react';
import IconButton from '@mui/joy/IconButton';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <IconButton
      sx={{
        pointerEvents: isVisible ? 'auto' : 'none',
        opacity: isVisible ? 1 : 0,
        transitionProperty: 'opacity',
        transitionDuration: '300ms',
        position: 'fixed',
        bottom: 16,
        right: 16,
      }}
      color="info"
      aria-label="scroll back to top"
      onClick={handleClick}
    >
      <KeyboardArrowUpIcon sx={{ color: '#373737' }} />
    </IconButton>
  );
};

export default ScrollUpButton;
