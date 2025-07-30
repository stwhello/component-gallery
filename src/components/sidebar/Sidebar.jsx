import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  FaHome, FaImage, FaSlidersH,
  FaLayerGroup, FaHeading, FaRegWindowMaximize
} from 'react-icons/fa';
import './sidebar.scss';

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { path: '/header', label: 'Header', icon: <FaHeading /> },
    { path: '/hero', label: 'Hero', icon: <FaHome /> },
    { path: '/subhero', label: 'SubHero', icon: <FaRegWindowMaximize /> },
    { path: '/carousel', label: 'Carousel', icon: <FaImage /> },
    { path: '/slider', label: 'Slider', icon: <FaSlidersH /> },
    { path: '/footer', label: 'Footer', icon: <FaLayerGroup /> },
  ];

  return (
    <div className="sidebar">
      <div className="top-section">
        <div className="logo">Component Gallery</div>
      </div>
      <nav className="nav-links">
        {navItems.map(({ path, label, icon }) => (
          <NavLink to={path} key={path} className="nav-link">
            <div className="icon">{icon}</div>
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
