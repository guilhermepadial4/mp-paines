import './Footer.scss';

import { FaWhatsapp } from 'react-icons/fa';
import { FiArrowUp, FiFacebook, FiInstagram, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.png';
import SecureSite from '../../assets/secure-site.png';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section atendimento">
          <h3>Atendimento</h3>
          <p>Seg a Sex: 08:00 - 18:00</p>
          <ul>
            <li>
              <a href="#">
                <FiPhone size={20} /> (11) 2726-0281
              </a>
            </li>
            <li>
              <a href="#">
                <FiPhone size={20} /> (11) 2726-0215
              </a>
            </li>
            <li>
              <a href="#">
                <FaWhatsapp size={20} /> (11) 2722-4916
              </a>
            </li>
            <li>
              <a href="#">
                <FiMail size={20} /> vendas@mppaineis.com.br
              </a>
            </li>
            <li>
              <a href="#">
                <FiMapPin size={20} /> Rua Vargas, 108 - Cumbica, Guarulhos, SP
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section redes-sociais">
          <h3>Siga-nos</h3>
          <ul>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FiInstagram size={25} />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FiFacebook size={25} />
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section logo-politica">
          <img src={Logo} alt="Logo da Empresa MP Painéis" />
          <Link to="/politica-de-privacidade">Política de Privacidade</Link>
          <img className="secure-site" src={SecureSite} alt="Selo de Site Seguro" />
        </div>
      </div>

      <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} MP Painéis. Todos os direitos reservados. By RastaIT</p>
      </div>

      <button className="arrow-up" onClick={scrollToTop} aria-label="Voltar ao topo">
        <FiArrowUp size={30} />
      </button>
    </footer>
  );
}
