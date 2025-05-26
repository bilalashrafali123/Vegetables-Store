import "./index.scss";

const HomeCard = () => {
  return (
    <div className="container">
      <div className="cards">
        <div className="card ">
          <img src="/src/featur-1.jpg" alt="Fresh Apples" />
          <div className="label green">
            <p>Fresh Apples</p>
            <strong>20% OFF</strong>
          </div>
        </div>
        <div className="card">
          <img src="/src/featur-2.jpg" alt="Tasty Fruits" />
          <div className="label grey">
            <p>Tasty Fruits</p>
            <strong>Free Delivery</strong>
          </div>
        </div>
        <div className="card">
          <img src="/src/featur-3.jpg" alt="Exotic Vegetable" />
          <div className="label orange">
            <p>Exotic Vegetable</p>
            <strong>Discount $30</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
