import React from 'react';
import { useParams } from 'react-router-dom'; // assuming you're using react-router

function ProductDetails({ data }) {
  const { itemId } = useParams();
  const item = data.find(item => item.id === itemId);

  if (!item) return <p>Item not found.</p>;

  const isMovie = item.type === 'movie';

  return (
    <div style={styles.container}>
      <h2>{item.name}</h2>
      {item.image_url && (
        <img src={item.image_url} alt={item.name} style={styles.image} />
      )}

      <p><strong>Type:</strong> {item.type}</p>
      <p><strong>Category:</strong> {item.category}</p>
      <p><strong>Price:</strong> ${item.price}</p>
      <p><strong>Payment Date:</strong> {item.payment_date}</p>

      {isMovie ? (
        <>
          <p><strong>Rating:</strong> {item.rating}</p>
          <p><strong>Release Date:</strong> {item.release_date}</p>
          <p><strong>Runtime:</strong> {item.runtime}</p>
          <p><strong>Description:</strong> {item.description}</p>
          <p><strong>Cast:</strong> {item.cast?.join(', ')}</p>
          {item.trailer_url && (
            <p>
              <a href={item.trailer_url} target="_blank" rel="noreferrer">
                Watch Trailer
              </a>
            </p>
          )}
        </>
      ) : (
        <>
          <p><strong>Plan ID:</strong> {item.plan_id || 'N/A'}</p>
          <p><strong>Description:</strong> {item.description}</p>
        </>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '700px',
    margin: 'auto',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '4px',
    marginBottom: '20px'
  }
};

export default ProductDetails;
