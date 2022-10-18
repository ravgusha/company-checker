import React, { useState } from 'react';
import './App.css';
import { PartySuggestions } from 'react-dadata';
import { DaDataSuggestion, DaDataParty } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';

function App() {
  const [value, setValue] = useState<DaDataSuggestion<DaDataParty> | undefined>();
  console.log(value);
  return (
    <div className="App">
      <PartySuggestions
        token="a30327e5acc1b3e6b401d2491690328fb22bf8c5"
        value={value}
        onChange={setValue}
      />
      {value ? <div>{value?.data?.address?.value}</div> : null}
    </div>
  );
}

export default App;
