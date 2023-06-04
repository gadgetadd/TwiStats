import Button from '@mui/joy/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';

function GoBackButton() {
  const navigate = useNavigate();
  const isWide = useMediaQuery('(min-width: 840px)');

  return (
    <Button
      sx={{
        position: 'absolute',
        left: 16,
        top: 16,
        gap: 1,
      }}
      color="info"
      size="sm"
      variant="soft"
      onClick={() => {
        navigate('/');
      }}
    >
      <ArrowBackIcon />
      {isWide && 'Go Back'}
    </Button>
  );
}

export default GoBackButton;
