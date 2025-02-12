import './Header.scss';

import { Link, useLocation } from 'react-router-dom';

import Logo from '../../assets/logo.png';

export function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <header className="header">
      <img src={Logo} alt="Logo da Empresa MP Painés" />
      <nav className="nav">
        <ul className="nav-links">
          <li>
            <Link
              to="/"
              className={currentPath === '/' ? 'active' : ''}
            >
              Início
            </Link>
          </li>
          <li>
            <Link
              to="/produtos"
              className={currentPath === '/produtos' ? 'active' : ''}
            >
              Produtos
            </Link>
          </li>
          <li>
            <Link
              to="/servicos"
              className={currentPath === '/servicos' ? 'active' : ''}
            >
              Serviços
            </Link>
          </li>
          <li>
            <Link
              to="/contato"
              className={currentPath === '/contato' ? 'active' : ''}
            >
              Contato
            </Link>
          </li>
        </ul>
        <button className="contact-button">Fale Conosco</button>
      </nav>
    </header>
  );
}
