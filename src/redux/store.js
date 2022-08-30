import { configureStore } from '@reduxjs/toolkit';
import { loggingReducer } from './userSlice';
import { cartReducer } from './cartSlice';

export const store = configureStore({
  reducer: {
    user: loggingReducer,
    cart: cartReducer,
  },
});
