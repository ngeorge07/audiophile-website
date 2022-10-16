import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import ProductInfoCard from '../../components/cards/product-info-card/ProductInfoCard';
import ProductSuggestedCard from '../../components/cards/product-suggested-card/ProductSuggestedCard';
import AdvertLayout from '../../components/layouts/advert/AdvertLayout';
import PrimaryLayout from '../../components/layouts/primary/PrimaryLayout';
import CategoriesSection from '../../components/navigation/categories-section/CategoriesSection';
import database from '../../lib/products/data.json';
import { IProductData } from '../../lib/products/types';
import useWindowWidth from '../../utils/useWindowWidth';
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

const Product = ({
  products,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();
  const product = products[0];
  const { screenWidth } = useWindowWidth();
  const imagePath =
    screenWidth < 600 ? 'mobile' : screenWidth < 1050 ? 'tablet' : 'desktop';

  return (
    <>
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
          id={product.id}
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

        <article className="flex flex-col gap-5 md:grid md:grid-cols-[1.5fr_2fr] md:grid-rows-2 md:gap-x-5 md:gap-y-[18px] lg:gap-x-[30px] lg:gap-y-8">
          <div className="md:relative flex row-start-1 row-end-2 col-start-1 col-end-2">
            <Image
              src={`/product-${product.slug}/${imagePath}/image-gallery-1.jpg`}
              alt="author"
              width={screenWidth < 600 ? 654 : screenWidth < 1050 ? 554 : 445}
              height={screenWidth < 600 ? 348 : screenWidth < 1050 ? 348 : 280}
              className="rounded-lg md:relative"
            />
          </div>

          <div className="md:relative flex row-start-2 row-end-3 col-start-1 col-end-2">
            <Image
              src={`/product-${product.slug}/${imagePath}/image-gallery-2.jpg`}
              alt="author"
              width={screenWidth < 600 ? 654 : screenWidth < 1050 ? 554 : 445}
              height={screenWidth < 600 ? 348 : screenWidth < 1050 ? 348 : 280}
              layout={'intrinsic'}
              className="rounded-lg md:relative"
            />
          </div>

          <div className="md:grid row-start-1 row-end-3 col-start-2 col-end-3">
            <Image
              src={`/product-${product.slug}/${imagePath}/image-gallery-3.jpg`}
              alt="author"
              width={screenWidth < 600 ? 654 : screenWidth < 1050 ? 790 : 635}
              height={screenWidth < 600 ? 736 : screenWidth < 1050 ? 736 : 592}
              className="rounded-lg"
            />
          </div>
        </article>
      </section>

      <section className="mx-6 my-32 md:mx-10 lg:mx-40">
        <h3 className="font-h5 mb-10 text-center md:font-h3">
          You may also like
        </h3>

        <div className="flex flex-col gap-14 md:flex-row md:gap-3">
          {product.others.map((suggested, i) => (
            <ProductSuggestedCard
              key={i}
              category={suggested.category}
              slug={suggested.slug}
              name={suggested.name}
            />
          ))}
        </div>
      </section>

      <CategoriesSection />
    </>
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
