import Image from 'next/image';
import useWindowWidth from '../../../utils/useWindowWidth';
import PrimaryButton from '../../buttons/primary-button/PrimaryButton';

export interface IProductCard {
  slug: string;
  name: string;
  description: string;
  category: string;
  newProduct?: boolean;
  index: number;
}

const ProductCard: React.FC<IProductCard> = ({
  slug,
  name,
  description,
  category,
  newProduct,
  index,
}) => {
  const { screenWidth } = useWindowWidth();
  const imagePath =
    screenWidth < 600 ? 'mobile' : screenWidth < 1050 ? 'tablet' : 'desktop';

  return (
    <article
      className={`flex flex-col items-center text-center ${
        index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
      } lg:gap-32 lg:text-left`}
    >
      <Image
        src={`/product-${slug}/${imagePath}/image-category-page-preview.jpg`}
        alt={name}
        width={screenWidth < 600 ? 654 : screenWidth < 1050 ? 1378 : 1080}
        height={screenWidth < 600 ? 704 : screenWidth < 1050 ? 704 : 1120}
        className="rounded-lg"
      />

      <div className="flex-shrink">
        {newProduct && (
          <h3 className="font-overline mt-8 md:mt-12">new product</h3>
        )}

        <h2 className="font-h4 my-6 md:font-h2 md:mt-4 md:mb-8">{name}</h2>
        <p className="font-body mb-6 opacity-80 md:px-14 lg:px-0">
          {description}
        </p>

        <PrimaryButton
          as="a"
          ghost={false}
          label="see product"
          path={`/${category}/${slug}`}
          className="w-fit bg-accent1"
        />
      </div>
    </article>
  );
};

export default ProductCard;
