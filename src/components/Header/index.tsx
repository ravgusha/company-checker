import HamburgerMenu from '../HamburgerMenu';
import Logo from '../Logo';

import './style.scss';

const Header = () => {
  return (
    <header>
      <Logo />
      <HamburgerMenu />
    </header>
  );
};

export default Header;
