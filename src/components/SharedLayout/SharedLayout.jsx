import { NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Footer, Header } from './SharedLayout.styled';

function SharedLayout() {
  return (
    <>
      <Header>
        <Container>
          <nav>
            <NavLink to={'/'}>Home </NavLink>
            <NavLink to={'tweets'}>Tweets </NavLink>
          </nav>
        </Container>
      </Header>
      <main>
        <Container>
          <Suspense fallback={<div>Loading page...</div>}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
      <Footer></Footer>
    </>
  );
}

export default SharedLayout;
