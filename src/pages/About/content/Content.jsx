import './content.scss';

import { FaBullhorn, FaCogs, FaEye, FaHandsHelping, FaIndustry, FaPhoneAlt } from 'react-icons/fa';

import Logo from '../../../assets/logo.png';

export function Content() {
  const mission =
    'Fornecer soluções em automação e instalações elétricas de alta qualidade, atendendo às necessidades de nossos clientes com excelência e eficiência.';
  const vision =
    'Ser reconhecida como líder no fornecimento de produtos e serviços nas áreas de automação e instalações elétricas, comprometida com inovação e sustentabilidade.';
  const values = ['Excelência no Atendimento', 'Inovação Contínua', 'Compromisso com a Sustentabilidade', 'Responsabilidade Social'];

  const areasOfActivity = [
    {
      icon: <FaIndustry size={40} />,
      title: 'Instalações Elétricas',
      description: 'Projetos de painéis elétricos (força/comando), montagem e reforma de painéis elétricos para obras civis e industriais.',
    },
    {
      icon: <FaCogs size={40} />,
      title: 'Automação Industrial',
      description:
        'Desenvolvimento de software operacional para PLC, adaptação de máquinas convencionais para sistemas programáveis, e projetos de dispositivos automáticos.',
    },
    {
      icon: <FaPhoneAlt size={40} />,
      title: 'Atendimento ao Cliente',
      description:
        'Garantindo a melhor relação custo-benefício, com uma equipe de profissionais altamente capacitados, sempre prontos para atender às suas necessidades.',
    },
  ];

  return (
    <div className="about-us">
      <section className="about-us-intro">
        <div className="about-us-intro-text">
          <h1>Quem Somos</h1>
          <p>
            A Mount Painel surge no mercado de quadros elétricos, instalação elétrica industrial, predial e automação industrial, com a
            proposta de oferecer produtos de alta qualidade, mão de obra especializada e todos os demais recursos envolvidos na sua área de
            atuação, para um desenvolvimento completo em sistema de pacote ou individuais.
          </p>
        </div>
        <div className="about-us-intro-logo">
          <img src={Logo} alt="Logo da Mount Painel" />
        </div>
      </section>

      <section className="our-mission">
        <h2>Missão, Visão e Valores</h2>
        <div className="card-container">
          <div className="card">
            <FaBullhorn size={40} className="card-icon" />
            <h3>Missão</h3>
            <p>{mission}</p>
          </div>
          <div className="card">
            <FaEye size={40} className="card-icon" />
            <h3>Visão</h3>
            <p>{vision}</p>
          </div>
          <div className="card">
            <FaHandsHelping size={40} className="card-icon" />
            <h3>Valores</h3>
            <ul>
              {values.map((value, index) => (
                <li key={index}>{value}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="areas-of-activity">
        <h2>Áreas de Atuação</h2>
        <div className="card-container">
          <div className="area">
            {areasOfActivity[0].icon}
            <h3>{areasOfActivity[0].title}</h3>
            <p>{areasOfActivity[0].description}</p>
          </div>
          <div className="area">
            {areasOfActivity[1].icon}
            <h3>{areasOfActivity[1].title}</h3>
            <p>{areasOfActivity[1].description}</p>
          </div>
          <div className="area">
            {areasOfActivity[2].icon}
            <h3>{areasOfActivity[2].title}</h3>
            <p>{areasOfActivity[2].description}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
