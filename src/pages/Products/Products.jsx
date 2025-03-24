import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { Content } from './content/Content';
import { ProductTable } from './producttable/ProductTable';

export function Products() {
  return (
    <>
      <Header />
      <Content />
      <ProductTable />
      <Footer />
    </>
  );
}
