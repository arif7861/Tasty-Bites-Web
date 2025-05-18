import React from 'react';
import Popular from './Popular';

const UpdatedPopularFood = ({ addToCart }) => {
  return (
    <div>
      <Popular addToCart={addToCart} />
    </div>
  );
};

export default UpdatedPopularFood;
