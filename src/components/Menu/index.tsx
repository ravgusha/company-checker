import { useSelector } from 'react-redux';

import { IState } from '@redux/store';

import './style.scss';

const Menu = () => {
  const isOpen = useSelector((state: IState) => state.menuSlice.isOpen);

  return (
    <div className={`menu ${isOpen ? '' : 'hidden'}`}>
      <fieldset>
        <span> Показать:</span>
        <label>
          <input type="checkbox" /> ИНН
        </label>
        <label>
          <input type="checkbox" /> ОКВЭД
        </label>
        <label>
          <input type="checkbox" /> Статус
        </label>
      </fieldset>
    </div>
  );
};

export default Menu;
