import './location.scss';

export function Location() {
  return (
    <section className="location">
      <div className="location-content">
        <h3 className="location-title">Nossa Localização</h3>
        <p className="location-description">
          Estamos estrategicamente localizados para melhor atender você. Visite-nos ou entre em contato para saber mais sobre nossos
          serviços e produtos.
        </p>

        <div className="location-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3660.1068232676944!2d-46.470043325378164!3d-23.456610957750897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce61d9f0fc7227%3A0x5bfc7613d41b955f!2sRua%20Vargas%2C%20108%20-%20Cumbica%2C%20Guarulhos%20-%20SP%2C%2007231-300!5e0!3m2!1spt-BR!2sbr!4v1739464882043!5m2!1spt-BR!2sbr"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa da Localização"
          ></iframe>
        </div>

        <div className="location-info">
          <h4>Endereço</h4>
          <p>Rua Vargas, 108 - Cumbica, Guarulhos, SP</p>
          <p>CEP: 07231-300</p>

          <h4>Contato</h4>
          <p>Telefone: (11) 2726-0281</p>
          <p>Email: vendas@mppaineis.com.br</p>

          <a
            href="https://www.google.com/maps/place/Rua+Vargas,+108+-+Cumbica,+Guarulhos+-+SP,+07231-300/@-23.456611,-46.4700433,17z/data=!3m1!4b1!4m6!3m5!1s0x94ce61d9f0fc7227:0x5bfc7613d41b955f!8m2!3d-23.4566159!4d-46.4674684!16s%2Fg%2F11c151brfb?entry=ttu&g_ep=EgoyMDI1MDIxMC4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-directions"
          >
            Como Chegar
          </a>
        </div>
      </div>
    </section>
  );
}
