import Image from 'next/image';
import useWindowWidth from '../../../utils/useWindowWidth';

export interface IProductInfoCard {}

const ProductInfoCard: React.FC<IProductInfoCard> = () => {
  const { screenWidth } = useWindowWidth();

  return (
    <section itemScope itemType="https://schema.org/Product">
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

        <h2 itemProp="name">XX99 Mark II Headphones</h2>
        <p itemProp="description">
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </p>

        <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
          <span itemProp="price">$ 2.999</span>
          <meta itemProp="priceCurrency" content="USD" />
        </div>
      </div>
    </section>
  );
};

export default ProductInfoCard;
