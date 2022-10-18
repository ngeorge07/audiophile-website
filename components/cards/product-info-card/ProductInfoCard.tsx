import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import useWindowWidth from '../../../utils/useWindowWidth';
import PrimaryButton from '../../buttons/primary-button/PrimaryButton';
export interface IProductInfoCard {
  id: number;
  slug: string;
  name: string;
  description: string;
  price: number;
  newProduct?: boolean;
}

const ProductInfoCard: React.FC<IProductInfoCard> = ({
  id,
  slug,
  name,
  description,
  price,
  newProduct,
}) => {
  const { screenWidth } = useWindowWidth();
  const [productCount, setProductCount] = useState(1);
  const imagePath =
    screenWidth < 600 ? 'mobile' : screenWidth < 1050 ? 'tablet' : 'desktop';
  const dynamicRoute = useRouter().asPath;
  useEffect(() => {
    setProductCount(1);
  }, [dynamicRoute]);

  return (
    <article
      className="flex flex-col md:flex-row md:gap-14 md:items-center lg:gap-28"
      itemScope
      itemType="https://schema.org/Product"
    >
      <Image
        src={`/product-${slug}/${imagePath}/image-product.jpg`}
        alt={name}
        width={screenWidth < 600 ? 654 : screenWidth < 1050 ? 562 : 1080}
        height={screenWidth < 600 ? 654 : screenWidth < 1050 ? 960 : 1120}
        className="rounded-lg"
        itemProp="image"
      />

      <div className="md:w-full">
        {newProduct && (
          <h3 className="font-overline mt-8 md:mt-0">new product</h3>
        )}

        <h2 itemProp="name" className="font-h4 my-6 md:font-h2">
          {name}
        </h2>
        <p itemProp="description" className="font-body opacity-80">
          {description}
        </p>

        <div
          className="font-h6 mt-6 mb-8"
          itemProp="offers"
          itemScope
          itemType="https://schema.org/Offer"
        >
          <span itemProp="price">$ {price}</span>
          <meta itemProp="priceCurrency" content="USD" />
        </div>

        <div className="flex gap-4">
          <div className="p-4 bg-primary flex justify-between items-center flex-grow font-h6 md:max-w-[170px] md:min-w-[130px]">
            <button
              disabled={productCount < 2 && true}
              className={`${
                productCount > 1 ? 'hover:text-accent1' : 'opacity-50'
              } p-1`}
              onClick={() =>
                productCount > 0 && setProductCount((prev) => prev - 1)
              }
            >
              -
            </button>
            <span>{productCount}</span>
            <button
              onClick={() => setProductCount((prev) => prev + 1)}
              className="p-1 hover:text-accent1"
            >
              +
            </button>
          </div>

          <PrimaryButton
            as="button"
            ghost={false}
            label="add to cart"
            className="w-1/2 max-w-[250px]"
            product={{
              id,
              image: `/cart/image-${slug}.jpg`,
              name,
              price,
              itemQuantity: 0,
              initialQuantity: productCount,
            }}
          />
        </div>
      </div>
    </article>
  );
};

export default ProductInfoCard;
