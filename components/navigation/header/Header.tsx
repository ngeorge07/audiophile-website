import Link from 'next/link';

import IconCart from '../../SVGs/IconCart';
import Logo from '../../SVGs/Logo';

export interface IHeader {}

const HeaderLink: React.FC<{ text: string }> = ({ text }) => {
  return (
    <li>
      <Link href="#">
        <a className="text-white  tracking-[2px] font-subtitle">{text}</a>
      </Link>
    </li>
  );
};

const Header: React.FC<IHeader> = () => {
  const menuPages = ['home', 'headphones', 'speakers', 'earphones'];

  return (
    <header className="bg-secondary">
      <nav className="flex items-center justify-evenly py-9 border-b border-b-white/25">
        <Link href="#">
          <a>
            <Logo />
          </a>
        </Link>

        <ul className="flex gap-9 mr-24">
          {menuPages.map((label, i) => (
            <HeaderLink key={i} text={label} />
          ))}
        </ul>

        <button>
          <IconCart />
        </button>
      </nav>
    </header>
  );
};

export default Header;
