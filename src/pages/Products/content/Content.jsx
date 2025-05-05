import './content.scss';

import { Link } from 'react-router-dom';
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
    name: 'CAIXA METÁLICA DE MEDIÇÃO',
  },
  {
    id: 2,
    image: Service01,
    name: 'QUADRO DE DISTRIBUIÇÃO COMPACTO',
  },
  {
    id: 3,
    image: Service02,
    name: 'QUADRO DE DISTRIBUIÇÃO COMPACTO',
  },
  {
    id: 4,
    image: Service03,
    name: 'QUADRO DE DISTRIBUIÇÃO COMPACTO',
  },

  {
    id: 5,
    image: Service04,
    name: 'CAIXAS METALICAS DE MEDIÇÃO',
  },

  {
    id: 6,
    image: Service05,
    name: 'CAIXAS METALICAS DE MEDIÇÃO',
  },

  {
    id: 7,
    image: Service06,
    name: 'QUADRO DE DISTRIBUIÇÃO',
  },

  {
    id: 8,
    image: Service07,
    name: 'QUADRO DE DISTRIBUIÇÃO',
  },

  {
    id: 9,
    image: Service08,
    name: 'QUADRO DE DISTRIBUIÇÃO',
  },

  {
    id: 10,
    image: Service09,
    name: 'QUADRO DE DISTRIBUIÇÃO',
  },

  {
    id: 11,
    image: Service10,
    name: 'PAINÉIS AUTOPORTANTE',
  },

  {
    id: 12,
    image: Service11,
    name: 'QUADRO DE BOMBAS RECALQUE',
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
            <p className="product-description">{product.name}</p>
            <a
              href="https://api.whatsapp.com/send/?phone=5511973040054&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Link to={`/produtos/${product.id}`}>
                <button className="btn btn-primary">Saiba mais</button>
              </Link>
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
}