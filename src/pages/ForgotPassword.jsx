import React, { useState } from 'react';


function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();


    console.log(`Reset link sent to: ${email}`);
    setSubmitted(true);
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-box">
        <h2 id='text'>Forgot Password</h2>

        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Enter your email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Send Reset Link</button>
          </form>
        ) : (
          <p>
            A password reset link has been sent to <strong>{email}</strong>. Please check your inbox.
          </p>
        )}
      </div>
    </div>
  );
}

export default ForgotPassword;
