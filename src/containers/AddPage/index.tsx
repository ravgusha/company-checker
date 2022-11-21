import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import InnForm from '../../components/InnForm';
import { addNewInput, clearInputs } from '../../redux/inputSlice';
import { addCompany } from '../../redux/companySlice';
import { IState } from '../../redux/store';
import Button from '../../components/Button';
import { useGetCompanyInfoMutation } from '../../redux/apiSlice';

const AddPage = () => {
  const navigate = useNavigate();
  const [getCompanyInfo] = useGetCompanyInfoMutation();

  const onSubmit = (enteredInn: string) => {
    dispatch(addNewInput());
    getCompanyInfo(enteredInn)
      .unwrap()
      .then((resp) => {
        console.log(resp);
        return resp.suggestions[0].data;
      })
      .then((resp) => {
        const company = {
          inn: enteredInn,
          id: resp.hid,
          name: resp.name.short_with_opf,
          okved: resp.okved,
          status: resp.state.status,
        };
        dispatch(addCompany(company));
      });
  };

  const onClick = () => {
    navigate('/');
    dispatch(clearInputs());
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
      <Button label="Сохранить" onClick={onClick} />
    </main>
  );
};

export default AddPage;
