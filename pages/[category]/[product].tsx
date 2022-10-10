import type { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import ProductInfoCard from '../../components/cards/product-info-card/ProductInfoCard';
import AdvertLayout from '../../components/layouts/advert/AdvertLayout';
import PrimaryLayout from '../../components/layouts/primary/PrimaryLayout';
import database from '../../lib/products/data.json';
import { IProductData } from '../../lib/products/types';
import { NextPageWithLayout } from '../page';

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: database.map((product) => ({
      params: { category: product.category, product: product.slug },
    })),
    fallback: false,
  };
};

type ContextParams = {
  product: string;
};

interface PageProps {
  products: IProductData[];
}

export const getStaticProps: GetStaticProps<PageProps, ContextParams> = async (
  context
) => {
  const product = context.params?.product;
  const products: IProductData[] = database.filter(
    (result) => result.slug === product
  );

  return {
    props: {
      products,
    },
  };
};

// const Product = ({
//   products,
// }: InferGetStaticPropsType<typeof getStaticProps>) => {
//   return products.map((product: IProductData, i: number) => (
//     <p key={i}>{product.name}</p>
//   ));
// };

const Product = () => {
  return (
    <section className="mx-6">
      <Link href="#">
        <a className="block font-p opacity-50 my-8">Go Back</a>
      </Link>
      <ProductInfoCard />
    </section>
  );
};

export default Product;

Product.getLayout = (page: NextPageWithLayout) => {
  return (
    <PrimaryLayout>
      <main>
        <>
          {page}
          <AdvertLayout />
        </>
      </main>
    </PrimaryLayout>
  );
};
