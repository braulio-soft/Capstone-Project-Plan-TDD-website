import React from 'react';
import { useNavigate } from 'react-router-dom';

function Cart({ cartItems = [], onRemoveItem, onUpdateQuantity }) {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const total = cartItems
    .reduce((sum, item) => sum + item.price * (item.quantity || 1), 0)
    .toFixed(2);

  return (
    <div style={{ maxWidth: '800px', margin: 'auto', padding: '20px' }}>
      <h2 className='text'>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className='text'>Your cart is empty.</p>
      ) : (
        <table width="100%" border="1" cellPadding="10" style={{ borderCollapse: 'collapse' }}>
          <thead className='text'>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Subtotal</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(item => (
              <tr key={item.id}>
                <td>{item.title || item.name}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity || 1}
                    onChange={(e) => onUpdateQuantity(item.id, parseInt(e.target.value))}
                    style={{ width: '60px' }}
                  />
                </td>
                <td>${(item.price * (item.quantity || 1)).toFixed(2)}</td>
                <td>
                  <button onClick={() => onRemoveItem(item.id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <h3 className='text' >Total: ${total}</h3>
        {cartItems.length > 0 && (
          <button className='text' onClick={handleCheckout}>Proceed to Checkout</button>
        )}
      </div>
    </div>
  );
}

export default Cart;
