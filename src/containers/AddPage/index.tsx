import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import InnForm from '@components/InnForm';
import ComponentWrapper from '@components/ComponentWrapper';
import { addNewInput, clearInputs, disableSaveButton, enableSaveButton } from '@redux/inputSlice';
import { addCompany } from '@redux/companySlice';
import { IState } from '@redux/store';
import Button from '@components/Button';
import { useGetCompanyInfoMutation } from '@redux/apiSlice';

const AddPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [getCompanyInfo] = useGetCompanyInfoMutation();

  const onSubmit = (enteredInn: string) => {
    dispatch(addNewInput());
    dispatch(enableSaveButton());
    getCompanyInfo(enteredInn)
      .unwrap()
      .then((resp) => {
        return resp.suggestions[0].data;
      })
      .then((resp) => {
        const company = {
          inn: enteredInn,
          id: resp.hid,
          name: resp.name.short_with_opf,
          okved: resp.okved,
          status: resp.state.status,
          liquidationDate: resp.state.liquidation_date,
        };
        dispatch(addCompany(company));
      });
  };

  const onClick = () => {
    navigate('/');
    dispatch(clearInputs());
    dispatch(disableSaveButton());
  };

  const isSaveButtonDisabled = useSelector(
    (state: IState) => state.inputSlice.isSaveButtonDisabled
  );

  const inputs = [];

  const inputsQuantity = useSelector((state: IState) => state.inputSlice.value);
  for (let i = 0; i < inputsQuantity; i++) {
    inputs.push(<InnForm key={i} onSubmit={onSubmit} />);
  }

  return (
    <ComponentWrapper>
      {inputs}
      <Button label="Сохранить" onClick={onClick} disabled={isSaveButtonDisabled} />
    </ComponentWrapper>
  );
};

export default AddPage;
