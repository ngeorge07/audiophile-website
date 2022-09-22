import Link from 'next/link';

import IconFacebook from '../../SVGs/IconFacebook';
import IconInstagram from '../../SVGs/IconInstagram';
import IconTwitter from '../../SVGs/IconTwitter';
import Logo from '../../SVGs/Logo';
import NavMenu from '../navMenu/NavMenu';

export interface IFooter {}

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary pb-8 px-6 md:pb-12 md:px-10 lg:px-40 lg:pb-12">
      <hr className="block w-24 border-t-4 border-accent1 relative top-0 mx-auto md:mx-0" />
      <div className="flex flex-col items-center pt-12 md:items-start md:pt-14 lg:flex-row lg:justify-between lg:items-center lg:pt-20">
        <Logo />
        <nav className="my-12 md:my-8">
          <NavMenu className="flex-col gap-4 items-center md:flex-row" />
        </nav>
      </div>

      <p className="font-body text-white opacity-50 text-center md:text-left lg:w-1/2">
        Audiophile is an all in one stop to fulfill your audio needs. We&apos;re
        a small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we&apos;re open 7 days a week.
      </p>

      <div className="flex flex-col items-center md:flex-row md:justify-between md:mt-20 lg:mt-14">
        <p className="font-body text-white opacity-50 my-12">
          Copyright 2021. All Rights Reserved
        </p>

        <div className="flex gap-4">
          <Link href="#">
            <a className="group">
              <IconFacebook className="group-hover:fill-accent1" />
            </a>
          </Link>

          <Link href="#">
            <a className="group">
              <IconTwitter className="group-hover:fill-accent1" />
            </a>
          </Link>

          <Link href="#">
            <a className="group">
              <IconInstagram className="group-hover:fill-accent1" />
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
