import React, { useState } from 'react';
import './SignUp.css';


function SignUpForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    plan: ''
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    if (name === 'plan' && value) {
      setError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.plan) {
      setError('Please select a pricing plan.');
      return;
    }

    setError('');

    const planPrices = {
      standard: 10.99,
      level1: 11.99,
      level2: 13.99
    };

    navigate('/checkOut', {
      state: {
        ...formData,
        price: planPrices[formData.plan],
        title: `${formData.plan.charAt(0).toUpperCase() + formData.plan.slice(1)} Plan`
      }
    });
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label><br />
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Last Name:</label><br />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label><br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Password:</label><br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Choose a Plan:</label><br />
          <select
            name="plan"
            value={formData.plan}
            onChange={handleChange}
            required
          >
            <option value="">-- Select a plan --</option>
            <option value="standard">Standard - $10.99</option>
            <option value="level1">Level 1 - $11.99</option>
            <option value="level2">Level 2 - $13.99</option>
          </select>
        </div>
        <button type="submit">Join the family</button>
      </form>
    </div>

    

  );
}

export default SignUpForm;
