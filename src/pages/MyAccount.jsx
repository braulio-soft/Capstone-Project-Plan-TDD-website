import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  


import './MyAccount.css'; 

function MyAccount() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPlan, setCurrentPlan] = useState('standard');
  const [selectedUpgrade, setSelectedUpgrade] = useState('');
  const navigate = useNavigate();  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true); 
  };

  const handleUpgradeChange = (e) => setSelectedUpgrade(e.target.value);

  const handleUpgradeSubmit = (e) => {
    e.preventDefault();

    // If "Not at this time" or same plan selected
    if (!selectedUpgrade || selectedUpgrade === currentPlan) {
      alert('No upgrade selected. Redirecting to Home.');
      navigate('/');  // Redirect to home
      return;
    }

    // Upgrade selected
    setCurrentPlan(selectedUpgrade);
    alert(`Successfully upgraded to the ${selectedUpgrade} plan!`);

   navigate('/checkOut', { state: { plan: selectedUpgrade } });  // Redirect to checkout
  };

  return (
    <div className="login-container">
      <div className="login-box">
        {!isLoggedIn ? (
          <>
            <h2>Login</h2>
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
              <button type="submit">Login</button>
            </form>
          </>
        ) : (
          <>
            <h2>Welcome!</h2>
            <p style={{ textAlign: 'center' }}>
              You're currently on the <strong>{currentPlan}</strong> plan.
            </p>
            <form onSubmit={handleUpgradeSubmit}>
              <label>Upgrade Your Plan:</label>
              <select value={selectedUpgrade} onChange={handleUpgradeChange}>
                <option value="">-- Not at this time --</option>
                <option value="standard">Standard - $10.99</option>
                <option value="level1">Level 1 - $11.99</option>
                <option value="level2">Level 2 - $13.99</option>
              </select>
              <button type="submit">Upgrade Plan</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default MyAccount;


