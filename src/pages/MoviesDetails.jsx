
import React, { useEffect, useState } from 'react';
import Movies from '../pages/Movies';

const MoviesDetails = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
  
    const data = [
      {
        name: 'The Batman',
        type: 'movie',
        category: 'Action',
        price: 14.99,
        payment_date: '2025-06-01',
        rating: 'PG-13',
        release_date: '2022-03-04',
        created_date: '2025-05-01',
        updated_date: '2025-06-01',
      },
      {
        name: 'Netflix Subscription',
        type: 'subscription',
        category: 'Streaming',
        price: 12.99,
        payment_date: '2025-06-03',
        plan_id: 'NET123',
        created_date: '2025-05-01',
        updated_date: '2025-06-01',
      }
    ];

    setItems(data);
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Movies & Subscriptions</h1>
      {items.map((item, index) => (
        <Movies key={index} item={item} />
      ))}
    </div>
  );
};

export default MoviesDetails;

