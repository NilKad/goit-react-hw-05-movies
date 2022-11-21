import { NavLink, Outlet } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <main>
        <container>
          <Outlet />
        </container>
      </main>
    </>
  );
};
