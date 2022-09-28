import Link from 'next/link';

import useWindowWidth from '../../../utils/useWindowWidth';
import IconCart from '../../SVGs/IconCart';
import IconHamburger from '../../SVGs/IconHamburger';
import Logo from '../../SVGs/Logo';
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
  return (
    <nav
      className={`flex items-center py-9 border-b border-b-white/25 ${
        screenWidth < 600 && 'px-6'
      }`}
    >
      <IconHamburger />

      <Link href="/">
        <a className="pl-10">
          <Logo />
        </a>
      </Link>

      <button className="ml-auto">
        <IconCart />
      </button>
    </nav>
  );
};

const Header: React.FC<IHeader> = () => {
  const { screenWidth } = useWindowWidth();

  return (
    <header className="bg-none absolute z-20 w-full md:px-10 lg:px-40">
      {screenWidth >= 1050 ? (
        <DesktopHeader />
      ) : (
        <BurgerMenu screenWidth={screenWidth} />
      )}
    </header>
  );
};

export default Header;
