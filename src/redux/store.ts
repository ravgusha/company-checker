import { configureStore } from '@reduxjs/toolkit';

import innSlice, { IInnSlice } from './innSlice';
import inputSlice, { IInputSlice } from './inputSlice';

export interface IState {
  inputSlice: IInputSlice;
  innSlice: IInnSlice;
}

const store = configureStore({
  reducer: { inputSlice, innSlice },
  devTools: process.env.NODE_ENV !== 'production',
});

store.subscribe(() => {
  const inns = JSON.stringify(store.getState().innSlice);
  window.localStorage.setItem('innSlice', inns)
})

export default store;
