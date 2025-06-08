import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
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

//HomePage
const Data = {
  heroBanner: {
    backgroundImage: 'url-to-image.jpg',
    title: 'Welcome to the Movie House Family!',
    subtitle: 'Lets get you started. Check out our featured films and Staff Picks for the month!'
    // ctaLink: '/new-link',
    // ctaText: 'Click here for listings'
  },
  
  featuredMovies: [
    { id: 1, image: '/movieimages/GrownUps.jpg', title: 'Grown Ups' },
    { id: 2, image:  '/movieimages/WeretheMillers.jpg', title: 'We are the Millers' },
    { id: 3, image:  '/movieimages/Friday.jpg', title: 'Friday' }
    
  ],

  recommended: [
    { id: 1, title: 'The Dark Knight', image: '/movieimages/TheDarkKnight.jpg' },
    { id: 2, title: 'Sinners', image: '/movieimages/Sinners.jpg' },
    { id: 3, title: 'The Matrix', image: '/movieimages/Matrix.jpg' }
  ],
  subscriptionPromo: {
    heading: "Our Hottest Plan",
    description: "Stream your favorite exclusive movies and shows while enjoying an ad-free experience as a Level 2 member.",
    link: "Get Level 2 and see a better view",
    price: "first week free then $13.99/month"
  }
};



function App() {
  return (
    <>
       
      <Navbar />
      <div style={{ paddingTop: '70px' }}>
        <Routes>
        <Route path='/' element={<Home data={Data} />} />
        <Route path='/MyAccount' element={<MyAccount />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/Movies' element={<MoviesDetails />} />
        <Route path='/Shows' element={<ShowsDetails />} />
        <Route path='/CheckOut' element={<CheckOut />} />
        <Route path='/Usersform' element={<Usersform />} />
        <Route path='/UserProfiles/:id' element={<UserProfiles />} /> 
        <Route path='/MoviesDetails/:id' element={<MoviesDetails />} />
         <Route path='/Pricingplans' element={<Pricingplans />} />
          
        
      </Routes>
</div>

    
    </>

  );
}


export default App;

