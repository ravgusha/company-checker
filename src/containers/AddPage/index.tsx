import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { DaDataPartySuggestion } from 'react-dadata';

import InnForm from '@components/InnForm';
import ComponentWrapper from '@components/ComponentWrapper';
import { disableSaveButton, enableSaveButton } from '@redux/inputSlice';
import { addCompany } from '@redux/companySlice';
import { IState } from '@redux/store';
import Button from '@components/Button';

import 'react-dadata/dist/react-dadata.css';

const AddPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (value: DaDataPartySuggestion) => {
    dispatch(enableSaveButton());
    const company = {
      inn: value.data.inn,
      id: value.data.hid,
      name: value.data.name.short_with_opf || value.data.name.full_with_opf,
      okved: value.data.okved,
      status: value.data.state.status,
      liquidationDate: value.data.state.liquidation_date,
    };
    dispatch(addCompany(company));
  };

  const onClick = () => {
    navigate('/');
    dispatch(disableSaveButton());
  };

  const isSaveButtonDisabled = useSelector(
    (state: IState) => state.inputSlice.isSaveButtonDisabled
  );
  
  return (
    <ComponentWrapper>
      <InnForm onSubmit={onSubmit}/>
      <Button label="Сохранить" onClick={onClick} disabled={isSaveButtonDisabled}/>
    </ComponentWrapper>
  );
};

export default AddPage;
