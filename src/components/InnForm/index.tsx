import './style.scss';

interface IInnForm {
  onSubmit: () => void;
  key: string;
}

const InnForm = ({ onSubmit }: IInnForm) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit;
      }}
    >
      <input type="text" placeholder="Введите ИНН" />
      <button>Добавить</button>
    </form>
  );
};

export default InnForm;
