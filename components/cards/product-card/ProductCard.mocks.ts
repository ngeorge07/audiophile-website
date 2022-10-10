import { IProductCard } from './ProductCard';

const base: IProductCard = {
  slug: 'xx99-mark-two-headphones',
  name: 'XX99 Mark II Headphones',
  description:
    'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
  category: 'headphones',
  newProduct: true,
  index: 1,
};

export const mockProductCardProps = {
  base,
};
