import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Main, NavMenuLink } from './SharedLayout.module';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <nav>
          <NavMenuLink to="/">Home</NavMenuLink>
          <NavMenuLink to="/movies">Movies</NavMenuLink>
        </nav>
      </Header>
      <Main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};

export default SharedLayout;
