

function Products({ item }) {
  if (!item) return null;

  const isMovie = item.type === 'movie';
  const isSubscription = item.type === 'subscription';

  return (
    <div style={styles.card}>
      <h3>{item.name}</h3>
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
}

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    marginBottom: '16px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 6px rgba(0,0,0,0.05)'
  }
};

export default Products;
