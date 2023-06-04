import { useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  Container,
  Footer,
  Header,
  Main,
  Title,
  About,
} from './SharedLayout.styled';
import GoBackButton from '../GoBackButton/GoBackButton';

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
          <Suspense fallback={<div>Loading page...</div>}>
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
