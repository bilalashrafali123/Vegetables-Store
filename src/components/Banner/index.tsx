import "./index.scss";

const Banner = () => {
  return (
    <section className="banner">
      <div className="container banner__content">
        <div className="banner__text">
          <h1>
            <span>Fresh Exotic Fruits</span> in Our Store
          </h1>
          <p>
            The generated Lorem Ipsum is therefore always free from repetition
            injected humour, or non-characteristic words etc.
          </p>
          <button className="buy-button">BUY</button>
        </div>
        <div className="banner__image">
          <div className="price-badge">
            <div className="price">
              <span className="big">1</span>
              <span className="small">
                50<sup>$</sup>
                <br />
                <span>kg</span>
              </span>
            </div>
          </div>
          <img src="/src/baner-1.png" alt="Apples Basket" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
