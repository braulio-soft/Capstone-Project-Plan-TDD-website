
// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#333', color: '#fff' }}>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '15px', margin: 0 }}>
        <li><Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link></li>
        <li><Link to="/login" style={{ color: '#fff', textDecoration: 'none' }}>Login</Link></li>
        <li><Link to="/signUp" style={{ color: '#fff', textDecoration: 'none' }}>Sign Up</Link></li>
        <li><Link to="/cart" style={{ color: '#fff', textDecoration: 'none' }}>Cart</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
































// // import './navbar.css'
// import { Link } from 'react-router';


// export default function Navbar() {
//   return (
//     <nav>
//       <h1>My App</h1>
//       <ul >
//         <li><Link to="/" >Home</Link></li>
//         <li><Link to="/login">Login</Link></li>
//         <li><Link to="/signup">Signup</Link></li>
//          <li><Link to="/cart">Cart</Link></li>
//       </ul>
//     </nav>
//   );
// }

// console.log("Navbar loaded");
