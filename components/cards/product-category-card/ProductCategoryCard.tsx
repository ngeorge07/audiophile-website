import Image from 'next/image';
import Link from 'next/link';
import useWindowWidth from '../../../utils/useWindowWidth';
import SecondaryButton from '../../buttons/secondary-button/SecondaryButton';

export interface IProductCategoryCard {
  category: 'headphones' | 'earphones' | 'speakers';
}

const ProductCategoryCard: React.FC<IProductCategoryCard> = ({ category }) => {
  const { screenWidth } = useWindowWidth();
  return (
    <div className="relative flex flex-col items-center w-full category-bg hover:cursor-pointer">
      <Image
        src={`/shared/desktop/image-category-thumbnail-${category}.png`}
        alt="author"
        width={screenWidth < 600 ? 178 : 228}
        height={screenWidth < 600 ? 162 : 212}
      />
      <h3 className="font-h6 text-[15px] lg:text-[18px]">{category}</h3>
      <Link href="#">
        <SecondaryButton label="shop" className="pb-5" />
      </Link>
    </div>
  );
};

export default ProductCategoryCard;
