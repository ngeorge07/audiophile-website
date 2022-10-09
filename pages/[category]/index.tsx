import type { GetStaticPaths, GetStaticProps } from 'next';
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

// const Category = ({
//   products,
// }: InferGetStaticPropsType<typeof getStaticProps>) => {
//   return products.map((product: IProductData, i: number) => (
//     <Link key={i} href={`/${product.category}/${product.slug}`}>
//       <a>{product.name}</a>
//     </Link>
//   ));
// };

const Category = () => {
  return (
    <>
      <section className="bg-black relative top-0 left-0 h-48 flex items-end justify-center">
        <h1 className="font-h4 text-white pb-8">headphones</h1>
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
          <AdvertLayout />
        </>
      </main>
    </PrimaryLayout>
  );
};
