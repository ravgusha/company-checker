import { useSelector } from 'react-redux';

import { IState } from '../../redux/store'
;
import './style.scss';

const Menu = () => {
  const isOpen = useSelector((state: IState) => state.menuSlice.isOpen);

  return <div className={`menu ${isOpen ? '' : 'hidden'}`}>Menu</div>;
};

export default Menu;
