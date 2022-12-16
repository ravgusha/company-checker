import { createSlice } from '@reduxjs/toolkit';

export interface IInputSlice {
  value: number;
  isSaveButtonDisabled: boolean;
}

const inputSlice = createSlice({
  name: 'inputs',
  initialState: {
    value: 1,
    isSaveButtonDisabled: true
  },
  reducers: {
    addNewInput: (state) => {
      return {
        ...state,
        value: state.value + 1
      };
    },
    clearInputs: (state) => {
      return {
        ...state,
        value: 1
      };
    },
    enableSaveButton: (state) => {
      return {
        ...state,
        isSaveButtonDisabled: false
      };
    },
    disableSaveButton: (state) => {
      return {
        ...state,
        isSaveButtonDisabled: true
      };
    },
  }
});

const { actions, reducer } = inputSlice;

export default reducer;
export const { addNewInput, clearInputs, enableSaveButton, disableSaveButton } = actions;
