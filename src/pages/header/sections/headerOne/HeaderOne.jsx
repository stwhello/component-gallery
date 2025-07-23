import './headerOne.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="main-header">
      <div className="logo">Component Gallery</div>
      <nav className="nav-links">
        <NavLink to="/header" activeclassname="active">Header</NavLink>
        <NavLink to="/hero" activeclassname="active">Hero</NavLink>
        <NavLink to="/subhero" activeclassname="active">SubHero</NavLink>
        <NavLink to="/carousel" activeclassname="active">Carousel</NavLink>
        <NavLink to="/slider" activeclassname="active">Slider</NavLink>
        <NavLink to="/footer" activeclassname="active">Footer</NavLink>
      </nav>
    </header>
  );
};

export default Header;
