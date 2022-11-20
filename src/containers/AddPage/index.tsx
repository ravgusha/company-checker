import { useDispatch, useSelector } from 'react-redux';

import InnForm from '../../components/InnForm';
import { addNewInput } from '../../redux/inputSlice';
import { addInn } from '../../redux/innSlice';
import { IState } from '../../redux/store';
import Button from '../../components/Button';

const AddPage = () => {
  const onSubmit = (enteredInn: string) => {
    dispatch(addNewInput());
    dispatch(addInn(enteredInn));
  };

  const inputs = [];

  const inputsQuantity = useSelector((state: IState) => state.inputSlice.value);
  for (let i = 0; i < inputsQuantity; i++) {
    inputs.push(<InnForm key={i} onSubmit={onSubmit} />);
  }

  const dispatch = useDispatch();

  return (
    <main>
      {inputs}
      <Button label="Сохранить" />
    </main>
  );
};

export default AddPage;
