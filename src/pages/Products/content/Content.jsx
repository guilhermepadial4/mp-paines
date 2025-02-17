import './content.scss';

import Slider from 'react-slick';

import Service00 from '../../../assets/service00.png';
import Service01 from '../../../assets/service01.png';
import Service02 from '../../../assets/service02.png';
import Service03 from '../../../assets/service03.png';
import Service04 from '../../../assets/service04.png';
import Service05 from '../../../assets/service05.png';
import Service06 from '../../../assets/service06.png';
import Service07 from '../../../assets/service07.png';
import Service08 from '../../../assets/service08.png';
import Service09 from '../../../assets/service09.png';
import Service10 from '../../../assets/service10.png';
import Service11 from '../../../assets/service11.png';
import Service12 from '../../../assets/service12.png';
import Service13 from '../../../assets/service13.png';
import Service14 from '../../../assets/service14.png';
import Service15 from '../../../assets/service15.png';
import Service16 from '../../../assets/service16.png';
import Service17 from '../../../assets/service17.png';
import Service18 from '../../../assets/service18.png';

const products = [
  {
    id: 1,
    image: Service00,
    description: 'Descrição produto',
  },
  {
    id: 2,
    image: Service01,
    description: 'Descrição produto',
  },
  {
    id: 3,
    image: Service02,
    description: 'Descrição produto',
  },
  {
    id: 4,
    image: Service03,
    description: 'Descrição produto',
  },

  {
    id: 5,
    image: Service04,
    description: 'Descrição produto',
  },

  {
    id: 6,
    image: Service05,
    description: 'Descrição produto',
  },

  {
    id: 7,
    image: Service06,
    description: 'Descrição produto',
  },

  {
    id: 8,
    image: Service07,
    description: 'Descrição produto',
  },

  {
    id: 9,
    image: Service08,
    description: 'Descrição produto',
  },

  {
    id: 10,
    image: Service09,
    description: 'Descrição produto',
  },

  {
    id: 11,
    image: Service10,
    description: 'Descrição produto',
  },

  {
    id: 12,
    image: Service11,
    description: 'Descrição produto',
  },

  {
    id: 13,
    image: Service12,
    description: 'Descrição produto',
  },

  {
    id: 14,
    image: Service13,
    description: 'Descrição produto',
  },

  {
    id: 15,
    image: Service14,
    description: 'Descrição produto',
  },

  {
    id: 16,
    image: Service15,
    description: 'Descrição produto',
  },

  {
    id: 17,
    image: Service16,
    description: 'Descrição produto',
  },

  {
    id: 18,
    image: Service17,
    description: 'Descrição produto',
  },

  {
    id: 19,
    image: Service18,
    description: 'Descrição produto',
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
