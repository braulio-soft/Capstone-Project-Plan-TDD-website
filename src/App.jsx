import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Cart from './pages/Cart';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import CheckOut from './pages/CheckOut';
import Usersform from './pages/Usersform';
import UserProfiles from './pages/UserDetails';
import Home from './pages/Home';

const mockData = {
  heroBanner: {
    backgroundImage: 'https://via.placeholder.com/800x300',
    title: 'Welcome to MovieWorld!',
    subtitle: 'Stream or Rent your favorites',
    ctaText: 'Explore Now',
    ctaLink: '/products'
  },
  featuredMovies: [
    { id: 1, title: 'Inception', image: 'https://via.placeholder.com/150' },
    { id: 2, title: 'Interstellar', image: 'https://via.placeholder.com/150' },
  ],
  categories: [
    { id: 1, name: 'Sci-Fi', slug: 'sci-fi' },
    { id: 2, name: 'Drama', slug: 'drama' },
  ],
  recommended: [
    { id: 3, title: 'The Matrix', image: 'https://via.placeholder.com/150' },
  ],
  subscriptionPromo: {
    heading: 'Go Premium',
    description: 'Unlimited access to top-rated films.',
    link: '/subscribe',
    price: '$9.99/mo'
  }
};

function App() {
  return (
    <>
       
      <Navbar />
      <Routes>
        <Route path='/' element={<Home data={mockData} />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Products' element={<Products />} />
        <Route path='/ProductDetails/:id' element={<ProductDetails />} />
        <Route path='/CheckOut' element={<CheckOut />} />
        <Route path='/Usersform' element={<Usersform />} />
        <Route path='/UserProfiles/:id' element={<UserProfiles />} /> 
      </Routes>
    
    </>

  );
}


export default App;