import './producttable.scss';

export const ProductTable = () => {
  const products = [
    {
      name: 'Quadro de Distribuição Compacto (QDC)',
      description: 'Solução eficaz para distribuição de energia em espaços restritos.',
      features: 'Estrutura metálica monobloco, alta resistência, versatilidade.',
      applications: 'Instalações elétricas em geral, espaços com restrição de área.',
    },
    {
      name: 'Quadro de Medição Eletrônica Centralizada (MEC)',
      description: 'Sistema para centralizar a medição de consumo de energia.',
      features: 'Conexão com barramentos blindados, segurança, eficiência.',
      applications: 'Condomínios, prédios comerciais e residenciais.',
    },
    {
      name: 'Painel Autoportante Modular',
      description: 'Painel com montagem simples, resistente e flexível.',
      features: 'Não necessita de suporte, peças encaixáveis, pintura eletrostática.',
      applications: 'Construção civil, arquitetura modular.',
    },
    {
      name: 'QGBT - Quadro Geral de Distribuição de Baixa Tensão',
      description: 'Painel para receber e redistribuir alimentação principal.',
      features: 'Proteção de circuitos, gestão de energia, segurança.',
      applications: 'Instalações de baixa tensão (até 1.000V).',
    },
    {
      name: 'Quadro de Disjuntores de Sobrepor',
      description: 'Quadros para organizar e distribuir circuitos elétricos.',
      features: 'Instalação externa, ideal para reformas, modelos IP54.',
      applications: 'Instalações aparentes, reformas.',
    },
  ];

  return (
    <div className="product-table-container">
      <table className="product-table">
        <thead>
          <tr>
            <th>Nome do Produto</th>
            <th>Descrição</th>
            <th>Características Principais</th>
            <th>Aplicações</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td data-label="Nome">{product.name}</td>
              <td data-label="Descrição">{product.description}</td>
              <td data-label="Características">{product.features}</td>
              <td data-label="Aplicações">{product.applications}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};