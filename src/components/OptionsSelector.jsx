// OptionsSelector.jsx
import React, { useState } from 'react';

const OptionsSelector = ({ options }) => {
  const [selectedColor, setSelectedColor] = useState(options.colors[0]);
  const [selectedSize, setSelectedSize] = useState(options.sizes[0]);

  return (
    <div className="mt-4">
      <div>
        <h3 className="font-semibold">Color:</h3>
        <ul className='flex items-center gap-3'>
          {options.colors.map((color) => (
            <li 
              key={color}
              className={`relative w-8 h-8 rounded-full  cursor-pointer ${color.class} 
                ${selectedColor === color ? 'ring-gray-900 ring-1' : ""}`}
              onClick={() => setSelectedColor(color)}
            >
              <div className="absolute w-10 h-10 rounded-full ring-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </li>
          ))}
        </ul>
        {/* <div className="flex space-x-2">
          {options.colors.map((color) => (
            <button
              key={color}
              className={`px-4 py-2 ${selectedColor === color ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => setSelectedColor(color)}
            >
              {color}
            </button>
          ))}
        </div> */}
      </div>

      <div className="mt-4">
        <h3 className="font-semibold">Size:</h3>
        <div className="flex space-x-2">
          {options.sizes.map((size) => (
            <button
              key={size}
              className={`px-4 py-2 ${selectedSize === size ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OptionsSelector;
