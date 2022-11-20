import { createSlice } from '@reduxjs/toolkit';

export interface IInputSlice {
  value: number;
}

const inputSlice = createSlice({
  name: 'inputs',
  initialState: {
    value: 1
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
  }
});

const { actions, reducer } = inputSlice;

export default reducer;
export const { addNewInput, clearInputs } = actions;
