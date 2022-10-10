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
  const product = products[0];

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
        slug={product.slug}
        name={product.name}
        description={product.description}
        newProduct={product.new}
        price={product.price}
      />

      <div className="my-20 md:my-28 flex flex-col lg:flex-row lg:items-start lg:gap-32">
        <article className="lg:w-[65%]">
          <h3 className="font-h5 md:font-h3">Features</h3>
          <p className="font-body opacity-50 mt-6 mb-20 whitespace-pre-line md:mt-8">
            {product.features}
          </p>
        </article>

        <article className="flex flex-col gap-6 md:flex-row md:justify-between md:w-3/4 md:gap-0 lg:flex-col lg:gap-8 lg:w-[35%]">
          <h3 className="font-h5 md:font-h3">In the box</h3>
          <ul className="font-body flex flex-col gap-2">
            {product.includes.map((item, i) => (
              <li key={i} className="font-bold text-accent1">
                {item.quantity}x
                <span className="font-medium text-black pl-6 opacity-50">
                  {item.item}
                </span>
              </li>
            ))}
          </ul>
        </article>
      </div>
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
