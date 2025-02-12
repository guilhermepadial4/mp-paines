import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Contact } from './pages/Contact/Contact';
import { Home } from './pages/Home/Home';
import { Products } from './pages/Products/Products';
import { Services } from './pages/Services/Services';

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Products />} />
        <Route path="/servicos" element={<Services />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
    </Router>
  );
}
