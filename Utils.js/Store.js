import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './CartSlice';

 const Store=configureStore({
  reducer : {
    cart : cartSlice,
  },
});

export default Store;
