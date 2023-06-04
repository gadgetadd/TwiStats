import { useNavigate } from 'react-router-dom';
import BirdAnimation from '../components/BirdAnimation/BirdAnimation';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';

function Home() {
  const navigate = useNavigate();
  return (
    <>
      <BirdAnimation />
      <Typography
        level="h1"
        textColor="#373737"
        variant="plain"
        color="info"
        sx={{ mb: 4, fontFamily: 'Montserrat' }}
      >
        Welcome!
      </Typography>
      <Typography
        level="body1"
        variant="plain"
        color="neutral"
        sx={{ mb: 2, fontFamily: 'Montserrat' }}
      >
        To view popular Twitter users, please visit our &#34;Tweets&#34; page
      </Typography>
      <Button
        sx={{
          fontSize: 20,
          mb: 4,
        }}
        color="info"
        size="lg"
        variant="solid"
        onClick={() => {
          navigate('/tweets');
        }}
      >
        Tweets
      </Button>
    </>
  );
}
export default Home;
