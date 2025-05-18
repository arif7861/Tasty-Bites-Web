import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const specialItems = {
  'tasty-burger': {
    id: 'tasty-burger',
    title: 'Tasty Burger',
    image: 'images/s-img-1.jpg',
    description: 'A perfect blend of succulent, premium beef, fresh, crisp vegetables, and our signature sauce, all nestled in a perfectly toasted bun.',
    variants: ['Single', 'Double', 'Triple'],
  },
  'tasty-pizza': {
    id: 'tasty-pizza',
    title: 'Tasty Pizza',
    image: 'images/s-img-2.jpg',
    description: 'Crafted with a crispy, golden crust, rich tomato sauce, and the finest, freshest toppings.',
    variants: ['Small', 'Medium', 'Large'],
  },
  'cold-ice-cream': {
    id: 'cold-ice-cream',
    title: 'Cold Ice Cream',
    image: 'images/s-img-3.jpg',
    description: 'A creamy, dreamy delight that melts in your mouth. Choose from a variety of rich, indulgent flavors.',
    variants: ['Vanilla', 'Chocolate', 'Strawberry'],
  },
  'cold-drinks': {
    id: 'cold-drinks',
    title: 'Cold Drinks',
    image: 'images/s-img-4.jpg',
    description: 'A refreshing selection of beverages that offer a burst of cool, invigorating flavors.',
    variants: ['Coke', 'Sprite', 'Fanta'],
  },
  'tasty-sweets': {
    id: 'tasty-sweets',
    title: 'Tasty Sweets',
    image: 'images/s-img-5.jpg',
    description: 'A heavenly assortment of desserts crafted to satisfy your sweet tooth.',
    variants: ['Cake', 'Pastry', 'Pudding'],
  },
  'tasty-breakfast': {
    id: 'tasty-breakfast',
    title: 'Tasty Breakfast',
    image: 'images/s-img-6.jpg',
    description: 'Featuring a delicious array of morning favorites to energize and satisfy.',
    variants: ['Pancakes', 'Waffles', 'Omelets'],
  },
};

const SpecialityDetail = ({ addToCart }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = specialItems[id];

  const [selectedVariant, setSelectedVariant] = useState(item?.variants[0] || '');

  if (!item) {
    return <div>Item not found</div>;
  }

  const handleAddToCart = () => {
    addToCart({ id: item.id, title: item.title, variant: selectedVariant });
    navigate('/'); // Redirect to home or cart page after adding
  };

  return (
    <div className="speciality-detail">
      <h1>{item.title}</h1>
      <img src={item.image} alt={item.title} style={{ maxWidth: '400px' }} />
      <p>{item.description}</p>
      <label htmlFor="variant-select">Choose a variant:</label>
      <select
        id="variant-select"
        value={selectedVariant}
        onChange={(e) => setSelectedVariant(e.target.value)}
      >
        {item.variants.map((variant) => (
          <option key={variant} value={variant}>
            {variant}
          </option>
        ))}
      </select>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default SpecialityDetail;
