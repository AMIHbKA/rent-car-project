import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Container } from 'UI/Container';
import { Header, NavList } from './LayoutStyled';

export const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <nav>
            <NavList>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/catalog">Catalog</NavLink>
              </li>
              <li>
                <NavLink to="/favorites">Favorites</NavLink>
              </li>
            </NavList>
          </nav>
        </Container>
      </Header>
      <main>
        <Container>
          <Suspense>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </>
  );
};
