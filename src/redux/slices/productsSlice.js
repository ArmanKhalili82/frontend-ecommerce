import { createSlice } from '@reduxjs/toolkit';
import u from '../../assets/university.jpg'
import w from '../../assets/working.jpg'
import proImage from '../../assets/productImages/adrian-ordonez-P0W27GRvyww-unsplash.jpg'
import proImage1 from '../../assets/productImages/ahmed-rajgoli-shoaib-shakeel-FCsA8Adcgr4-unsplash.jpg'
import proImage2 from '../../assets/productImages/andrew-hutchings-W2Dta_Yiwfw-unsplash.jpg'
import proImage3 from '../../assets/productImages/avechenri-2hEaLqoPgPQ-unsplash.jpg'
import proImage4 from '../../assets/productImages/benjamin-rascoe-Z3N7m_r02TA-unsplash.jpg'
import proImage5 from '../../assets/productImages/chris-henry-4gD0nUsMTsE-unsplash.jpg'
import proImage6 from '../../assets/productImages/conor-luddy-IVaKksEZmZA-unsplash.jpg' 
import proImage7 from '../../assets/productImages/daniel-korpai-hbTKIbuMmBI-unsplash.jpg'
import proImage8 from '../../assets/productImages/djordje_jovicic-l1mVJnG7a84-unsplash.jpg'
import proImage9 from '../../assets/productImages/dominik-martin-b2-fBVrfx0o-unsplash.jpg'
import proImage10 from '../../assets/productImages/domino-studio-164_6wVEHfI-unsplash.jpg'
import proImage11 from '../../assets/productImages/download.webp'
import proImage12 from '../../assets/productImages/ernest-flowers-P62INeB2yz4-unsplash.jpg'
import proImage13 from '../../assets/productImages/fabian-heimann-4R_WEmhx8og-unsplash.jpg'
import proImage14 from '../../assets/productImages/gerson-repreza-nYnwq0iN2jI-unsplash.jpg'

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    list: [
      { id: 1,
        name: 'Product 1',
        priceBeforeOff: 49.99,
        price: 29.99,
        images: [
          {src: proImage1},
          {src: proImage2},
          {src: proImage3},
          {src: proImage4}
        ],
        description: 'A great product',
        colors: [
          { name: 'white', class: 'bg-white', selectedClass: 'ring-gray-400' },
          { name: 'red', class: 'bg-red-500', selectedClass: 'ring-gray-600' },
          { name: 'black', class: 'bg-black', selectedClass: 'ring-gray-900' },
        ],
        sizes: ['S', 'M', 'L']
      },

      { id: 2,
        name: 'Product 2',
        priceBeforeOff: 69.99,
        price: 49.99,
        images: [
          {src: proImage5},
          {src: proImage6},
          {src: proImage7},
          {src: proImage8}
        ],
        description: 'Another great product',
        colors: [
          {name: 'green', class: 'bg-green-500', selectedClass: 'ring-gray-500'},
          {name: 'yellow', class: 'bg-yellow-500', selectedClass: 'ring-gray-500'}
        ],
        sizes: ['M', 'L', 'XL']
      },

      { id: 3,
        name: 'Product 3',
        priceBeforeOff: 69.99,
        price: 59.99,
        images: [
          {src: proImage9},
          {src: proImage10},
          {src: proImage11},
          {src: proImage12}
        ],
        description: 'An amazing product',
        colors: [
          { name: 'white', class: 'bg-white', selectedClass: 'ring-gray-400' },
          { name: 'red', class: 'bg-red-500', selectedClass: 'ring-gray-600' },
          { name: 'black', class: 'bg-black', selectedClass: 'ring-gray-900' },
          { name: 'blue', class: 'bg-blue-500', selectedClass: 'ring-gray-900' }
        ],
        sizes: ['S', 'M', 'L']
      },

      { id: 4,
        name: 'Product 4',
        priceBeforeOff: 99.99,
        price: 79.99,
        images: [
          {src: proImage13},
          {src: proImage14},
          {src: w},
          {src: u}
        ],
        description: 'Another perfect product',
        colors: [
          {name: 'green', class: 'bg-green-500', selectedClass: 'ring-gray-500'},
          {name: 'yellow', class: 'bg-yellow-500', selectedClass: 'ring-gray-500'},
          { name: 'red', class: 'bg-red-500', selectedClass: 'ring-gray-600' }
        ],
        sizes: ['S','M', 'L', 'XL']
      },
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
