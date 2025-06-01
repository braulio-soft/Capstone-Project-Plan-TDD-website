import React from 'react';

function Home({ data }) {
  return (
    <div>
      <section style={{ backgroundImage: `url(${data.heroBanner.backgroundImage})`, padding: '60px', color: '#fff' }}>
        <h1>{data.heroBanner.title}</h1>
        <p>{data.heroBanner.subtitle}</p>
        <a href={data.heroBanner.ctaLink}>{data.heroBanner.ctaText}</a>
      </section>

      <section>
        <h2>Featured Movies</h2>
        <div style={{ display: 'flex', gap: '16px' }}>
          {data.featuredMovies.map(movie => (
            <div key={movie.id}>
              <img src={movie.image} alt={movie.title} width="150" />
              <p>{movie.title}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Categories</h2>
        <ul>
          {data.categories.map(cat => (
            <li key={cat.id}><a href={`/category/${cat.slug}`}>{cat.name}</a></li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Recommended For You</h2>
        {data.recommended.map(movie => (
          <div key={movie.id}>
            <img src={movie.image} alt={movie.title} width="150" />
            <p>{movie.title}</p>
          </div>
        ))}
      </section>

      <section style={{ backgroundColor: '#eee', padding: '20px', marginTop: '40px' }}>
        <h3>{data.subscriptionPromo.heading}</h3>
        <p>{data.subscriptionPromo.description}</p>
        <a href={data.subscriptionPromo.link}>Subscribe Now - {data.subscriptionPromo.price}</a>
      </section>
    </div>
  );
}

export default Home;
