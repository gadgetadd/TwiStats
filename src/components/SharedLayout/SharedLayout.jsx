// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

function SharedLayout() {
  return (
    <>
      <header>
        <div>
          <nav>
            <NavLink to={'/'}>Home </NavLink>
            <NavLink to={'tweets'}>Tweets </NavLink>
          </nav>
        </div>
      </header>
      <div>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
}

export default SharedLayout;
