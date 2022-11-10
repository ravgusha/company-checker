import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { IInput, IInputSlice } from '../../redux/inputSlice';
import InnForm from '../../components/InnForm';
import { addNewInput } from '../../redux/inputSlice';

interface IState {
  inputSlice: IInputSlice;
}

const AddPage = () => {
  const inputs = useSelector((state: IState) => state.inputSlice.inputs);
  const dispatch = useDispatch();
  console.log(inputs);

  const onSubmit = () => {
    const id = uuidv4();
    dispatch(addNewInput({ id }));
  }


  return (
    <main>
      {inputs.map((input: IInput) => (
        <InnForm key={input.id} onSubmit={onSubmit}/>
      ))}
    </main>
  );
};

export default AddPage;
