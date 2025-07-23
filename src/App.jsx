import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from './components/sidebar/Sidebar';

import Header from './pages/header/Header';
import Hero from './pages/hero/Hero';
import SubHero from './pages/subHero/SubHero';
import Carousel from './pages/carousel/Carousel';
import Slider from './pages/slider/Slider';
import Footer from './pages/footer/Footer';

function App() {
  const [collapsed, setCollapsed] = useState(false);

  const sidebarWidth = collapsed ? '5vw' : '18vw';
  const contentWidth = collapsed ? '95vw' : '82vw';

  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        <div style={{ marginLeft: sidebarWidth, padding: '2vh 2vw', width: contentWidth }}>
          <Routes>
            <Route path="/" element={<Navigate to="/header" replace />} />
            <Route path="/header" element={<Header />} />
            <Route path="/hero" element={<Hero />} />
            <Route path="/subhero" element={<SubHero />} />
            <Route path="/carousel" element={<Carousel />} />
            <Route path="/slider" element={<Slider />} />
            <Route path="/footer" element={<Footer />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
