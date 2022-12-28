import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { DaDataPartySuggestion, PartySuggestions } from 'react-dadata';

import Button from '@components/Button';
import { addNewInput } from '@redux/inputSlice';
import { deleteCompany } from '@redux/companySlice';

import './style.scss';

interface IInnForm {
  onSubmit: (response: DaDataPartySuggestion) => void;
  onDelete: (id: string) => void;
  innId: string;
}

const InnForm = ({ onSubmit, onDelete, innId }: IInnForm) => {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState<DaDataPartySuggestion | undefined>();
  const [isInputDisabled, setIsInputDisabled] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleInputChange = () => {
    if (inputValue) {
      onSubmit(inputValue);
      setIsInputDisabled(true);
      setIsButtonDisabled(false);
      dispatch(addNewInput());
    }
  };

  return (
    <div className="form-wrapper">
      <PartySuggestions
        token="a30327e5acc1b3e6b401d2491690328fb22bf8c5"
        value={inputValue}
        onChange={setInputValue}
        inputProps={{ disabled: isInputDisabled, onBlur: handleInputChange }}
      />
      <Button
        onClick={() => {
          const companyId = inputValue?.data.hid;
          onDelete(innId);
          dispatch(deleteCompany(companyId));
        }}
        label={'X'}
        disabled={isButtonDisabled}
      />
    </div>
  );
};

export default InnForm;
