import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addReview, deleteReview }  from '../redux/slices/reviewsSlice'

const Reviews = ({ productId }) => {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.reviews.reviews[productId] || []);
  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(1);

  const handleAddReview = () => {
    const newReview = {
      text: reviewText,
      rating,
      id: Date.now(),
    };
    dispatch(addReview({ productId, review: newReview }));
    setReviewText('');
    setRating(1);
  };

  const handleDeleteReview = (index) => {
    dispatch(deleteReview({ productId, reviewId: index }));
  };

  return (
    <div className="mt-4">
      <h3 className="text-lg font-bold">Reviews</h3>
      <ul className="space-y-2">
        {reviews.map((review, index) => (
          <li key={review.id} className="border p-2 rounded">
            <p>{review.text}</p>
            <p>Rating: {'★'.repeat(review.rating)}</p>
            <button
              onClick={() => handleDeleteReview(index)}
              className="text-red-500"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <textarea
          className="w-full p-2 border rounded mb-2"
          placeholder="Add your review"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        />
        <div className="mb-2">
          <label>Rating:</label>
          <select
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            className="border p-2 ml-2"
          >
            {[1, 2, 3, 4, 5].map((star) => (
              <option key={star} value={star}>
                {star}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={handleAddReview}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Add Review
        </button>
      </div>
    </div>
  );
};

export default Reviews;
