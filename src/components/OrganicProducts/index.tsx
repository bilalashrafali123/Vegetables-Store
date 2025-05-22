import "./index.scss";

const OrganicProducts = () => {
  return (
    <div className="products-section">
      
      <div className="cards-wrapper">
        <div className="card">
          <div className="card-image">
            <span className="category-badge">Fruits</span>
            <img src="/src/best-product-1.jpg" alt="Grapes" />
          </div>
          <h3 className="card-title">Oranges</h3>
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
  );
};

export default OrganicProducts;
