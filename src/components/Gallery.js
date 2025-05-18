import React from 'react';

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <h1 className="heading">our food <span>gallery</span></h1>
      <div className="box-container">
        <div className="box">
          <img src="images/g-1.jpg" alt="" />
          <div className="content">
            <h3>Tasty Burger</h3>
            <p>Absolutely delicious! The Tasty Burger was juicy and flavorful, easily the best burger I've had in a long time.</p>
            <a href="/#order" className="btn">order now</a>
          </div>
        </div>
        <div className="box">
          <img src="images/g-3.jpg" alt="" />
          <div className="content">
            <h3>tasty food</h3>
            <p>Breakfast here is amazing! The pancakes were fluffy, and the omelet was packed with fresh ingredients. A great way to start the day!</p>
            <a href="/#order" className="btn">order now</a>
          </div>
        </div>
        <div className="box">
          <img src="images/g-4.jpg" alt="" />
          <div className="content">
            <h3>TastyBites</h3>
            <p>The cupcakes from TastyBites are absolutely delightful! They're moist, flavorful, and beautifully decorated. Each bite is a little piece of heaven. I can't resist ordering them for every special occasion!</p>
            <a href="/#order" className="btn">order now</a>
          </div>
        </div>
        <div className="box">
          <img src="images/g-5.jpg" alt="" />
          <div className="content">
            <h3>Tasty Sweets</h3>
            <p>The Tasty Sweets are simply divine. Every bite of the cake was moist and delicious. A real treat!</p>
            <a href="/#order" className="btn">order now</a>
          </div>
        </div>
        <div className="box">
          <img src="images/p-5.jpg" alt="" />
          <div className="content">
            <h3>Cold Drinks</h3>
            <p>The Cold Drinks are so refreshing and full of flavor. They were the perfect complement to my meal.</p>
            <a href="/#order" className="btn">order now</a>
          </div>
        </div>
        <div className="box">
          <img src="images/g-8.jpg" alt="" />
          <div className="content">
            <h3>Tasty chocolate</h3>
            <p>Tasty chocolate from TastyBites are simply delicious! They never fail to satisfy my sweet cravings. Perfect for indulging or sharing with friends</p>
            <a href="/#order" className="btn">order now</a>
          </div>
        </div>
        <div className="box">
          <img src="images/p-6.jpg" alt="" />
          <div className="content">
            <h3>tasty Cold Ice Cream</h3>
            <p> Cold Ice Cream from TastyBites is a real treat! Creamy, smooth, and oh-so-satisfying. Whether you're cooling off on a hot day or just need a sweet pick-me-up, their ice cream hits the spot every time. Definitely a must-try!</p>
            <a href="/#order" className="btn">order now</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
