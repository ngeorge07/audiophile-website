import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useWindowWidth from '../../../utils/useWindowWidth';
import IconCart from '../../SVGs/IconCart';
import IconHamburger from '../../SVGs/IconHamburger';
import Logo from '../../SVGs/Logo';
import CategoriesSection from '../categories-section/CategoriesSection';
import NavMenu from '../navMenu/NavMenu';

export interface IHeader {}

const DesktopHeader: React.FC = () => {
  return (
    <nav className="flex items-center justify-between py-9 border-b border-b-white/25">
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>

      <NavMenu className={'lg:mr-16'} />

      <button>
        <IconCart />
      </button>
    </nav>
  );
};

const BurgerMenu: React.FC<{ screenWidth: number }> = ({ screenWidth }) => {
  const [openBurger, setOpenBurger] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const dynamicRoute = useRouter().asPath;

  useEffect(() => {
    setOpenBurger(false);
    setIsMounted(false);
    document.body.style.overflow = 'auto';
  }, [dynamicRoute]);

  return (
    <nav className={` border-b border-b-white/25 `}>
      <div
        className={` relative flex items-center py-9 z-50 ${
          screenWidth < 600 && 'px-6 bg-[#181818]'
        }`}
      >
        <button
          onClick={() => {
            !openBurger
              ? setOpenBurger(true)
              : setTimeout(() => {
                  setOpenBurger(false);
                }, 300);
            setIsMounted((prev) => !prev);

            openBurger
              ? (document.body.style.overflow = 'auto')
              : (document.body.style.overflow = 'hidden');
          }}
          className=""
        >
          <IconHamburger isMounted={isMounted} />
        </button>

        <Link href="/">
          <a className="ml-10">
            <Logo />
          </a>
        </Link>

        <button className="ml-auto">
          <IconCart />
        </button>
      </div>

      {openBurger && (
        <div className="z-10 fixed left-0 bottom-0 w-full h-full bg-black/[.40] overflow-y-auto">
          <CategoriesSection
            className={`mt-24 mx-0 px-6 py-8 md:px-10 md:pt-14 md:pb-16 md:mx-0 bg-white ${
              isMounted ? 'animate-fadeIn' : 'animate-fadeOut'
            }`}
          />
        </div>
      )}
    </nav>
  );
};

const Header: React.FC<IHeader> = () => {
  const { screenWidth } = useWindowWidth();

  return (
    <header className="bg-none absolute w-full md:px-10 lg:px-40">
      {screenWidth >= 1050 ? (
        <DesktopHeader />
      ) : (
        <BurgerMenu screenWidth={screenWidth} />
      )}
    </header>
  );
};

export default Header;
