import { useDispatch, useSelector } from 'react-redux';

import { IInput, IInputSlice } from '../../redux/inputSlice';
import InnForm from '../../components/InnForm';

interface IState {
  inputSlice: IInputSlice;
}

const AddPage = () => {
  const inputs = useSelector((state: IState) => state.inputSlice.inputs);
  const dispatch = useDispatch();
  console.log(inputs);

  return (
    <main>
      {inputs.map((input: IInput) => (
        <InnForm key={input.id} value={input.value} />
      ))}
    </main>
  );
};

export default AddPage;
