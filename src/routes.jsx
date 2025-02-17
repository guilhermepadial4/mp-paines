import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { About } from './pages/About/About';
import { Contact } from './pages/Contact/Contact';
import { Home } from './pages/Home/Home';
import { Products } from './pages/Products/Products';
import { ScrollToTop } from './utils/ScrollToTop';

export function AppRoutes() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Products />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
    </Router>
  );
}
