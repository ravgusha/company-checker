import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DaDataPartySuggestion } from 'react-dadata';

import InnForm from '@components/InnForm';
import ComponentWrapper from '@components/ComponentWrapper';
import { clearInputs, deleteInput } from '@redux/inputSlice';
import { addCompany } from '@redux/companySlice';
import { IState } from '@redux/store';

import 'react-dadata/dist/react-dadata.css';

const AddPage = () => {
  useEffect(() => {
    return () => {
      dispatch(clearInputs());
    };
  }, []);

  const dispatch = useDispatch();

  const onSubmit = (value: DaDataPartySuggestion) => {
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

  const onDelete = (id: string) => {
    dispatch(deleteInput(id));
  };

  const inputs = useSelector((state: IState) => state.inputSlice.inputs);

  return (
    <ComponentWrapper>
      {inputs.map((item) => (
        <InnForm key={item.id} innId={item.id} onDelete={onDelete} onSubmit={onSubmit} />
      ))}
    </ComponentWrapper>
  );
};

export default AddPage;
