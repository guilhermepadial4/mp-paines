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
      <Link to="/">
        <img src={Logo} alt="Logo da Empresa MP Painéis" />
      </Link>

      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li>
            <Link to="/" className={currentPath === '/' ? 'active' : ''} onClick={() => setMenuOpen(false)}>
              Início
            </Link>
          </li>
          <li>
            <Link to="/produtos" className={currentPath === '/produtos' ? 'active' : ''} onClick={() => setMenuOpen(false)}>
              Produtos
            </Link>
          </li>
          <li>
            <Link to="/sobre" className={currentPath === '/sobre' ? 'active' : ''} onClick={() => setMenuOpen(false)}>
              Sobre nós
            </Link>
          </li>
          <li>
            <Link to="/contato" className={currentPath === '/contato' ? 'active' : ''} onClick={() => setMenuOpen(false)}>
              Contato
            </Link>
          </li>
        </ul>
        <a
          href="https://api.whatsapp.com/send/?phone=5511973040054&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="contact-button">Fale Conosco</button>
        </a>
      </nav>

      <button className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>
    </header>
  );
}
