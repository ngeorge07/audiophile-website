import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  closeBurgerModal,
  toggleMountBurgerModal,
} from '../../../features/burger-modal/burgerModalSlice';
import { clearCart } from '../../../features/cart-logic/cartLogicSlice';
import {
  closeCartModal,
  toggleMountCartModal,
  toggleOpenCartModal,
  unmountCartModal,
} from '../../../features/cart-modal/cartModalSlice';
import { RootState } from '../../../redux/store';
import PrimaryButton from '../../buttons/primary-button/PrimaryButton';
import CartItemCard from '../../cards/cart-item-card/CartItemCard';
import IconCart from '../../SVGs/IconCart';

export interface ICheckoutModal {
  className?: string;
}

const CheckoutModal: React.FC<ICheckoutModal> = ({ className }) => {
  const dispatch = useDispatch();
  const { isCartOpen, isCartMounted } = useSelector(
    (state: RootState) => state.cartModal
  );
  const { isBurgerOpen } = useSelector((state: RootState) => state.burgerModal);
  const { amount, cartItems, total } = useSelector(
    (state: RootState) => state.cartLogic
  );

  const dynamicRoute = useRouter().asPath;

  useEffect(() => {
    dispatch(closeCartModal());
    dispatch(unmountCartModal());

    document.body.style.overflow = 'auto';
  }, [dynamicRoute, dispatch]);

  function burgerModalOpenFirst() {
    setTimeout(() => {
      dispatch(closeBurgerModal());
    }, 300);
    dispatch(toggleMountBurgerModal());

    setTimeout(() => {
      dispatch(toggleOpenCartModal());
      dispatch(toggleMountCartModal());
    }, 400);
  }

  function toggleCartModal() {
    !isCartOpen
      ? dispatch(toggleOpenCartModal())
      : setTimeout(() => {
          dispatch(closeCartModal());
        }, 300);
    dispatch(toggleMountCartModal());

    setTimeout(() => {
      isCartOpen
        ? (document.body.style.overflow = 'auto')
        : (document.body.style.overflow = 'hidden');
    }, 350);
  }

  return (
    <>
      <button
        className="flex"
        onClick={() =>
          isBurgerOpen ? burgerModalOpenFirst() : toggleCartModal()
        }
      >
        <IconCart />
        <span className="font-body text-white relative left-0 top-2">
          {amount}
        </span>
      </button>

      {isCartOpen && (
        <div className="-z-10 fixed left-0 bottom-0 w-full h-full bg-black/[.40] overflow-y-auto">
          <article
            className={`bg-white right-[1.5em] left-[1.5em] py-8 px-7 absolute rounded-lg mt-[120px] my-auto md:right-0 md:left-auto  md:w-96 md:mr-10 lg:mr-40 ${
              isCartMounted ? 'animate-fadeIn' : 'animate-fadeOut'
            } ${className}`}
          >
            <section className="flex justify-between">
              <h3 className="font-h6">Cart {amount > 0 && `(${amount})`}</h3>

              {amount > 0 && (
                <button
                  className="font-body opacity-50"
                  onClick={() => dispatch(clearCart())}
                >
                  Remove all
                </button>
              )}
            </section>

            {cartItems && amount > 0 ? (
              cartItems.map((item, i) => <CartItemCard key={i} item={item} />)
            ) : (
              <p className="text-center font-body my-4">Your cart is empty.</p>
            )}

            <section
              className="flex justify-between mb-6"
              itemProp="offers"
              itemScope
              itemType="https://schema.org/Offer"
            >
              <h3 className="font-body uppercase opacity-50" itemProp="name">
                Total
              </h3>
              <span
                className="font-body text-[18px] font-bold"
                itemProp="price"
              >
                $ {total}
              </span>
              <meta itemProp="priceCurrency" content="USD" />
            </section>

            <PrimaryButton
              as="a"
              ghost={false}
              path="/checkout"
              label="checkout"
              className={`bg-accent1 w-full text-center ${
                amount === 0 && ' bg-accent2 pointer-events-none'
              }`}
            />
          </article>
        </div>
      )}
    </>
  );
};

export default CheckoutModal;
