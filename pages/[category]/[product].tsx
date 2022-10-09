import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';
import database from '../../lib/products/data.json';
import { IProductData } from '../../lib/products/types';

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

const Product = ({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return products.map((product: IProductData, i: number) => (
    <p key={i}>{product.name}</p>
  ));
};

export default Product;
