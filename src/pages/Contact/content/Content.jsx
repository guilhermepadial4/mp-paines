import './content.scss';

import { FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

export function Content() {
  return (
    <section className="contact-page">
      <h1>Fale Conosco</h1>
      <p>Entre em contato conosco, temos uma equipe especializada para melhor atendê-lo.</p>

      <div className="contact-buttons">
        <a href="https://www.google.com/maps?q=ENDERECO_DA_EMPRESA" target="_blank" rel="noopener noreferrer" className="contact-button">
          <FaMapMarkerAlt />
          <div>
            <span>Endereço</span>
            <p>Rua Vargas, 108 - Cumbica, Guarulhos, SP</p>
          </div>
        </a>

        <a href="mailto:vendas@mppaineis.com.br" className="contact-button">
          <FaEnvelope />
          <div>
            <span>E-mail</span>
            <p>vendas@mppaineis.com.br</p>
          </div>
        </a>

        <a
          href="https://api.whatsapp.com/send/?phone=5511973040054&text&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-button"
        >
          <FaWhatsapp />
          <div>
            <span>WhatsApp</span>
            <p>Entre em contato</p>
          </div>
        </a>
      </div>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.1068232676944!2d-46.470043325378164!3d-23.456610957750897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce61d9f0fc7227%3A0x5bfc7613d41b955f!2sRua%20Vargas%2C%20108%20-%20Cumbica%2C%20Guarulhos%20-%20SP%2C%2007231-300!5e0!3m2!1spt-BR!2sbr!4v1739464882043!5m2!1spt-BR!2sbr"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização da Empresa"
        ></iframe>
      </div>
    </section>
  );
}
