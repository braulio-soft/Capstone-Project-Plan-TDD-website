import './Home.css';
import { Link } from 'react-router-dom';



function Home({data }) {
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
              <img
                src={movie.image || '/movieimages/image.png'}
                alt={movie.name}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/movieimages/image.png';
                }}
              />

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

