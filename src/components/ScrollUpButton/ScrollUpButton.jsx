import { useState, useEffect } from 'react';
import IconButton from '@mui/joy/IconButton';
import Tooltip from '@mui/joy/Tooltip';
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
    <Tooltip title="Scroll back to top" variant="solid">
      <IconButton
        sx={{
          pointerEvents: isVisible ? 'auto' : 'none',
          opacity: isVisible ? 1 : 0,
          transitionDuration: '300ms',
          position: 'fixed',
          bottom: 16,
          right: 16,
        }}
        size="md"
        color="info"
        aria-label="scroll back to top"
        onClick={handleClick}
      >
        <KeyboardArrowUpIcon sx={{ color: '#373737' }} />
      </IconButton>
    </Tooltip>
  );
};

export default ScrollUpButton;
