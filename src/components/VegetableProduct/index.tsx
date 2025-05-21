import "./index.scss";

const VegetableProduct = () => {
  return (
    <>
      <div className="products-section">
        <div className="container">
          <h2 className="section-title">Our Organic Fresh Vegetables</h2>
          <div className="cards-wrapper">
            <div className="card">
              <div className="card-image">
                <span className="category-badge">Fruits</span>
                <img src="/src/vegetable-item-1.jpg" alt="Grapes" />
              </div>
              <h3 className="card-title">Tomato</h3>
              <p className="card-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusmod te incididunt
              </p>
              <div className="card-footer">
                <span className="price">$4.99 / kg</span>
                <button className="add-to-cart">
                  <span className="icon">🔒</span> Add to cart
                </button>
              </div>
            </div>

            <div className="card">
              <div className="card-image">
                <span className="category-badge">Vegetables</span>
                <img src="/src/vegetable-item-4.jpg" alt="Grapes" />
              </div>
              <h3 className="card-title">Bell Pepper</h3>
              <p className="card-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusmod te incididunt
              </p>
              <div className="card-footer">
                <span className="price">$4.99 / kg</span>
                <button className="add-to-cart">
                  <span className="icon">🔒</span> Add to cart
                </button>
              </div>
            </div>

            <div className="card">
              <div className="card-image">
                <span className="category-badge">Vegetables</span>
                <img src="/src/vegetable-item-5.jpg" alt="Raspberries" />
              </div>
              <h3 className="card-title">Potato</h3>
              <p className="card-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusmod te incididunt
              </p>
              <div className="card-footer">
                <span className="price">$4.99 / kg</span>
                <button className="add-to-cart">
                  <span className="icon">🔒</span> Add to cart
                </button>
              </div>
            </div>

            <div className="card">
              <div className="card-image">
                <span className="category-badge">Vegetables</span>
                <img src="/src/vegetable-item-6.jpg" alt="Apricots" />
              </div>
              <h3 className="card-title">Parsely</h3>
              <p className="card-description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusmod te incididunt
              </p>
              <div className="card-footer">
                <span className="price">$4.99 / kg</span>
                <button className="add-to-cart">
                  <span className="icon">🔒</span> Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VegetableProduct;
