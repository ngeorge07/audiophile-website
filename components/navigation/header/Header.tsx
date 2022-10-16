import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  closeBurgerModal,
  openBurgerModal,
  toggleMountBurgerModal,
  toggleOpenBurgerModal,
  unmountBurgerModal,
} from '../../../features/burger-modal/burgerModalSlice';
import {
  closeCartModal,
  toggleMountCartModal,
} from '../../../features/cart-modal/cartModalSlice';
import { RootState } from '../../../redux/store';
import useWindowWidth from '../../../utils/useWindowWidth';
import IconHamburger from '../../SVGs/IconHamburger';
import Logo from '../../SVGs/Logo';
import CategoriesSection from '../categories-section/CategoriesSection';
import CheckoutModal from '../checkoutModal/CheckoutModal';
import NavMenu from '../navMenu/NavMenu';

export interface IHeader {}

const DesktopHeader: React.FC = () => {
  return (
    <>
      <nav className="flex z-20 relative items-center justify-between py-9 border-b border-b-white/25">
        <Link href="/">
          <a>
            <Logo />
          </a>
        </Link>

        <NavMenu className={'lg:mr-16'} />

        <CheckoutModal />
      </nav>
    </>
  );
};

const BurgerMenu: React.FC<{ screenWidth: number }> = ({ screenWidth }) => {
  const dispatch = useDispatch();
  const { isBurgerOpen, isBurgerMounted } = useSelector(
    (state: RootState) => state.burgerModal
  );
  const { isCartOpen } = useSelector((state: RootState) => state.cartModal);

  const dynamicRoute = useRouter().asPath;

  useEffect(() => {
    dispatch(closeBurgerModal());
    dispatch(unmountBurgerModal());

    document.body.style.overflow = 'auto';
  }, [dynamicRoute, dispatch]);

  function cartModalOpenFirst() {
    setTimeout(() => {
      dispatch(closeCartModal());
    }, 300);
    dispatch(toggleMountCartModal());

    setTimeout(() => {
      dispatch(toggleOpenBurgerModal());
      dispatch(toggleMountBurgerModal());
    }, 400);
  }

  function toggleBurgerModal() {
    !isBurgerOpen
      ? dispatch(openBurgerModal())
      : setTimeout(() => {
          dispatch(closeBurgerModal());
        }, 300);
    dispatch(toggleMountBurgerModal());

    setTimeout(() => {
      isBurgerOpen
        ? (document.body.style.overflow = 'auto')
        : (document.body.style.overflow = 'hidden');
    }, 350);
  }

  return (
    <nav className={`border-b border-b-white/25 `}>
      <div
        className={`relative flex items-center py-9 z-50 ${
          screenWidth < 600 && 'px-6 bg-black'
        }`}
      >
        <button
          onClick={() =>
            isCartOpen ? cartModalOpenFirst() : toggleBurgerModal()
          }
        >
          <IconHamburger isMounted={isBurgerMounted} />
        </button>

        <Link href="/">
          <a className="mx-auto md:ml-10">
            <Logo />
          </a>
        </Link>

        <CheckoutModal />
      </div>

      {isBurgerOpen && (
        <div className="z-10 fixed left-0 bottom-0 w-full h-full bg-black/[.40] overflow-y-auto">
          <CategoriesSection
            className={`mt-24 mx-0 px-6 py-8 md:px-10 md:pt-14 md:pb-16 md:mx-0 bg-white ${
              isBurgerMounted ? 'animate-fadeIn' : 'animate-fadeOut'
            }`}
          />
        </div>
      )}
    </nav>
  );
};

const Header: React.FC<IHeader> = () => {
  const { screenWidth } = useWindowWidth();
  const dynamicRoute = useRouter().asPath;

  return (
    <header
      className={`${
        dynamicRoute !== '/' ? 'bg-black' : 'bg-none absolute top-0 left-0 '
      } z-10 w-full md:px-10 lg:px-40`}
    >
      {screenWidth >= 1050 ? (
        <DesktopHeader />
      ) : (
        <BurgerMenu screenWidth={screenWidth} />
      )}
    </header>
  );
};

export default Header;
