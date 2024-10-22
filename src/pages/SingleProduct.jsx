import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectProduct } from '../redux/slices/productsSlice'
import { loadReviews } from '../redux/slices/reviewsSlice';
import OptionsSelector from '../components/OptionsSelector';
import Reviews from '../components/Reviews';

const SingleProduct = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.list.find((p) => p.id === Number(productId)));

  useEffect(() => {
    dispatch(selectProduct(productId));
    dispatch(loadReviews({ productId }));
  }, [dispatch, productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <img src={product.image} alt={product.name} className="w-full h-96 object-cover rounded" />
      <h2 className="text-3xl font-bold mt-4">{product.name}</h2>
      <p className="text-xl text-gray-800 mt-2">${product.price}</p>
      <p className="mt-4">{product.description}</p>
      <OptionsSelector options={product} />
      <Reviews productId={productId} />
    </div>
  );
};

export default SingleProduct;
