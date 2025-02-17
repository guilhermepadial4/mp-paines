import './productcarousel.scss';

import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import Service00 from '../../../../assets/service00.png';
import Service01 from '../../../../assets/service01.png';
import Service02 from '../../../../assets/service02.png';
import Service03 from '../../../../assets/service03.png';

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
            <p className="product-description">{product.description}</p>
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
