import React, { useEffect, useState } from 'react';
import Movies from '../pages/Movies';
import './MoviesDetails.css'; // CSS file for styles

const MoviesDetails = () => {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        // Replace these URLs with your real API endpoints
        const itemsResponse = await fetch('/api/items');
        if (!itemsResponse.ok) throw new Error('Failed to fetch items');
        const itemsData = await itemsResponse.json();

        const categoriesResponse = await fetch('/api/categories');
        if (!categoriesResponse.ok) throw new Error('Failed to fetch categories');
        const categoriesData = await categoriesResponse.json();

        setItems(itemsData);
        setCategories(categoriesData);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error loading data: {error}</p>;

  return (
    <div className="container">
      <aside className="sidebar">
        <h2>Categories</h2>
        <ul>
          {categories.map((cat) => (
            <li key={cat.id}>
              <a href={`/category/${cat.slug}`}>{cat.name}</a>
            </li>
          ))}
        </ul>
      </aside>

      <main className="main-content">
        <h1>Movies & Subscriptions</h1>
        <div className="items-grid">
          {items.map((item, i) => (
            <div key={i} className="item-card">
              <Movies item={item} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default MoviesDetails;



