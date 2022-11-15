import { createSlice } from '@reduxjs/toolkit';

export interface IInput {
  // value: string;
  id: string;
}

export interface IInputSlice {
  inputs: IInput[];
}

const initialState: IInputSlice = {
  inputs: [
    { id: "1" },
  ],
};

const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    addNewInput: (state, action) => {
      state.inputs.push({
        id: action.payload.id,
      });
    },
  },
});

const { actions, reducer } = inputSlice;

export default reducer;
export const { addNewInput } = actions;
