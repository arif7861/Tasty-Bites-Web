import React, { useState } from 'react';

const reviewsData = [
  {
    id: 1,
    name: 'Priya Patel',
    rating: 4,
    text: 'The Tasty Sweets Are Simply Divine. Every Bite Of The Cake Was Moist And Delicious. A Real Treat!',
    image: '/images/pic1.png',
  },
  {
    id: 2,
    name: 'Rahul Gupta',
    rating: 4,
    text: 'TastyBites Breakfast Is Truly Satisfying! They Always Hit The Spot For Me.',
    image: '/images/pic2.webp',
  },
  {
    id: 3,
    name: 'Meera Pandi',
    rating: 4,
    text: "It's The Ultimate Comfort Food To Start Your Day With. Highly Recommend!",
    image: '/images/pic3.jpg',
  },
];

const Review = () => {
  const [reviews, setReviews] = useState(reviewsData);
  const [name, setName] = useState('');
  const [rating, setRating] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !rating || !text) return;
    const newReview = {
      id: reviews.length + 1,
      name,
      rating: parseInt(rating),
      text,
      image: '/images/default-user.png',
    };
    setReviews([...reviews, newReview]);
    setName('');
    setRating('');
    setText('');
  };

  return (
    <section className="review-section" id="review">
      <h1 className="heading">
        Our Customers <span>Reviews</span>
      </h1>
      <div className="review-cards">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <img src={review.image} alt={review.name} />
            <h3>{review.name}</h3>
            <div className="stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={i < review.rating ? 'active' : ''}>
                  ★
                </span>
              ))}
            </div>
            <p>{review.text}</p>
          </div>
        ))}
      </div>
      <h2>Add a Review</h2>
      <form onSubmit={handleSubmit} className="review-form">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
        >
          <option value="">Select Rating</option>
          {[5, 4, 3, 2, 1].map((r) => (
            <option key={r} value={r}>
              {r} Star{r > 1 ? 's' : ''}
            </option>
          ))}
        </select>
        <textarea
          placeholder="Your Review"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <button type="submit">Submit Review</button>
      </form>
    </section>
  );
};

export default Review;
