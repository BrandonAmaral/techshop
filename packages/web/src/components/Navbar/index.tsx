import React, { useCallback } from 'react';
import { NavLink } from 'react-router-dom';

import { Container, Nav } from './styles';
import logo from '../../assets/logo.png';
import { useAuth } from '../../hooks/auth';

const Sidebar: React.FC = () => {
  const { user } = useAuth();
  const { logout } = useAuth();

  const logoutFunction = useCallback(() => {
    logout();
  }, [logout]);

  return (
    <Container>
      <NavLink to="/">
        <img src={logo} alt="logo" />
        <span>E-COMMERCE</span>
      </NavLink>
      <Nav>
        <NavLink to="/cart">Cart</NavLink>
        {user ? (
          <NavLink to="/" onClick={logoutFunction}>
            Logout
          </NavLink>
        ) : (
          <NavLink to="/login">Sign In</NavLink>
        )}
      </Nav>
    </Container>
  );
};

export default Sidebar;
