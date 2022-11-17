import { useDispatch, useSelector } from 'react-redux';

import InnForm from '../../components/InnForm';
import { addNewInput } from '../../redux/inputSlice';
import { addInn } from '../../redux/innSlice';
import { IState } from '../../redux/store';
import { useGetCompanyInfoMutation } from '../../redux/apiSlice';
import Button from '../../components/Button';

const AddPage = () => {
  const [getCompanyInfo] = useGetCompanyInfoMutation();

  const onSubmit = (enteredInn: string) => {
    console.log('dispatch');
    dispatch(addNewInput());
    dispatch(addInn(enteredInn));
    // getCompanyInfo(enteredInn)
    //   .then((rep) => {
    //     console.log(rep);
    //   });
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
