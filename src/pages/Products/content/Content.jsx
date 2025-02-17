import './content.scss';

import Slider from 'react-slick';

import QuadroDistribuicao from '../../../assets/quadro-distribuicao.png';

const products = [
  {
    id: 1,
    image: QuadroDistribuicao,
    description: 'Quadro elétrico de alta performance',
  },
  {
    id: 2,
    image: QuadroDistribuicao,
    description: 'Sistema de distribuição de energia eficiente',
  },
  {
    id: 3,
    image: QuadroDistribuicao,
    description: 'Controle avançado para sistemas industriais',
  },
  {
    id: 4,
    image: QuadroDistribuicao,
    description: 'Proteção elétrica para ambientes exigentes',
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
            <img
              src={product.image}
              alt={`Produto ${product.id}`}
              className="product-image"
            />
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
