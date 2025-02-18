import React, { useState } from 'react';
import { Navbar, NavList, NavItem, NavLink, NavOutline } from '../style/styles';
import { FaHome, FaTachometerAlt, FaSignInAlt } from 'react-icons/fa';

function NavBar({ setActiveView }) {
  const [active, setActive] = useState('home');

  const handleNavClick = (newActive) => {
    setActive(newActive);
    setActiveView(newActive);
  };

  const navItems = [
    { name: 'home', icon: <FaHome style={{ marginRight: '8px' }} />, label: 'Home' },
    { name: 'dashboard', icon: <FaTachometerAlt style={{ marginRight: '8px' }} />, label: 'Dashboard' },
    { name: 'login', icon: <FaSignInAlt style={{ marginRight: '8px' }} />, label: 'Login' },
  ];

  const middleIndex = Math.floor(navItems.length / 2);
  const activeIndex = navItems.findIndex(item => item.name === active);
  const reorderedNavItems = [...navItems];

  if (activeIndex !== middleIndex) {
    const [activeItem] = reorderedNavItems.splice(activeIndex, 1);
    reorderedNavItems.splice(middleIndex, 0, activeItem);
  }

  return (
    <Navbar>
      <NavOutline>
        <NavList>
          {reorderedNavItems.map((item, index) => (
            <NavItem key={item.name} className={active === item.name ? 'active' : ''}>
              <NavLink
                href="#"
                className={active === item.name ? 'active' : ''}
                onClick={() => handleNavClick(item.name)}
              >
                {item.icon}
                {item.label}
              </NavLink>
            </NavItem>
          ))}
        </NavList>
      </NavOutline>
    </Navbar>
  );
}

export default NavBar;