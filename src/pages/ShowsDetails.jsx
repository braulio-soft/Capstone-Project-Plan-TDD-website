
// pages/ShowsDetails.jsx
import React, { useEffect, useState } from 'react';
import Shows from '../pages/Shows'; // Ensure this path is correct

const ShowsDetails = () => {
  const [tvShows, setTvShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchShows() {
      try {
        setLoading(true);

        // Replace with your actual backend API endpoint
        const response = await fetch('/api/shows');
        if (!response.ok) throw new Error('Failed to fetch TV shows');
        
        const data = await response.json();
        setTvShows(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchShows();
  }, []);

  if (loading) return <p>Loading TV shows...</p>;
  if (error) return <p>Error loading shows: {error}</p>;

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
