import Image from 'next/image';
import useWindowWidth from '../../../utils/useWindowWidth';
import SecondaryButton from '../../buttons/secondary-button/SecondaryButton';

export interface IProductCategoryCard {
  category: 'headphones' | 'earphones' | 'speakers';
}

const ProductCategoryCard: React.FC<IProductCategoryCard> = ({ category }) => {
  const { screenWidth } = useWindowWidth();
  return (
    <article className="relative flex flex-col items-center w-full category-bg">
      <Image
        src={`/shared/desktop/image-category-thumbnail-${category}.png`}
        alt={category}
        width={screenWidth < 600 ? 178 : 228}
        height={screenWidth < 600 ? 162 : 212}
      />
      <h2 className="font-h6 text-[15px] lg:text-[18px]">{category}</h2>
      <SecondaryButton label="shop" className="pb-5" path={category} />
    </article>
  );
};

export default ProductCategoryCard;
