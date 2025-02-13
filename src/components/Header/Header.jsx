import './Header.scss';

import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';

import Logo from '../../assets/logo.png';

export function Header() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <img src={Logo} alt="Logo da Empresa MP Painéis" />

      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li>
            <Link
              to="/"
              className={currentPath === '/' ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              Início
            </Link>
          </li>
          <li>
            <Link
              to="/produtos"
              className={currentPath === '/produtos' ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              Produtos
            </Link>
          </li>
          <li>
            <Link
              to="/servicos"
              className={currentPath === '/servicos' ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              Serviços
            </Link>
          </li>
          <li>
            <Link
              to="/contato"
              className={currentPath === '/contato' ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              Contato
            </Link>
          </li>
        </ul>
        <button className="contact-button">Fale Conosco</button>
      </nav>

      <button className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>
    </header>
  );
}
