import './content.scss';

import Banner from '../../../assets/mp-banner.png';
import ProductCarousel from './ProductCarousel/ProductCarousel';

export function Content() {
  return (
    <div className="content">
      <img src={Banner} alt="Banner" className="banner" />
      <h2 className="title">Qualidade máxima em produtos e serviços.</h2>
      <p className="subtitle">A mais alta tecnologia em quadros elétricos.</p>

      <ProductCarousel />
      
      <button className="btn-line">Conheça nossa linha completa de produtos</button>
    </div>
  );
}
