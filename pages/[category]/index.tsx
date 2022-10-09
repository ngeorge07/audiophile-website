import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';
import Link from 'next/link';
import AdvertLayout from '../../components/layouts/advert/AdvertLayout';
import PrimaryLayout from '../../components/layouts/primary/PrimaryLayout';
import database from '../../lib/products/data.json';
import { IProductData } from '../../lib/products/types';
import { NextPageWithLayout } from '../page';

export const getStaticPaths: GetStaticPaths = async () => {
  const allSlugs = ['earphones', 'speakers', 'headphones'];
  return {
    paths: allSlugs.map((slug) => ({ params: { category: slug } })),
    fallback: false,
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
    <Link key={i} href={`/${product.category}/${product.slug}`}>
      <a>{product.name}</a>
    </Link>
  ));
};

export default Category;

Category.getLayout = (page: NextPageWithLayout) => {
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
