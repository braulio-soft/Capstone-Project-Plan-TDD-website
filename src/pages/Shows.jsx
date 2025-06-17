import { useEffect, useState } from 'react';
import api from '../api/axios';

function ShowsPage() {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await api.get('/products/shows');
        setShows(response.data);
      } catch (err) {
        console.error('Error fetching shows:', err);
        setError('Failed to load shows');
      } finally {
        setLoading(false);
      }
    };

    fetchShows();
  }, []);

  return (
    <div style={styles.pageContainer}>
      <h1 style={styles.title}>Shows</h1>

      {loading && <p>Loading shows...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {!loading && !error && (
        <>
          {shows.length === 0 ? (
            <p>No shows found.</p>
          ) : (
            <div style={styles.horizontalScroll}>
              {shows.map((item) => {
                if (!item) return null;

                const isMovie = item.type === 'movie';
                const isSubscription = item.type === 'subscription';

                return (
                  <div key={item.id} style={styles.card}>
                    <h3>{item.name}</h3>

                    {item.image && (
                      <img
                        src={item.image || '/movieimages/image.png'}
                        alt={item.name}
                        style={styles.image}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = '/movieimages/image.png';
                        }}
                      />
                    )}

                    <p><strong>Type:</strong> {item.type}</p>
                    <p><strong>Category:</strong> {item.category}</p>
                    <p><strong>Price:</strong> ${item.price}</p>
                    <p><strong>Payment Date:</strong> {item.payment_date}</p>

                    {isMovie && (
                      <>
                        <p><strong>Rating:</strong> {item.rating || 'N/A'}</p>
                        <p><strong>Release Date:</strong> {item.release_date}</p>
                      </>
                    )}

                    {isSubscription && (
                      <p><strong>Plan ID:</strong> {item.plan_id || 'N/A'}</p>
                    )}

                    <small>Created: {item.created_date}</small><br />
                    <small>Updated: {item.updated_date}</small>
                  </div>
                );
              })}
            </div>
          )}
        </>
      )}
    </div>
  );
}

const styles = {
  pageContainer: {
    padding: '20px',
    backgroundColor: '#fff',
    minHeight: '100vh',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '20px',
    color: '#222',
    textAlign: 'center',
  },
  horizontalScroll: {
    display: 'flex',
    overflowX: 'auto',
    paddingBottom: '10px',
    gap: '16px',
    scrollSnapType: 'x mandatory',
  },
  card: {
    flex: '0 0 auto',
    minWidth: '280px',
    maxWidth: '280px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
    color: '#333',
    scrollSnapAlign: 'start',
  },
  image: {
    width: '100%',
    maxHeight: '180px',
    objectFit: 'cover',
    marginBottom: '12px',
    borderRadius: '4px',
  },
};

export default ShowsPage;
