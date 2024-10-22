import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slices/productsSlice';
import reviewsReducer from './slices/reviewsSlice';

const store = configureStore({
  reducer: {
    products: productsReducer,
    reviews: reviewsReducer,
  },
});

export default store;
