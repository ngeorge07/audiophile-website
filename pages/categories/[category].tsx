import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';
import database from '../../lib/products/data.json';
import { IProductData } from '../../lib/products/types';

export const getStaticPaths: GetStaticPaths = async () => {
  const allSlugs = ['earphones', 'speakers', 'headphones'];
  return {
    paths: allSlugs.map((slug) => ({ params: { category: slug } })),
    fallback: 'blocking',
  };
};

type ContextParams = {
  category: string;
};

interface PageProps {
  products: IProductData[];
}

export const getStaticProps: GetStaticProps<PageProps, ContextParams> = async (
  context
) => {
  const category = context.params?.category;
  const products: IProductData[] = database.filter(
    (result) => result.category === category
  );

  return {
    props: {
      products,
    },
  };
};

const Category = ({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return products.map((product: IProductData, i: number) => (
    <p key={i}>{product.category}</p>
  ));
};

export default Category;
