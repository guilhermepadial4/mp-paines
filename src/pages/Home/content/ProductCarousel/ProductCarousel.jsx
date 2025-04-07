import './productcarousel.scss';

import { Link } from 'react-router-dom';
import Slider from 'react-slick';

import Service01 from '../../../../assets/images/service01.jpg';
import Service02 from '../../../../assets/images/service04.jpg';
import Service03 from '../../../../assets/images/service05.jpg';
import Service04 from '../../../../assets/images/service06.jpg';

const products = [
  {
    id: 1,
    image: Service01,
    description: 'CAIXAS METALICAS DE MEDIÇÃO, DE BARRAMENTO DISTRIBIÇÃO E SECCIONAMENTO',
  },
  {
    id: 2,
    image: Service02,
    description: 'CAIXAS METALICAS DE MEDIÇÃO (MEC - II, MEC III, MEC IV, MEC VI, MEC IX, MEC XII, MEC XVI) PADRÃO ENEL / EDP BANDEIRANTES',
  },
  {
    id: 3,
    image: Service03,
    description: 'CAIXAS METALICAS DE MEDIÇÃO (CL - I, CL II, CL III) PADRÃO ENEL / EDP BANDEIRANTES',
  },
  {
    id: 4,
    image: Service04,
    description: 'QUADRO DE DISTRIBUIÇÃO DE EMBUTIR LINHA INDUSTRIAL',
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
