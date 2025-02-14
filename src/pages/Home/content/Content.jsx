import './content.scss';

import { FaRegArrowAltCircleRight } from 'react-icons/fa';

import Banner from '../../../assets/mp-banner.png';
import PeopleContent from '../../../assets/people-content.png';
import { Location } from './Location/Location';
import ProductCarousel from './ProductCarousel/ProductCarousel';

export function Content() {
  return (
    <div className="content">
      <img src={Banner} alt="Banner" className="banner" />
      <h2 className="title">Qualidade máxima em produtos e serviços.</h2>
      <p className="subtitle">A mais alta tecnologia em quadros elétricos.</p>

      <ProductCarousel />

      <button className="btn-line">
        Conheça nossa linha completa de produtos <FaRegArrowAltCircleRight />
      </button>

      <section className="about-company">
        <div className="about-image">
          <img src={PeopleContent} alt="MP Painéis Elétricos" />
        </div>
        <div className="about-text">
          <h3>Soluções em Elétrica</h3>
          <p>
            A MP Painéis Elétricos atua no desenvolvimento de projetos elétricos para painéis de força e comando, garantindo eficiência e
            segurança para diversos tipos de equipamentos e edificações. Oferecemos soluções para prédios residenciais e comerciais, sempre
            seguindo as normas técnicas e boas práticas do setor. Além disso, realizamos montagem e reforma de painéis elétricos,
            proporcionando modernização e otimização de sistemas elétricos.
          </p>
          <h4>Automação Industrial e Comercial</h4>
          <p>
            Somos especialistas em automação, desenvolvendo projetos elétricos para dispositivos automáticos que otimizam processos e
            aumentam a produtividade. Criamos softwares operacionais completos para controle e monitoramento, além de adaptar máquinas
            convencionais para sistemas programáveis, trazendo mais eficiência e tecnologia para sua operação.
          </p>
          <p>
            Com a MP Painéis Elétricos, você tem soluções completas e personalizadas para atender às suas necessidades elétricas e de
            automação.
          </p>
        </div>
      </section>

      <Location />
    </div>
  );
}
