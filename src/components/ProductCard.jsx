import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const [averageRating, setAverageRating] = useState(0);
  const reviews = useSelector((state) => state.reviews.reviews[product.id] || []);

  // Calculate the average rating from the reviews whenever they change
  useEffect(() => {
    if (reviews.length > 0) {
      const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
      setAverageRating((totalRating / reviews.length).toFixed(1));
    } else {
      setAverageRating(0);
    }
  }, [reviews]);

  return (
    <div className="border p-4 rounded-md shadow-md flex flex-col hover:border-blue-400">
      <img
        src={product.images[0].src}
        alt={product.name}
        className="h-48 w-full object-cover rounded-t-md"
      />
      <div className="mt-2 flex-1">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-gray-600">${product.price}</p>
        <p className="text-gray-600">{product.description}</p>
        {averageRating > 0 ? (
          <div>
            <p className="text-yellow-500">Rating: {averageRating} / 5</p>
            <p className="text-yellow-500">Comments: {reviews.length}</p>
          </div>
        ) : (
          <p className="text-gray-400">No ratings yet</p>
        )}
      </div>
      <Link to={`/product/${product.id}`}>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-orange-500 duration-300">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;