import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import styles from './styles/Navbar.module.css';

const Navbar = () => {
  const clickedStyle = ({ isActive }) => ({
    color: isActive ? 'pink' : 'black',
  });
  return (
    <>
      <nav className={styles.nav}>
        <div>
          <h1>Math Magician</h1>
        </div>
        <div className={styles.navlink}>
          <NavLink style={clickedStyle} to="/">
            Home
          </NavLink>
          <NavLink style={clickedStyle} to="/calculator">
            Calculator
          </NavLink>
          <NavLink style={clickedStyle} to="/quote">
            Quote
          </NavLink>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
