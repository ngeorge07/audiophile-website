import Link from 'next/link';

import IconCart from '../../SVGs/IconCart';
import Logo from '../../SVGs/Logo';
import NavMenu from '../navMenu/NavMenu';

export interface IHeader {}

const Header: React.FC<IHeader> = () => {
  return (
    <header className="bg-none absolute z-20 w-full md:px-10 lg:px-40">
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
    </header>
  );
};

export default Header;
