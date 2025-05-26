import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Login'
import Login from './pages/Login'
import Cart from './pages/Cart'
import ProductDetails from './pages/ProductDetails'
import Products from './pages/Products'
import CheckOut from './pages/CheckOut'
import UserDetails from './pages/UserDetails'
import Users from './pages/Users'
import SignUp from './pages/SignUp'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signUp' element={<SignUp/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/products' element={<Products/>}></Route>
      <Route path='/product/:id' element={<ProductDetails/>}></Route>
      <Route path='/checkout' element={<CheckOut/>}></Route>
      <Route path='/users' element={<Users/>}></Route>
      <Route path='/user/:id' element={<UserDetails/>}></Route>
    </Routes>
  )
}

export default App
