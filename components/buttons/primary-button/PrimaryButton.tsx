import Link from 'next/link';
import { useDispatch } from 'react-redux';
import {
  addItem,
  calculateTotals,
  incrementByAmount,
} from '../../../features/cart-logic/cartLogicSlice';
import { ICartItemData } from '../../../lib/products/types';
export interface IPrimaryButton {
  label: string;
  ghost: boolean;
  className?: string;
  as: 'button';
  product: ICartItemData;
}
export interface IPrimaryLink {
  label: string;
  ghost: boolean;
  className?: string;
  as: 'a';
  path: string;
}

type Element = IPrimaryButton | IPrimaryLink;

const PrimaryButton: React.FC<Element> = (props) => {
  const dispatch = useDispatch();

  return props.as === 'button' ? (
    <button
      onClick={() => {
        dispatch(addItem(props.product));
        dispatch(incrementByAmount(props.product));
        dispatch(calculateTotals());
      }}
      className={`navigation-button py-4 px-8 ${
        props.ghost
          ? 'bg-transparent border border-black border-solid text-black hover:bg-black hover:text-white'
          : 'bg-accent1 text-white hover:bg-accent2'
      } ${props.className}`}
    >
      {props.label}
    </button>
  ) : (
    <Link href={props.path}>
      <a
        className={`navigation-button inline-block py-4 px-8 ${
          props.ghost
            ? 'bg-transparent border bg-none border-black border-solid text-black hover:bg-black hover:text-white'
            : 'text-white hover:bg-accent2'
        } ${props.className}`}
      >
        {props.label}
      </a>
    </Link>
  );
};

export default PrimaryButton;
