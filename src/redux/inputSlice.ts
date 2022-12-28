import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
export interface IInputSlice {
  value: number;
  inputs: IInput[];
}

interface IInput {
  id: string;
}
const initialState = {
  value: 1,
  inputs: [{ id: "1" }]
}

const inputSlice = createSlice({
  name: 'inputs',
  initialState: initialState,
  reducers: {
    addNewInput: (state) => {
      const newInput = { id: uuid() }

      return {
        inputs: [...state.inputs, newInput],
        value: state.value + 1
      };
    },
    clearInputs: () => {
      return initialState
    },
    deleteInput: (state, action) => {
      return {
        inputs: state.inputs.filter(input => input.id !== action.payload),
        value: state.value - 1
      };
    },
  }
});

const { actions, reducer } = inputSlice;

export default reducer;
export const { addNewInput, clearInputs, deleteInput } = actions;
