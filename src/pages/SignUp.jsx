
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.plan) {
      alert('Please select a pricing plan.');
      return;
    }

    console.log('Sign Up:', formData);
    // send to API or handle validation here
  };

  return (
    <div className='SignUp-container'>
          <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2 className='text'>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label className='text'>First Name:</label><br />
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className='text'>Last Name:</label><br />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className='text'>Email:</label><br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className='text'>Password:</label><br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className='text'>Choose a Plan:</label><br />
          <select
            name="plan"
            value={formData.plan}
            onChange={handleChange}
            required
          >
            <option className='list' value="">-- Select a plan --</option>
            <option className='list' value="standard">Standard - $10.99</option>
            <option className='list' value="level1">Level 1 - $11.99</option>
            <option className='list' value="level2">Level 2 - $13.99</option>
          </select>
        </div>
        <br></br>
        <br></br>
        <button className='text' type="submit">Join the family</button>
      </form>
    </div>

    </div>

  );
}

export default SignUpForm;
