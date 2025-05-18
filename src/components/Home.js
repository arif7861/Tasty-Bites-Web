import React from 'react';
import FoodSuggestions from './FoodSuggestions';
import Review from './Review';
import Footer from './Footer';

const Home = (props) => {
  return (
    <div>
      <FoodSuggestions addToCart={props.addToCart} />
      <Review />
      <Footer />
    </div>
  );
};

export default Home;
