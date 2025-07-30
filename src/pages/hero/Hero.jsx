import HeroOne from "./sections/heroOne/HeroOne";
import HeroTwo from "./sections/heroTwo/HeroTwo";
import "./hero.scss";

const Hero = () => {
  return (
    <>
      <section className="snap-section">
        <HeroOne />
      </section>
      <section className="snap-section">
        <HeroTwo />
      </section>
    </>
  );
};

export default Hero;
