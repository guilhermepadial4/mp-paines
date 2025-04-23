import './productcarousel.scss';

import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import Service01 from '../../../../assets/images/service01.jpg';
import Service05 from '../../../../assets/images/service05.jpg';
import Service06 from '../../../../assets/images/service06.jpg';
import Service10 from '../../../../assets/images/service10.jpg';

const products = [
  {
    id: 1,
    image: Service01,
    name: 'QUADRO DE DISTRIBUIÇÃO COMPACTO',
  },
  {
    id: 2,
    image: Service05,
    name: 'CAIXAS METALICAS DE MEDIÇÃO',
  },
  {
    id: 3,
    image: Service06,
    name: 'QUADRO DE DISTRIBUIÇÃO',
  },
  {
    id: 4,
    image: Service10,
    name: 'PAINÉIS AUTOPORTANTE',
  },
];

const ProductCarousel = () => {
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
    <div className="products-carousel">
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={`Produto ${product.id}`} className="product-image" />
            <p className="product-description">{product.name}</p>
            <Link to="/produtos">
              <button className="btn btn-primary">Conhecer</button>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
