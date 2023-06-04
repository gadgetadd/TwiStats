import { Suspense } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import GoBackButton from '../GoBackButton/GoBackButton';
import Backdrop from '../Backdrop/Backdrop';
import {
  Container,
  Footer,
  Header,
  Main,
  Title,
  About,
} from './SharedLayout.styled';

function SharedLayout() {
  const location = useLocation();
  const isTweetPage = location.pathname === '/tweets';

  return (
    <>
      <Header>
        <Container>
          {isTweetPage && <GoBackButton />}
          <Title>{isTweetPage ? 'Trending Tweets' : 'TwiStats'}</Title>
        </Container>
      </Header>
      <Main>
        <Container>
          <Suspense fallback={<Backdrop />}>
            <Outlet />
          </Suspense>
        </Container>
      </Main>
      <Footer>
        <Container>
          <About>Made in GoIT, 2023</About>
        </Container>
      </Footer>
    </>
  );
}

export default SharedLayout;
