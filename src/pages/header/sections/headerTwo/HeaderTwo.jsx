import './headerTwo.scss';
import { NavLink } from 'react-router-dom';
import { FaReact } from 'react-icons/fa';

const HeaderTwo = () => {
  return (
    <header className="headerTwo">
      <div className="logo-area">
        <FaReact className="logo-icon" />
        <span>Component Gallery</span>
      </div>

      <nav className="nav-links">
        <NavLink to="/header">Header</NavLink>
        <NavLink to="/hero">Hero</NavLink>
        <NavLink to="/subhero">SubHero</NavLink>
        <NavLink to="/carousel">Carousel</NavLink>
        <NavLink to="/slider">Slider</NavLink>
        <NavLink to="/footer">Footer</NavLink>
      </nav>

      <button className="cta-btn">Get in Touch</button>
    </header>
  );
};

export default HeaderTwo;
