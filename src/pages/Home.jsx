import './Home.css';



function Home({ data }) {
  return (
    <div className="home">

      <section className="hero-banner" style={{ backgroundImage: `url(${data.heroBanner.backgroundImage})` }}>
        <div className="hero-content">
          <h1>{data.heroBanner.title}</h1>
          <p>{data.heroBanner.subtitle}</p>
          {data.heroBanner.ctaLink && data.heroBanner.ctaText && (
            <a className="hero-cta" href={data.heroBanner.ctaLink}>{data.heroBanner.ctaText}</a>
          )}
        </div>
      </section>

      <section className="featured-section">
        <h2 classname="titles">Featured Movies</h2>
        <div className="movie-row featured-movies">
          {data.featuredMovies.map(movie => (
            <div key={movie.id} className="movie-card">
              <img src={movie.image} alt={movie.title} width="150" />
              <p>{movie.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="recommended-section">
        <h2 classname="titles">Staff Picks This Month</h2>
        <div className="movie-row recommended-movies">
          {data.recommended.map(movie => (
            <div key={movie.id} className="movie-card">
              <img src={movie.image} alt={movie.title} width="150" />
              <p>{movie.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="subscription-section">
        <div className="subscription-content">
          <h3>{data.subscriptionPromo.heading}</h3>
          <p>{data.subscriptionPromo.description}</p>
          <a className="subscribe-link" href={data.subscriptionPromo.link}>
            Subscribe Now - {data.subscriptionPromo.price}
          </a>
        </div>
      </section>

    </div>
  );
}


export default Home;
