import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './apiSlice';

import companySlice, { ICompanySlice } from './companySlice';
import inputSlice, { IInputSlice } from './inputSlice';

export interface IState {
  inputSlice: IInputSlice;
  companySlice: ICompanySlice;
}

const store = configureStore({
  reducer: { inputSlice, companySlice, [apiSlice.reducerPath]: apiSlice.reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV !== 'production',
});

store.subscribe(() => {
  const inns = JSON.stringify(store.getState().companySlice);
  window.localStorage.setItem('companySlice', inns)
})

export default store;
