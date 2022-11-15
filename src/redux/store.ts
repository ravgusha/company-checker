import { configureStore } from '@reduxjs/toolkit';

import inputSlice from './inputSlice';

const store = configureStore({
  reducer: { inputSlice },
  devTools: process.env.NODE_ENV !== 'production',
});

export default store;
