import Link from 'next/link';

export interface INavMenu extends React.ComponentPropsWithoutRef<'header'> {
  className?: string;
}

const HeaderLink: React.FC<{ text: string; href: string }> = ({
  text,
  href,
}) => {
  return (
    <li>
      <Link href={href}>
        <a className="text-white tracking-[2px] font-subtitle hover:text-accent1">
          {text}
        </a>
      </Link>
    </li>
  );
};

const NavMenu: React.FC<INavMenu> = ({ className }) => {
  const menuPages = ['home', 'headphones', 'speakers', 'earphones'];

  return (
    <ul className={`flex md:gap-9 ${className}`}>
      {menuPages.map((label, i) => (
        <HeaderLink key={i} text={label} href={i !== 0 ? `/${label}` : '/'} />
      ))}
    </ul>
  );
};

export default NavMenu;
