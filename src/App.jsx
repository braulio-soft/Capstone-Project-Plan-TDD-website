import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MyAccount from './pages/MyAccount';
import SignUp from './pages/SignUp';
import Cart from './pages/Cart';
import Movies from './pages/Movies';
import Shows from './pages/Shows';
import MoviesDetails from './pages/MoviesDetails';
import ShowsDetails from './pages/ShowsDetails';
import CheckOut from './pages/CheckOut';
import Usersform from './pages/Usersform';
import UserProfiles from './pages/UserDetails';
import Home from './pages/Home';
import Pricingplans from './pages/Pricingplans';
import './App.css';




function App() {
  return (
    <>
    <Header />
      <div style={{ paddingTop: '70px' }}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/MyAccount" element={<MyAccount />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/Shows" element={<Shows />} />
          <Route path="/CheckOut" element={<CheckOut />} />
          <Route path="/Usersform" element={<Usersform />} />
          <Route path="/UserProfiles/:id" element={<UserProfiles />} />
          <Route path="/MoviesDetails/:id" element={<MoviesDetails />} />
          <Route path="/Pricingplans" element={<Pricingplans />} />
        </Routes>
      </div>
      <Footer />
    </>
      
    
  );
}

export default App;


