// OptionsSelector.jsx
import React, { useState } from 'react';

const OptionsSelector = ({ options }) => {
  const [selectedColor, setSelectedColor] = useState(options.colors[0]);
  const [selectedSize, setSelectedSize] = useState(options.sizes[0]);

  return (
    <div className="mt-4">
      <div>
        <h3 className="font-semibold">Color:</h3>
        <div className="flex space-x-2">
          {options.colors.map((color) => (
            <button
              key={color}
              className={`px-4 py-2 ${selectedColor === color ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => setSelectedColor(color)}
            >
              {color}
            </button>
          ))}
        </div>
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
