import { ICartItemCard } from './CartItemCard';

const base: ICartItemCard = {
  item: {
    id: 4,
    name: 'XX99 Mark II Headphones',
    price: 2999,
    image: '/cart/image-xx99-mark-two-headphones.jpg',
    initialQuantity: 1,
    itemQuantity: 2,
  },
};

export const mockCartItemCardProps = {
  base,
};
