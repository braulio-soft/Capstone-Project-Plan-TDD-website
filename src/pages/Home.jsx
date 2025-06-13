import './Home.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import api from '../api/axios';

const data = {
  heroBanner: {
    title: 'sometjini',
    subtitle: 'Lets get you started. Check out our featured films and Staff Picks for the month!',
  },
  featuredMovies: [
    { id: 1, image: '/movieimages/GrownUps.jpg', title: '' },
    { id: 2, image: '/movieimages/WeretheMillers.jpg', title: '' },
    { id: 3, image: '/movieimages/Friday.jpg', title: '' },
  ],
  recommended: [
    { id: 1, title: '', image: '/movieimages/TheDarkKnight.jpg' },
    { id: 2, title: '', image: '/movieimages/Sinners.jpg' },
    { id: 3, title: '', image: '/movieimages/Matrix.jpg' },
  ],
  subscriptionPromo: {
    heading: 'Our Hottest Plan 🔥',
    description:
      'Stream your favorite exclusive movies and shows while enjoying an ad-free experience as a Level 2 member.',
    link: 'Get Level 2 and see a better view',
    price: 'first week free then $13.99/month',
  },
};

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get('/products/movies');
        setMovies(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="home">
      <section className="hero-banner">
        <div className="hero-content">
          <h1>{data.heroBanner.title}</h1>
          <p>{data.heroBanner.subtitle}</p>
        </div>
      </section>

      <section className="featured-section">
        <h2 className="titles">Featured Movies</h2>
        <div className="movie-row">
          {movies.map(movie => (
            <div key={movie.id} className="movie-card">

              <p>{movie.name}</p>
              <p>{movie.category}</p>
              <p>{movie.price}</p>
              <p>{movie.rating}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="recommended-section">
        <h2 className="titles">Staff Picks This Month</h2>
        <div className="movie-row">
          {data.recommended.map(movie => (
            <div key={movie.id} className="movie-card">
              <img src={movie.image} alt={movie.title} />
              <p>{movie.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="subscription-section">
        <div className="subscription-content">
          <h3>{data.subscriptionPromo.heading}</h3>
          <p>{data.subscriptionPromo.description}</p>
          <Link className="subscribe-link" to="/SignUp">
            Subscribe Now - {data.subscriptionPromo.price}
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
