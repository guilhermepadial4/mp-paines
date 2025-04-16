import './productdetails.scss';

import { FaWhatsapp } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';

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
import { Footer } from '../../../components/Footer/Footer';
import { Header } from '../../../components/Header/Header';

const products = [
  {
    id: 1,
    image: Service00,
    name: 'Caixa Metálica de Medição',
    description: 'CAIXAS METÁLICAS DE MEDIÇÃO, DE BARRAMENTO, DISTRIBUIÇÃO E SECCIONAMENTO',
  },
  {
    id: 2,
    image: Service01,
    name: 'Quadro de Distribuição Compacto',
    description: 'QUADRO DE DISTRIBUIÇÃO COMPACTO (QDC - 05, QDC - 10, QDC - 15, QDC - 21 - COMPACTO) PADRÃO ENEL / EDP BANDEIRANTES',
  },
  {
    id: 3,
    image: Service02,
    name: 'Quadro de Distribuição Compacto',
    description: 'QUADRO DE DISTRIBUIÇÃO COMPACTO (QDC - 05, QDC - 10, QDC - 15, QDC - 21 - COMPACTO) PADRÃO ENEL / EDP BANDEIRANTES',
  },
  {
    id: 4,
    image: Service03,
    name: 'Quadro de Distribuição Compacto',
    description: 'QUADRO DE DISTRIBUIÇÃO COMPACTO (QDC - 05, QDC - 10, QDC - 15, QDC - 21 - COMPACTO) PADRÃO ENEL / EDP BANDEIRANTES',
  },

  {
    id: 5,
    image: Service04,
    name: 'Caixas Metálicas de Medição',
    description: 'CAIXAS METALICAS DE MEDIÇÃO (MEC - II, MEC III, MEC IV, MEC VI, MEC IX, MEC XII, MEC XVI) PADRÃO ENEL / EDP BANDEIRANTES',
  },

  {
    id: 6,
    image: Service05,
    name: 'Caixas Metálicas de Medição',
    description: 'CAIXAS METALICAS DE MEDIÇÃO (CL - I, CL II, CL III) PADRÃO ENEL / EDP BANDEIRANTES',
  },

  {
    id: 7,
    image: Service06,
    name: 'Quadro de Distribuição',
    description: 'QUADRO DE DISTRIBUIÇÃO DE EMBUTIR LINHA INDUSTRIAL',
  },

  {
    id: 8,
    image: Service07,
    name: 'Quadro de Distribuição',
    description: 'QUADRO DE DISTRIBUIÇÃO DE EMBUTIR LINHA INDUSTRIAL',
  },

  {
    id: 9,
    image: Service08,
    name: 'Quadro de Distribuição',
    description: 'QUADRO DE DISTRIBUIÇÃO DE EMBUTIR LINHA RESIDENCIAL',
  },

  {
    id: 10,
    image: Service09,
    name: 'Quadro de Distribuição',
    description: 'QUADRO DE DISTRIBUIÇÃO DE EMBUTIR LINHA RESIDENCIAL',
  },

  {
    id: 11,
    image: Service10,
    name: 'Painéis Autoportante',
    description: 'PAINÉIS AUTOPORTANTE DE BAIXA TENSÃO',
  },

  {
    id: 12,
    image: Service11,
    name: 'Quadro de Bombas Recalque',
    description: 'QUADRO DE BOMBAS RECALQUE / PISCINA / ESGOTO / DRENAGEM',
  },
];

export function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div className="produto-nao-encontrado">Produto não encontrado.</div>;
  }

  return (
    <div>
      <Header />
      <section className="product-details">
        <div className="container">
          <div className="product-image-wrapper">
            <img className="product-image" src={product.image} alt={`Produto ${product.id}`} />
          </div>
          <div className="product-info">
            <h1 className="product-title">Produto {product.name}</h1>
            <p className="product-description">{product.description}</p>

            <div className="specs">
              <h2>Especificações Técnicas</h2>
              <ul>
                <li>Material: Aço galvanizado</li>
                <li>Acabamento: Pintura eletrostática</li>
                <li>Dimensões: Sob medida</li>
                <li>Aplicações: Residencial / Comercial / Industrial</li>
              </ul>
            </div>

            <button className="back-button" onClick={() => navigate(-1)}>
              ← Voltar aos Produtos
            </button>
          </div>
        </div>
      </section>

      <section className="contact-attendant">
        <div className="contact-content">
          <h2>Fale com um Especialista</h2>
          <p>Está com dúvidas sobre este produto? Nosso time está pronto para te atender agora mesmo!</p>
          <a
            href="https://api.whatsapp.com/send/?phone=5511973040054&text=Olá! Tenho interesse em um produto e gostaria de mais informações.&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
          >
            <FaWhatsapp size={24} />
            Falar no WhatsApp
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
