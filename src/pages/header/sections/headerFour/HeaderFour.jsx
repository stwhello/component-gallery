import './headerFour.scss';
import { NavLink } from 'react-router-dom';

const HeaderFour = () => {
  return (
    <header className="headerFour">
      <div className="glitch-logo" data-text="NEXUS">NEXUS</div>
      
      <nav className="holo-nav">
        <NavLink to="/header">Header</NavLink>
        <NavLink to="/hero">Hero</NavLink>
        <NavLink to="/subhero">SubHero</NavLink>
        <NavLink to="/carousel">Carousel</NavLink>
        <NavLink to="/slider">Slider</NavLink>
        <NavLink to="/footer">Footer</NavLink>
      </nav>

      <div className="pulse-dot"></div>
    </header>
  );
};

export default HeaderFour;
