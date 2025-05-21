import "./index.scss";

const OrganicHead = () => {
  return (
    <div className="container">
      <div className="top-bar">
        <h2 className="section-title">Our Organic Products</h2>
        <div className="filter-buttons">
          <button className="active">All Products</button>
          <button>Vegetables</button>
          <button>Fruits</button>
          <button>Bread</button>
          <button>Meat</button>
        </div>
      </div>
    </div>
  );
};

export default OrganicHead;
