import Image from 'next/image';
import { useDispatch } from 'react-redux';
import {
  calculateTotals,
  decrement,
  increment,
  removeItem
} from '../../../features/cart-logic/cartLogicSlice';
import { ICartItemData } from '../../../lib/products/types';
import numberFormatting from '../../../utils/numberFormatting';
export interface ICartItemCard {
  item: ICartItemData;
  isSummary?: boolean;
}

const CartItemCard: React.FC<ICartItemCard> = ({ item, isSummary }) => {
  const dispatch = useDispatch();

  return (
    <section
      className="flex my-8 items-center"
      itemScope
      itemType="https://schema.org/Product"
    >
      <Image
        src={item.image}
        alt={item.name}
        width={70}
        height={70}
        className="rounded-lg"
        itemProp="image"
      />

      <div className="flex flex-col ml-4">
        <h3 className="font-body font-bold" itemProp="name">
          {isSummary ? item.name.split(' ').slice(0, -1).join(' ') : item.name}
        </h3>

        <div
          className="font-body font-bold opacity-50"
          itemProp="offers"
          itemScope
          itemType="https://schema.org/Offer"
        >
          <span itemProp="price">
            $ {numberFormatting(item.price * item.itemQuantity)}
          </span>
          <meta itemProp="priceCurrency" content="USD" />
        </div>
      </div>
      {isSummary ? (
        <span className="ml-auto font-body opacity-50 font-bold">
          x{item.itemQuantity}
        </span>
      ) : (
        <div className="px-2 bg-primary flex justify-between items-center ml-auto w-24 h-8">
          <button
            onClick={() => {
              item.itemQuantity > 1
                ? dispatch(decrement(item))
                : dispatch(removeItem(item));

              dispatch(calculateTotals());
            }}
            // disabled={item.itemQuantity === 1 && true}
            className="hover:text-accent1 p-1"
          >
            -
          </button>
          <span>{item.itemQuantity}</span>
          <button
            onClick={() => {
              dispatch(increment(item));
              dispatch(calculateTotals());
            }}
            className="p-1 hover:text-accent1"
          >
            +
          </button>
        </div>
      )}
    </section>
  );
};

export default CartItemCard;
