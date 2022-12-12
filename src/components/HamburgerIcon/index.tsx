import { MouseEventHandler } from 'react';

import './style.scss';

interface IHamburgerIcon {
  onClick: MouseEventHandler;
}

const HamburgerIcon = ({ onClick }: IHamburgerIcon) => {
  return (
    <div className="hamburger" onClick={onClick}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default HamburgerIcon;
