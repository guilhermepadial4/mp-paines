import './Footer.scss';

import { FaWhatsapp } from 'react-icons/fa';
import { FiArrowUp, FiFacebook, FiInstagram, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.png';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section atendimento">
          <h3>Atendimento</h3>
          <p>Segunda a Sexta: 08:00 - 18:00</p>
          <ul>
            <li>
              <a href="#">
                <FiPhone size={20} /> (11) 1234-5678
              </a>
            </li>
            <li>
              <a href="#">
                <FaWhatsapp size={20} /> (11) 98765-4321
              </a>
            </li>
            <li>
              <a href="#">
                <FiMail size={20} /> contato@mppaineis.com.br
              </a>
            </li>
            <li>
              <a href="#">
                <FiMapPin size={20} /> Rua Exemplo, 123 - São Paulo, SP
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section redes-sociais">
          <h3>Siga-nos</h3>
          <ul>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FiInstagram size={20} />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FiFacebook size={20} />
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section logo-politica">
          <img src={Logo} alt="Logo da Empresa MP Painéis" />
          <Link to="/politica-de-privacidade">Política de Privacidade</Link>
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
