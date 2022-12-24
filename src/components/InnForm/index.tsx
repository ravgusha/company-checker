import { useState } from 'react';
import { DaDataPartySuggestion, PartySuggestions } from 'react-dadata';

import Button from '@components/Button';

import './style.scss';
import { useDispatch } from 'react-redux';
import { addNewInput } from '@redux/inputSlice';

interface IInnForm {
  onSubmit: (response: DaDataPartySuggestion) => void;
}

const InnForm = ({ onSubmit }: IInnForm) => {
  const dispatch = useDispatch();
  
  const [inputValue, setInputValue] = useState<DaDataPartySuggestion | undefined>();
  const [inputState, setInputState] = useState(false);
  const [buttonState, setButtonState] = useState({ label: 'Добавить', disabled: false });

  return (
    <div className="form-wrapper">
      <PartySuggestions
        token="a30327e5acc1b3e6b401d2491690328fb22bf8c5"
        value={inputValue}
        onChange={setInputValue}
        inputProps={{ disabled: inputState }}
      />
      <Button
        type="submit"
        disabled={buttonState.disabled}
        className="inn-btn"
        label={buttonState.label}
        onClick={() => {
          if (inputValue) {
            onSubmit(inputValue);
            setInputState(true);
            setButtonState({ label: 'Добавлено', disabled: true });
            dispatch(addNewInput());
          }
        }}
      ></Button>
    </div>
  );
};

export default InnForm;
