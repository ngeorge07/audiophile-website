import { IProductInfoCard } from './ProductInfoCard';

const base: IProductInfoCard = {
  id: 4,
  slug: 'xx99-mark-two-headphones',
  name: 'XX99 Mark II Headphones',
  description:
    'The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.',
  newProduct: true,
  price: 2999,
};

export const mockProductInfoCardProps = {
  base,
};
