import { FaStar, FaRegStar, FaLock } from "react-icons/fa";
import "./index.scss";

const BestSellerCards = () => {
  return (
      <div className="product-card">
        <div className="product-card__image">
          <img src="/src/best-product-1.jpg" alt="Organic Tomato" />
        </div>
        <div className="product-card__content">
          <h2>Oranges</h2>
          <div className="stars">
            <FaStar color="limegreen" />
            <FaStar color="limegreen" />
            <FaStar color="limegreen" />
            <FaStar color="limegreen" />
            <FaRegStar color="gray" />
          </div>
          <div className="price">3.12 $</div>
          <button className="add-to-cart">
            <FaLock /> Add to cart
          </button>
        </div>
      </div>
    );
};

export default BestSellerCards;
