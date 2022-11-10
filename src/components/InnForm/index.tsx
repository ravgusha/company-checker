import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { addNewInput } from '../../redux/inputSlice';

import './style.scss';

const InnForm = ({ value }) => {
  const dispatch = useDispatch();
  const inputRef = useRef();

  const onSubmit = (id: string, value: string) => {
    dispatch(addNewInput({ value, id }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        const id = uuidv4();
        const value = inputRef.current.value || '';

        onSubmit(id, value);
      }}
    >
      <input type="text" placeholder="Введите ИНН" defaultValue={value} ref={inputRef} />
      <button>Добавить</button>
    </form>
  );
};

export default InnForm;
