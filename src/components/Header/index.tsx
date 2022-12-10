import { useDispatch } from 'react-redux';
import { toggleMenu } from '../../redux/menuSlice';

import HamburgerIcon from '../HamburgerIcon';
import Logo from '../Logo';

import './style.scss';

const Header = () => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(toggleMenu());
  };

  return (
    <header>
      <Logo />
      {/* <HamburgerIcon onClick={onClick} /> */}
    </header>
  );
};

export default Header;
