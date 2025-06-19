import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';


// Helper function to detect card brand
const getCardBrand = (number) => {
  if (/^4/.test(number)) return "Visa";
  if (/^5[1-5]/.test(number)) return "Mastercard";
  if (/^3[47]/.test(number)) return "American Express";
  if (/^6(?:011|5)/.test(number)) return "Discover";
  return "";
};

function Checkout() {
  const location = useLocation();
  const { state } = location;

  const planItem = state?.price
    ? [{ id: 1, title: state.title, price: state.price }]
    : [];

  const [billingInfo, setBillingInfo] = useState({
    name: state?.firstName || '',
    email: state?.email || '',
    cardNumber: '',
    expiration: '',
    cvv: '',
    cardBrand: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "cardNumber") {
      const cleaned = value.replace(/\D/g, '');
      const brand = getCardBrand(cleaned);

      setBillingInfo(prev => ({
        ...prev,
        cardNumber: cleaned,
        cardBrand: brand
      }));
    } else {
      setBillingInfo(prev => ({ ...prev, [name]: value }));
    }
  };

  const total = planItem.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Processing payment for:", billingInfo);
    console.log("Items:", planItem);
    alert("Purchase confirmed!");
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
      <h2>Checkout</h2>

      <section>
        <h3>Your Items</h3>
        {planItem.length === 0 ? (
          <p>No plan selected.</p>
        ) : (
          <ul>
            {planItem.map(item => (
              <li key={item.id}>
                {item.title} — ${item.price.toFixed(2)}
              </li>
            ))}
          </ul>
        )}
        <p><strong>Total:</strong> ${total}</p>
      </section>

      <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
        <h3>Billing Information</h3>
        <div>
          <label>Name</label><br />
          <input
            type="text"
            name="name"
            value={billingInfo.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Email</label><br />
          <input
            type="email"
            name="email"
            value={billingInfo.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>Card Number</label><br />
          <input
            type="text"
            name="cardNumber"
            value={billingInfo.cardNumber}
            onChange={handleInputChange}
            required
            maxLength={16}
          />
          {billingInfo.cardBrand && (
            <small style={{ color: 'gray' }}>Detected: {billingInfo.cardBrand}</small>
          )}
        </div>
        <div>
          <label>Expiration (MM/YY)</label><br />
          <input
            type="text"
            name="expiration"
            value={billingInfo.expiration}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label>CVV</label><br />
          <input
            type="text"
            name="cvv"
            value={billingInfo.cvv}
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit" style={{ marginTop: '20px' }}>
          Confirm Purchase
        </button>
      </form>
    </div>
  );
}

export default Checkout;

