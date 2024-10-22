import { createSlice } from '@reduxjs/toolkit';

const getReviewsFromStorage = (productId) => {
  const savedReviews = localStorage.getItem(`reviews-${productId}`);
  return savedReviews ? JSON.parse(savedReviews) : [];
};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: {
    reviews: {},
  },
  reducers: {
    addReview(state, action) {
      const { productId, review } = action.payload;
      state.reviews[productId] = [...(state.reviews[productId] || []), review];
      localStorage.setItem(`reviews-${productId}`, JSON.stringify(state.reviews[productId]));
    },
    deleteReview(state, action) {
      const { productId, reviewId } = action.payload;
      state.reviews[productId] = state.reviews[productId].filter((_, index) => index !== reviewId);
      localStorage.setItem(`reviews-${productId}`, JSON.stringify(state.reviews[productId]));
    },
    loadReviews(state, action) {
      const { productId } = action.payload;
      state.reviews[productId] = getReviewsFromStorage(productId);
    },
  },
});

export const { addReview, deleteReview, loadReviews } = reviewsSlice.actions;
export default reviewsSlice.reducer;
