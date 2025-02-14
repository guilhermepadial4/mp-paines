import './productcarousel.scss';

import Slider from 'react-slick';

import QuadroDistruibuicao from '../../../../assets/quadro-distribuicao.png';

const products = [
  {
    id: 1,
    image: QuadroDistruibuicao, 
    description: 'Quadro elétrico de alta performance',
  },
  {
    id: 2,
    image: QuadroDistruibuicao,
    description: 'Sistema de distribuição de energia eficiente',
  },
  {
    id: 3,
    image: QuadroDistruibuicao,
    description: 'Controle avançado para sistemas industriais',
  },
  {
    id: 4,
    image: QuadroDistruibuicao,
    description: 'Proteção elétrica para ambientes exigentes',
  },
];

const ProductCarousel = () => {
  const settings = {
    dots: true,
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
    <div className="products-carousel">
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={`Produto ${product.id}`} className="product-image" />
            <p className="product-description">{product.description}</p>
            <button className="btn btn-primary">Conhecer</button>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
