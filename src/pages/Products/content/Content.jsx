import './content.scss';

import Slider from 'react-slick';

import Service00 from '../../../assets/images/service01.jpg';
import Service01 from '../../../assets/images/service02.jpg';
import Service02 from '../../../assets/images/service03.jpg';
import Service03 from '../../../assets/images/service04.jpg';
import Service04 from '../../../assets/images/service05.jpg';
import Service05 from '../../../assets/images/service06.jpg';
import Service06 from '../../../assets/images/service07.jpg';
import Service07 from '../../../assets/images/service08.jpg';
import Service08 from '../../../assets/images/service09.jpg';
import Service09 from '../../../assets/images/service10.jpg';
import Service10 from '../../../assets/images/service11.jpg';
import Service11 from '../../../assets/images/service12.jpg';

const products = [
  {
    id: 1,
    image: Service00,
    description: 'CAIXAS METALICAS DE MEDIÇÃO, DE BARRAMENTO DISTRIBIÇÃO E SECCIONAMENTO',
  },
  {
    id: 2,
    image: Service01,
    description: 'QUADRO DE DISTRIBUIÇÃO COMPACTO (QDC - 05, QDC - 10, QDC - 15, QDC - 21 - COMPACTO) PADRÃO ENEL / EDP BANDEIRANTES',
  },
  {
    id: 3,
    image: Service02,
    description: 'QUADRO DE DISTRIBUIÇÃO COMPACTO (QDC - 05, QDC - 10, QDC - 15, QDC - 21 - COMPACTO) PADRÃO ENEL / EDP BANDEIRANTES',
  },
  {
    id: 4,
    image: Service03,
    description: 'QUADRO DE DISTRIBUIÇÃO COMPACTO (QDC - 05, QDC - 10, QDC - 15, QDC - 21 - COMPACTO) PADRÃO ENEL / EDP BANDEIRANTES',
  },

  {
    id: 5,
    image: Service04,
    description: 'CAIXAS METALICAS DE MEDIÇÃO (MEC - II, MEC III, MEC IV, MEC VI, MEC IX, MEC XII, MEC XVI) PADRÃO ENEL / EDP BANDEIRANTES',
  },

  {
    id: 6,
    image: Service05,
    description: 'CAIXAS METALICAS DE MEDIÇÃO (CL - I, CL II, CL III) PADRÃO ENEL / EDP BANDEIRANTES',
  },

  {
    id: 7,
    image: Service06,
    description: 'QUADRO DE DISTRIBUIÇÃO DE EMBUTIR LINHA INDUSTRIAL',
  },

  {
    id: 8,
    image: Service07,
    description: 'QUADRO DE DISTRIBUIÇÃO DE EMBUTIR LINHA INDUSTRIAL',
  },

  {
    id: 9,
    image: Service08,
    description: 'QUADRO DE DISTRIBUIÇÃO DE EMBUTIR LINHA RESIDENCIAL',
  },

  {
    id: 10,
    image: Service09,
    description: 'QUADRO DE DISTRIBUIÇÃO DE EMBUTIR LINHA RESIDENCIAL',
  },

  {
    id: 11,
    image: Service10,
    description: 'PAINÉIS AUTOPORTANTE DE BAIXA TENSÃO',
  },

  {
    id: 12,
    image: Service11,
    description: 'QUADRO DE BOMBAS RECALQUE / PISCINA / ESGOTO / DRENAGEM',
  },
];

export function Content() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="products-page">
      <h1 className="products-title">Nossos Produtos</h1>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={`Produto ${product.id}`} className="product-image" />
            <p className="product-description">{product.description}</p>
            <a
              href="https://api.whatsapp.com/send/?phone=5511973040054&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-primary">Saiba mais</button>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
}
