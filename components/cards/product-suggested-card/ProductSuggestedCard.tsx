import Image from 'next/image';
import useWindowWidth from '../../../utils/useWindowWidth';
import PrimaryButton from '../../buttons/primary-button/PrimaryButton';

export interface IProductSuggestedCard {
  slug: string;
  name: string;
  category: string;
}

const ProductSuggestedCard: React.FC<IProductSuggestedCard> = ({
  slug,
  name,
  category,
}) => {
  const { screenWidth } = useWindowWidth();
  const imagePath =
    screenWidth < 600 ? 'mobile' : screenWidth < 1050 ? 'tablet' : 'desktop';

  return (
    <article className="flex flex-col items-center h-full">
      <Image
        src={`/shared/${imagePath}/image-${slug}.jpg`}
        alt={name}
        width={screenWidth < 600 ? 654 : screenWidth < 1050 ? 446 : 438}
        height={screenWidth < 600 ? 240 : screenWidth < 1050 ? 636 : 380}
        className="rounded-lg"
      />

      <h2 className="font-h5 my-6 md:text- lg:font-h3">{name}</h2>

      <PrimaryButton
        as="a"
        ghost={false}
        path={`/${category}/${slug}`}
        label="see product"
        className="bg-accent1"
      />
    </article>
  );
};

export default ProductSuggestedCard;
