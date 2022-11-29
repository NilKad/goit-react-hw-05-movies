import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding: 20px;
  border-bottom: 2px solid grey;
`;

export const Main = styled.main`
  display: block;
  margin-top: 15px;
`;

export const NavMenuLink = styled(NavLink)`
  margin-right: 15px;

  &.active {
    color: red;
  }
`;
