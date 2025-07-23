import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  FaBars, FaHome, FaImage, FaSlidersH,
  FaLayerGroup, FaHeading, FaRegWindowMaximize
} from 'react-icons/fa';
import './sidebar.scss';

const Sidebar = ({ collapsed, setCollapsed }) => {
  const location = useLocation();

  const navItems = [
    { path: '/header', label: 'Header', icon: <FaHeading /> },
    { path: '/hero', label: 'Hero', icon: <FaHome /> },
    { path: '/subhero', label: 'SubHero', icon: <FaRegWindowMaximize /> },
    { path: '/carousel', label: 'Carousel', icon: <FaImage /> },
    { path: '/slider', label: 'Slider', icon: <FaSlidersH /> },
    { path: '/footer', label: 'Footer', icon: <FaLayerGroup /> },
  ];

  // Collapse sidebar when route changes
  React.useEffect(() => {
    setCollapsed(true);
  }, [location.pathname, setCollapsed]);

  const toggleSidebar = () => setCollapsed(prev => !prev);

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="top-section">
        <div className="logo">{!collapsed && 'Component Gallery'}</div>
        <div className="toggle-btn" onClick={toggleSidebar}>
          <FaBars />
        </div>
      </div>
      <nav className="nav-links">
        {navItems.map(({ path, label, icon }) => (
          <NavLink to={path} key={path} className="nav-link">
            <div className="icon">{icon}</div>
            {!collapsed && <span>{label}</span>}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
