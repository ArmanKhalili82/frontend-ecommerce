import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectProduct } from '../redux/slices/productsSlice'
import { loadReviews } from '../redux/slices/reviewsSlice';
import OptionsSelector from '../components/OptionsSelector';
import Reviews from '../components/Reviews';

const SingleProduct = () => {
  const [index, setIndex] = useState(0);
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
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* Image */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <div>
          <div className='h-[500px] relative'>
            <img src={product.images[index].src} alt='' sizes='50vm' className='object-cover rounded-md' />
          </div>
          <div className='flex justify-between gap-4 mt-8 cursor-pointer'>
            {product.images.map((img, i) => (
              <div className="w-1/4 h-32 relative gap-4 mt-8" key={img.id} onClick={() => setIndex(i)}>
                <img
                    src={img.src}
                    alt=""
                    sizes="30vw"
                    className="object-cover rounded-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">{product.name}</h1>
        <p>{product.description}</p>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          reprehenderit in consectetur fugiat. Aspernatur voluptatum mollitia
          voluptatem natus repellendus maiores, quasi alias non nihil,
          quos, eveniet dicta? Optio, a. Voluptas.
        </p>
        <div className="h-[2px] bg-gray-100" />
        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through">{product.priceBeforeOff}</h3>
          <h2 className="font-medium text-2xl">{product.price}</h2>
        </div>
        <OptionsSelector options={product} />
        <Reviews productId={productId} />
      </div>      
    </div>




    // <div className="p-4">
    //   <img src={product.image} alt={product.name} className="w-full h-96 object-cover rounded" />
    //   <h2 className="text-3xl font-bold mt-4">{product.name}</h2>
    //   <p className="text-xl text-gray-800 mt-2">${product.price}</p>
    //   <p className="mt-4">{product.description}</p>
    //   <OptionsSelector options={product} />
    //   <Reviews productId={productId} />
    // </div>
  );
};

export default SingleProduct;
