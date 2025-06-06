
// pages/ShowsDetails.jsx
import React, { useEffect, useState } from 'react';
import Shows from '../pages/Shows'; // Make sure this path matches your file structure

const ShowsDetails = () => {
  const [tvShows, setTvShows] = useState([]);

  useEffect(() => {
    // Dummy data for TV shows
    const dummyShows = [
      {
        name: 'Breaking Bad',
        type: 'show',
        category: 'Crime, Drama',
        price: 0,
        payment_date: 'N/A',
        release_date: '2008-01-20',
        rating: 'TV-MA',
        created_date: '2025-05-01',
        updated_date: '2025-06-01',
      },
      {
        name: 'Stranger Things',
        type: 'show',
        category: 'Sci-Fi, Thriller',
        price: 0,
        payment_date: 'N/A',
        release_date: '2016-07-15',
        rating: 'TV-14',
        created_date: '2025-05-01',
        updated_date: '2025-06-01',
      }
    ];

    setTvShows(dummyShows);
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h1 style={{ marginBottom: '1rem' }}>TV Shows</h1>
      {tvShows.map((show, index) => (
        <Shows key={index} item={show} />
      ))}
    </div>
  );
};

export default ShowsDetails;
