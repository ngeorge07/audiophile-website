import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';
import ProductCard from '../../components/cards/product-card/ProductCard';
import AdvertLayout from '../../components/layouts/advert/AdvertLayout';
import PrimaryLayout from '../../components/layouts/primary/PrimaryLayout';
import CategoriesSection from '../../components/navigation/categories-section/CategoriesSection';
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
  return (
    <>
      <section className="bg-black relative top-0 left-0 h-24 md:h-44 flex items-center justify-center">
        <h1 className="font-h4 md:font-h2 text-white md:text-white">
          {products[0].category}
        </h1>
      </section>

      <section className="mx-6 mt-16 mb-32 flex flex-col gap-32 md:mx-10 md:my-28 md:gap-28 lg:mx-40 lg:gap-40 lg:my-40">
        {products
          .map((product: IProductData, i: number) => (
            <ProductCard
              key={product.id}
              slug={product.slug}
              name={product.name}
              description={product.description}
              category={product.category}
              newProduct={product.new}
              index={i}
            />
          ))
          .reverse()}
      </section>

      <CategoriesSection />
    </>
  );
};

export default Category;

Category.getLayout = (page: NextPageWithLayout) => {
  return (
    <PrimaryLayout>
      <main>
        <>
          {page}
          <AdvertLayout className="md:my-28 lg:my-40" />
        </>
      </main>
    </PrimaryLayout>
  );
};
