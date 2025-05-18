import React, { useState } from 'react';
import Toast from './Toast';

const popularItems = [
  { id: 1, name: 'Paneer Butter Masala', price: 100, image: '../images/Paneer Butter Masala.jpeg', rating: 4 },
  { id: 2, name: 'Chicken Biryani', price: 110, image: '../images/Chicken Biryani.jpeg', rating: 5 },
  { id: 3, name: 'Dal Makhani', price: 90, image: '../images/Dal Makhani.jpeg', rating: 4 },
  { id: 4, name: 'Chole Bhature', price: 80, image: '../images/Chole Bhature.jpeg', rating: 5 },
  { id: 5, name: 'Masala Dosa', price: 70, image: '../images/Masala Dosa.jpeg', rating: 4 },
  { id: 6, name: 'Butter Chicken', price: 120, image: '../images/Butter Chicken.jpeg', rating: 5 },
  { id: 7, name: 'Fish Curry', price: 130, image: '../images/Fish Curry.jpeg', rating: 4 },
  { id: 8, name: 'Veg Manchurian', price: 85, image: '../images/Veg Manchurian.jpeg', rating: 5 },
  { id: 9, name: 'Pav Bhaji', price: 75, image: '../images/Pav Bhaji.jpeg', rating: 4 },
  { id: 10, name: 'Tandoori Chicken', price: 140, image: '../images/Tandoori Chicken.jpeg', rating: 5 },
  { id: 11, name: 'Aloo Paratha', price: 60, image: '../images/Aloo Paratha.jpeg', rating: 4 },
  { id: 12, name: 'Butter Naan', price: 40, image: '../images/Butter Naan.jpeg', rating: 4 },
  { id: 13, name: 'Chicken 65', price: 115, image: '../images/Chicken 65.jpeg', rating: 5 },
  { id: 14, name: 'Chicken Tikka', price: 125, image: '../images/Chicken Tikka.jpeg', rating: 5 },
  { id: 15, name: 'Egg Curry', price: 85, image: '../images/Egg Curry.jpeg', rating: 4 },
  { id: 16, name: 'Fish Fry', price: 135, image: '../images/Fish Fry.jpeg', rating: 4 },
  { id: 17, name: 'Gulab Jamun', price: 50, image: '../images/Gulab Jamun.jpeg', rating: 5 },
  { id: 18, name: 'Idli Sambhar', price: 65, image: '../images/Idli Sambhar.jpeg', rating: 4 },
  { id: 19, name: 'Jalebi', price: 55, image: '../images/Jalebi.jpeg', rating: 5 },
  { id: 20, name: 'Lassi', price: 45, image: '../images/Lassi.jpeg', rating: 4 },
  { id: 21, name: 'Masala Chai', price: 30, image: '../images/Masala Chai.jpeg', rating: 4 },
  { id: 22, name: 'Mutton Curry', price: 150, image: '../images/Mutton Curry.jpeg', rating: 5 },
  { id: 23, name: 'Prawn Curry', price: 140, image: '../images/Prawn Curry.jpeg', rating: 5 },
  { id: 24, name: 'Rajma Chawal', price: 80, image: '../images/Rajma Chawal.jpeg', rating: 4 },
  { id: 25, name: 'Rasgulla', price: 50, image: '../images/Rasgulla.jpeg', rating: 5 },
  { id: 26, name: 'Samosa', price: 40, image: '../images/Samosa.jpeg', rating: 4 },
  { id: 27, name: 'Vada Pav', price: 55, image: '../images/Vada Pav.jpeg', rating: 4 },
  { id: 28, name: 'Veg Biryani', price: 100, image: '../images/Veg Biryani.jpeg', rating: 4 },
  { id: 29, name: 'Veg Pulao', price: 90, image: '../images/Veg Pulao.jpeg', rating: 4 },
  { id: 30, name: 'Rajma Chawal', price: 80, image: '../images/Rajma Chawal.jpeg', rating: 4 },
  { id: 31, name: 'Paneer Tikka', price: 110, image: '../images/Paneer Tikka.jpeg', rating: 4 },
  { id: 32, name: 'Chicken Curry', price: 120, image: '../images/Chicken 65.jpeg', rating: 4 },
  { id: 33, name: 'Veg Pulao Special', price: 95, image: '../images/Veg Pulao.jpeg', rating: 4 },
  { id: 34, name: 'Masala Chai Special', price: 35, image: '../images/Masala Chai.jpeg', rating: 4 },
  { id: 35, name: 'Butter Naan Special', price: 45, image: '../images/Butter Naan.jpeg', rating: 4 },
  { id: 36, name: 'Chicken Tikka Special', price: 130, image: '../images/Chicken Tikka.jpeg', rating: 5 },
  { id: 37, name: 'Fish Fry Special', price: 140, image: '../images/Fish Fry.jpeg', rating: 4 },
  { id: 38, name: 'Gulab Jamun Special', price: 55, image: '../images/Gulab Jamun.jpeg', rating: 5 },
  { id: 39, name: 'Idli Sambhar Special', price: 70, image: '../images/Idli Sambhar.jpeg', rating: 4 },
  { id: 40, name: 'Jalebi Special', price: 60, image: '../images/Jalebi.jpeg', rating: 5 },
  { id: 41, name: 'Lassi Special', price: 50, image: '../images/Lassi.jpeg', rating: 4 },
  { id: 42, name: 'Masala Dosa Special', price: 80, image: '../images/Masala Dosa.jpeg', rating: 4 },
  { id: 43, name: 'Mutton Curry Special', price: 160, image: '../images/Mutton Curry.jpeg', rating: 5 },
  { id: 44, name: 'Prawn Curry Special', price: 150, image: '../images/Prawn Curry.jpeg', rating: 5 },
  { id: 45, name: 'Rajma Chawal Special', price: 90, image: '../images/Rajma Chawal.jpeg', rating: 4 },
  { id: 46, name: 'Rasgulla Special', price: 60, image: '../images/Rasgulla.jpeg', rating: 5 },
  { id: 47, name: 'Samosa Special', price: 50, image: '../images/Samosa.jpeg', rating: 4 },
  { id: 48, name: 'Vada Pav Special', price: 65, image: '../images/Vada Pav.jpeg', rating: 4 },
  { id: 49, name: 'Veg Biryani Special', price: 110, image: '../images/Veg Biryani.jpeg', rating: 4 },
  { id: 50, name: 'Paneer Butter Masala Special', price: 120, image: '../images/Paneer Butter Masala.jpeg', rating: 4 }
];

const Popular = ({ addToCart }) => {
  const [message, setMessage] = useState('');

  const handleAddToCart = (item) => {
    addToCart(item);
    setMessage(`${item.name} added to cart!`);
  };

  const handleCloseToast = () => {
    setMessage('');
  };

  return (
    <section className="popular" id="popular">
      <h1 className="heading">
        Popular <span>Foods</span>
      </h1>
      <Toast message={message} onClose={handleCloseToast} />
      <div className="popular-items-container">
        {popularItems.map((item) => (
          <div key={item.id} className="popular-item-card">
            <span className="price">₹{item.price.toFixed(2)}</span>
            <img src={item.image} alt={item.name} className="popular-item-image" />
            <h3>{item.name}</h3>
            <div className="rating">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={i < item.rating ? 'star active' : 'star'}>
                  ★
                </span>
              ))}
            </div>
            <button onClick={() => handleAddToCart(item)} className="add-to-cart-btn">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Popular;
