import { useState } from 'react';
import { DaDataPartySuggestion, PartySuggestions } from 'react-dadata';

import Button from '@components/Button';

import './style.scss';

interface IInnForm {
  onSubmit: (response: DaDataPartySuggestion) => void;
}

const InnForm = ({ onSubmit }: IInnForm) => {
  const [inputValue, setInputValue] = useState<DaDataPartySuggestion | undefined>();
  const [buttonState, setButtonState] = useState({ label: 'Добавить', disabled: false });

  return (
    <div className="form-wrapper">
      <PartySuggestions
        token="a30327e5acc1b3e6b401d2491690328fb22bf8c5"
        value={inputValue}
        onChange={setInputValue}
      />
      <Button
        type="submit"
        disabled={buttonState.disabled}
        className="inn-btn"
        label={buttonState.label}
        onClick={() => {
          if (inputValue) {
            onSubmit(inputValue);
            setInputValue(undefined);
            setButtonState({ label: 'Добавлено', disabled: true });
            setTimeout(() => {
              setButtonState({ label: 'Добавить', disabled: false });
            }, 2000);
          }
        }}
      ></Button>
    </div>
  );
};

export default InnForm;
