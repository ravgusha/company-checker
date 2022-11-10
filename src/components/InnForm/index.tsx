import { useState } from 'react';
import './style.scss';

interface IInnForm {
  onSubmit: () => void;
  key: string;
}

const InnForm = ({ onSubmit }: IInnForm) => {
  const [disabled, setDisabled] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
        setDisabled(true);
      }}
    >
      <input type="text" placeholder="Введите ИНН" />
      <button disabled={disabled}>{disabled ? "Добавлено" : "Добавить"}</button>
    </form>
  );
};

export default InnForm;
