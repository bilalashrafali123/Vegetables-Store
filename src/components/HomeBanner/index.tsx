import "./index.scss";

const HomeBanner = () => {
  return (
    <section className="home-banner">
      <div className="container banner-content">
        <div className="banner-text">
          <p className="subtitle">100% Organic Foods</p>
          <h1 className="title">
            Organic Veggies & <br /> Fruits Foods
          </h1>
          <div className="search-bar">
            <input type="text" placeholder="Search" />
            <button>Submit Now</button>
          </div>
        </div>
         <div className="banner-image">
          <div className="carousel">
            <button className="nav left">❮</button>
            <div className="carousel-content">
              <img src="/src/hero-img-1.png" alt="Fruits" />
              <div className="tag">Fruits</div>
            </div>
            <button className="nav right">❯</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
