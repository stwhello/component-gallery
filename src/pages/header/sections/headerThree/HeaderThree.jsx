import './headerThree.scss';
import { NavLink } from 'react-router-dom';
import { FaMagic } from 'react-icons/fa';

const HeaderThree = () => {
  return (
    <header className="headerThree">
      <div className="logo-burst">
        <FaMagic className="icon" />
        <span>UI Playground 🎨</span>
      </div>

      <nav className="nav-pops">
        <NavLink to="/header">Header</NavLink>
        <NavLink to="/hero">Hero</NavLink>
        <NavLink to="/subhero">SubHero</NavLink>
        <NavLink to="/carousel">Carousel</NavLink>
        <NavLink to="/slider">Slider</NavLink>
        <NavLink to="/footer">Footer</NavLink>
      </nav>

      <button className="launch-btn">Launch Playground 🚀</button>
    </header>
  );
};

export default HeaderThree;
