import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Home from './pages/Login';
import Login from './pages/Login';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import Products from './pages/Products';
import CheckOut from './pages/CheckOut';
import UserDetails from './pages/UserDetails';
import Users from './pages/Users';
import SignUp from './pages/SignUp';

function App() {
  return (
   <>
   <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/cart' element={<Cart />} />

        {/* Uncomment when ready */}
        {/* <Route path='/products' element={<Products />} />
        <Route path='/product/:id' element={<ProductDetails />} />
        <Route path='/checkout' element={<CheckOut />} />
        <Route path='/users' element={<Users />} />
        <Route path='/user/:id' element={<UserDetails />} /> */}
      </Routes>
   </>
      
    
  );
}

export default App;
