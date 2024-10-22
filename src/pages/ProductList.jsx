import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';

const ProductList = () => {
  const products = useSelector((state) => state.products.list);

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
