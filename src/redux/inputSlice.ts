import { createSlice } from '@reduxjs/toolkit';

export interface IInput {
  value: string;
  id: string;
}

export interface IInputSlice {
  inputs: IInput[];
}

const initialState: IInputSlice = {
  inputs: [
    { value: '1', id: "1" },
    { value: '2', id: "2" },
  ],
};

const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    addNewInput: (state, action) => {
      state.inputs.push({
        value: action.payload.value,
        id: action.payload.id,
      });
    },
  },
});

const { actions, reducer } = inputSlice;

export default reducer;
export const { addNewInput } = actions;
