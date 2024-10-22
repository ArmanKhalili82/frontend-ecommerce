import { createSlice } from '@reduxjs/toolkit';
import u from '../../assets/university.jpg'
import w from '../../assets/working.jpg'

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    list: [
      { id: 1, name: 'Product 1', price: 29.99, image: u, description: 'A great product', colors: ['Red', 'Blue'], sizes: ['S', 'M', 'L'] },
      { id: 2, name: 'Product 2', price: 49.99, image: w, description: 'Another great product', colors: ['Green', 'Yellow'], sizes: ['M', 'L', 'XL'] },
      { id: 3, name: 'Product 3', price: 59.99, image: u, description: 'An amazing product', colors: ['Red', 'Blue', 'black', 'white'], sizes: ['S', 'M', 'L'] },
      { id: 4, name: 'Product 4', price: 79.99, image: w, description: 'Another perfect product', colors: ['Green', 'Yellow', 'red'], sizes: ['S','M', 'L', 'XL'] },
    ],
    selectedProduct: null,
  },
  reducers: {
    selectProduct(state, action) {
      state.selectedProduct = action.payload;
    },
  },
});

export const { selectProduct } = productsSlice.actions;
export default productsSlice.reducer;
