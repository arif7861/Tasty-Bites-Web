import React from 'react';
import { useNavigate } from 'react-router-dom';

const specialItems = [
  {
    id: 'tasty-burger',
    image: 'images/s-img-1.jpg',
    icon: 'images/s-1.png',
    title: 'tasty burger',
    description: 'in our Tasty Burger, a perfect blend of succulent, premium beef, fresh, crisp vegetables, and our signature sauce, all nestled in a perfectly toasted bun. Each bite promises a burst of mouthwatering flavors that will leave you craving more. Experience burger perfection today!',
  },
  {
    id: 'tasty-pizza',
    image: 'images/s-img-2.jpg',
    icon: 'images/s-2.png',
    title: 'tasty pizza',
    description: 'Savor our Tasty Pizza, crafted with a crispy, golden crust, rich tomato sauce, and the finest, freshest toppings. Melted cheese and a perfect blend of herbs make every slice a delightful experience. Enjoy a slice of pizza perfection!',
  },
  {
    id: 'cold-ice-cream',
    image: 'images/s-img-3.jpg',
    icon: 'images/s-3.png',
    title: 'cold ice-cream',
    description: 'Treat yourself to our Cold Ice Cream, a creamy, dreamy delight that melts in your mouth. Choose from a variety of rich, indulgent flavors, each crafted to perfection. Refreshingly cool and irresistibly smooth, it\'s the perfect treat for any time of day.',
  },
  {
    id: 'cold-drinks',
    image: 'images/s-img-4.jpg',
    icon: 'images/s-4.png',
    title: 'cold drinks',
    description: 'Quench your thirst with our Cold Drinks, a refreshing selection of beverages that offer a burst of cool, invigorating flavors. Whether you prefer classic sodas, sparkling waters, or fruity refreshments, each sip is a delightful way to stay cool and refreshed. Enjoy the chill!',
  },
  {
    id: 'tasty-sweets',
    image: 'images/s-img-5.jpg',
    icon: 'images/s-5.png',
    title: 'tasty sweets',
    description: 'Delight in our Tasty Sweets, a heavenly assortment of desserts crafted to satisfy your sweet tooth. From decadent cakes and pastries to creamy puddings and confections, each treat is made with the finest ingredients for an indulgent experience. Enjoy the sweetness in every bite!',
  },
  {
    id: 'tasty-breakfast',
    image: 'images/s-img-6.jpg',
    icon: 'images/s-6.png',
    title: 'tasty breakfast',
    description: 'Start your day right with our Tasty Breakfast, featuring a delicious array of morning favorites. From fluffy pancakes and golden waffles to hearty omelets and fresh fruit bowls, every dish is made to energize and satisfy. Enjoy a breakfast that\'s both delicious and nourishing!',
  },
];

const Speciality = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/speciality/${id}`);
  };

  return (
    <section className="speciality" id="speciality">
      <h1 className="heading"> our's <span>special</span> </h1>
      <div className="box-container">
        {specialItems.map((item) => (
          <div className="box" key={item.id} onClick={() => handleClick(item.id)} style={{ cursor: 'pointer' }}>
            <img className="image" src={item.image} alt={item.title} />
            <div className="content">
              <img src={item.icon} alt={item.title} />
              <h3>{item.title}</h3>
              <p><span>{item.description}</span></p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Speciality;
