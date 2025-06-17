import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MyAccount.css';

function MyAccount() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPlan, setCurrentPlan] = useState('standard');
  const [selectedUpgrade, setSelectedUpgrade] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const planPrices = {
    standard: 10.99,
    level1: 11.99,
    level2: 13.99
  };

  const planLabels = {
    standard: 'Standard - $10.99',
    level1: 'Level 1 - $11.99',
    level2: 'Level 2 - $13.99'
  };

  const handleChange = ({ target: { name, value } }) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías validar contra una base de datos o endpoint
    setIsLoggedIn(true);
  };

  const handleUpgradeChange = (e) => {
    setSelectedUpgrade(e.target.value);
    setError('');
  };

  const handleUpgradeSubmit = (e) => {
    e.preventDefault();

    if (!selectedUpgrade || selectedUpgrade === currentPlan) {
      setError('Please select a different plan to upgrade.');
      return;
    }

    setError('');
    setCurrentPlan(selectedUpgrade);
    alert(`Successfully upgraded to the ${selectedUpgrade} plan!`);

    navigate('/checkOut', {
      state: {
        plan: selectedUpgrade,
        title: planLabels[selectedUpgrade],
        price: planPrices[selectedUpgrade]
      }
    });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        {!isLoggedIn ? (
          <>
            <h2>Account Login</h2>
            <form onSubmit={handleSubmit}>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <button className="loginbttn" type="submit">Login</button>
            </form>

            <div className="forgot-links">
              <p onClick={() => navigate('/ForgotPassword')} className="clickable">
                Forgot Password?
              </p>
            </div>
          </>
        ) : (
          <>
            <h2>Welcome Back</h2>
            <p style={{ textAlign: 'center', marginBottom: '1rem' }}>
              You are currently subscribed to the <strong>{planLabels[currentPlan]}</strong> plan.
            </p>

            <form onSubmit={handleUpgradeSubmit}>
              <label>Upgrade Your Plan:</label>
              <select value={selectedUpgrade} onChange={handleUpgradeChange}>
                <option value="">-- Select a plan --</option>
                {Object.entries(planLabels).map(([key, label]) => (
                  <option key={key} value={key}>{label}</option>
                ))}
              </select>

              {error && <p className="error-message">{error}</p>}

              <button
                type="submit"
                disabled={!selectedUpgrade || selectedUpgrade === currentPlan}
              >
                Upgrade Plan
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default MyAccount;
