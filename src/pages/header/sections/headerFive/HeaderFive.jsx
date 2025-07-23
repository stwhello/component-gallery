import './headerFive.scss';
import { NavLink } from 'react-router-dom';

const HeaderFive = () => {
  return (
    <header className="headerFive">
      <div className="brand">
        <h1>Elegance</h1>
        <p>Design. Inspire. Delight.</p>
      </div>
      <nav className="nav">
        <NavLink to="/header">Header</NavLink>
        <NavLink to="/hero">Hero</NavLink>
        <NavLink to="/subhero">SubHero</NavLink>
        <NavLink to="/carousel">Carousel</NavLink>
        <NavLink to="/slider">Slider</NavLink>
        <NavLink to="/footer">Footer</NavLink>
      </nav>
    </header>
  );
};

export default HeaderFive;
