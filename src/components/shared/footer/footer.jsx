import React from 'react';

import Button from 'components/shared/button';
import Link from 'components/shared/link';
import MENUS from 'constants/menus';
import GitHubLogo from 'images/logo-github.inline.svg';
import Logo from 'images/logo.inline.svg';

const COPYRIGHT = 'Novu';

const Footer = () => (
  <footer className="safe-paddings bg-black">
    <div className="container flex justify-between py-20 lg:flex-col lg:py-12 sm:block sm:py-10">
      <div className="flex flex-col items-start justify-between lg:flex-row lg:items-center">
        <Link to="/">
          <span className="sr-only">Notu</span>
          <Logo className="h-8" aria-hidden />
        </Link>
        <p className="text-sm leading-none text-gray-8 lg:hidden">
          Ⓒ {new Date().getFullYear()} {COPYRIGHT}
        </p>
      </div>

      <div className="flex space-x-30 lg:mt-8 lg:grid lg:grid-cols-12 lg:justify-between lg:gap-x-7 lg:space-x-0 sm:mt-9 sm:block">
        <nav className="flex space-x-30 pt-1.5 lg:col-span-8 lg:w-full lg:justify-between lg:space-x-0 sm:hidden">
          {MENUS.footer.map((links, index) => (
            <ul className="space-y-2.5 lg:space-y-2" key={index}>
              {links.map(({ to, text }, index) => (
                <li key={index}>
                  <Link to={to} size="base" theme="white">
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </nav>

        <nav className="hidden grid-cols-2 justify-between gap-y-7 sm:grid">
          {MENUS.footerSm.map((links, index) => (
            <ul className="space-y-2 sm:space-y-1" key={index}>
              {links.map(({ to, text }, index) => (
                <li key={index}>
                  <Link to={to} size="base" theme="white">
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </nav>

        <div className="flex flex-col items-end justify-between lg:col-span-4 sm:mt-9 sm:items-start">
          <Button className="pl-3" to="/" size="xs" theme="gray-outline">
            <GitHubLogo className="mr-2 h-[26px] w-[26px]" />
            <span className="lg:hidden sm:block">Star us on Github</span>
            <span className="hidden lg:block sm:hidden">Star us</span>
          </Button>

          <p className="text-sm leading-none text-gray-8 lg:hidden">
            Design made by{' '}
            <Link
              to="https://pixelpoint.io/"
              theme="gray"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pixel Point
            </Link>
          </p>
        </div>
      </div>

      <div className="hidden lg:mt-8 lg:flex lg:justify-between sm:mt-9 sm:flex-col sm:space-y-2.5">
        <p className="text-sm leading-none text-gray-8">
          Ⓒ {new Date().getFullYear()} {COPYRIGHT}
        </p>
        <p className="text-sm leading-none text-gray-8">
          Design made by{' '}
          <Link to="https://pixelpoint.io/" theme="gray" target="_blank" rel="noopener noreferrer">
            Pixel Point
          </Link>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
