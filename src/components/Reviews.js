import React from 'react';

const reviews = [
  {
    id: 1,
    name: 'Priya Patel',
    rating: 4,
    text: 'The Tasty Sweets Are Simply Divine. Every Bite Of The Cake Was Moist And Delicious. A Real Treat!',
    image: 'images/review1.jpg',
  },
  {
    id: 2,
    name: 'Rahul Gupta',
    rating: 4,
    text: 'TastyBites Breakfast Is Truly Satisfying! They Always Hit The Spot For Me.',
    image: 'images/review2.jpg',
  },
  {
    id: 3,
    name: 'Meera Pandi',
    rating: 4,
    text: "It's The Ultimate Comfort Food To Start Your Day With. Highly Recommend!",
    image: 'images/review3.jpg',
  },
];

const Reviews = () => {
  return (
    <section style={{ padding: '40px 20px', textAlign: 'center' }}>
      <h2 style={{ color: '#d32f2f', marginBottom: '30px' }}>Our Customers <span style={{ color: '#555' }}>Reviews</span></h2>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
        {reviews.map(review => (
          <div key={review.id} style={{
            width: '250px',
            backgroundColor: '#004d66',
            color: 'white',
            borderRadius: '10px',
            padding: '20px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            textAlign: 'center',
            position: 'relative'
          }}>
            <img src={review.image} alt={review.name} style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              border: '4px solid white',
              position: 'absolute',
              top: '-40px',
              left: 'calc(50% - 40px)'
            }} />
            <h3 style={{ marginTop: '50px', marginBottom: '10px' }}>{review.name}</h3>
            <div style={{ marginBottom: '10px' }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} style={{ color: i < review.rating ? '#d32f2f' : '#ccc' }}>★</span>
              ))}
            </div>
            <p style={{ fontSize: '0.9rem' }}>{review.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
