import Image from 'next/image';
import { useState } from 'react';
import useWindowWidth from '../../../utils/useWindowWidth';
import PrimaryButton from '../../buttons/primary-button/PrimaryButton';

export interface IProductInfoCard {}

const ProductInfoCard: React.FC<IProductInfoCard> = () => {
  const { screenWidth } = useWindowWidth();
  const [productCount, setProductCount] = useState(1);

  return (
    <article itemScope itemType="https://schema.org/Product">
      <Image
        src={`/product-xx99-mark-two-headphones/mobile/image-product.jpg`}
        alt="author"
        width={screenWidth < 600 ? 654 : screenWidth < 1050 ? 562 : 1080}
        height={screenWidth < 600 ? 654 : screenWidth < 1050 ? 960 : 1120}
        className="rounded-lg"
        itemProp="image"
      />

      <div>
        <h3 className="font-overline mt-8 md:mt-12">new product</h3>

        <h2 itemProp="name" className="font-h4 my-6">
          XX99 Mark II Headphones
        </h2>
        <p itemProp="description" className="font-body opacity-50">
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </p>

        <div
          className="font-h6 mt-6 mb-8"
          itemProp="offers"
          itemScope
          itemType="https://schema.org/Offer"
        >
          <span itemProp="price">$ 2.999</span>
          <meta itemProp="priceCurrency" content="USD" />
        </div>

        <div className="flex gap-4">
          <div className="p-4 bg-primary flex justify-between items-center flex-grow font-h6">
            <button
              disabled={productCount < 2 && true}
              className={`${productCount < 2 && 'opacity-50'} p-1`}
              onClick={() =>
                productCount > 0 && setProductCount((prev) => prev - 1)
              }
            >
              -
            </button>
            <span>{productCount}</span>
            <button
              onClick={() => setProductCount((prev) => prev + 1)}
              className="p-1"
            >
              +
            </button>
          </div>

          <PrimaryButton as="button" ghost={false} label="add to cart" />
        </div>
      </div>
    </article>
  );
};

export default ProductInfoCard;
