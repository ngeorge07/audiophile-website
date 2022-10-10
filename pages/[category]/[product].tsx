import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';
import { useRouter } from 'next/router';
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

const Product = ({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  return (
    <section className="mx-6 md:mx-10 lg:mx-40">
      <button
        className="font-p opacity-50 my-8 lg:mt-20"
        type="button"
        onClick={() => router.back()}
      >
        Go Back
      </button>
      <ProductInfoCard
        slug={products[0].slug}
        name={products[0].name}
        description={products[0].description}
        newProduct={products[0].new}
        price={products[0].price}
      />
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
