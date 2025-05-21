import "./index.scss";
import { FaStar, FaRegStar, FaLock } from "react-icons/fa";

const MidCards = () => {
  return (
    <div className="container">
      <div className="midcards-wrapper">
        <div className="midcard-wrapper">
          <div className="midcard">
            <img src="/src/best-product-2.jpg" alt="Orange" />
          </div>
          <h2 className="midCard-text">Organic Orange</h2>
          <div className="stars">
            <FaStar color="limegreen" />
            <FaStar color="limegreen" />
            <FaStar color="limegreen" />
            <FaStar color="limegreen" />
            <FaRegStar color="gray" />
          </div>
          <div className="price">$3.12</div>
          <button className="add-to-cart">
            <FaLock /> Add to cart
          </button>
        </div>

        <div className="midcard-wrapper">
          <div className="midcard">
            <img src="/src/best-product-3.jpg" alt="Banana" />
          </div>
          <h2 className="midCard-text">Organic Banana</h2>
          <div className="stars">
            <FaStar color="limegreen" />
            <FaStar color="limegreen" />
            <FaStar color="limegreen" />
            <FaStar color="limegreen" />
            <FaRegStar color="gray" />
          </div>
          <div className="price">$2.79</div>
          <button className="add-to-cart">
            <FaLock /> Add to cart
          </button>
        </div>

        <div className="midcard-wrapper">
          <div className="midcard">
            <img src="/src/best-product-4.jpg" alt="Raspberry" />
          </div>
          <h2 className="midCard-text">Organic Raspberry</h2>
          <div className="stars">
            <FaStar color="limegreen" />
            <FaStar color="limegreen" />
            <FaStar color="limegreen" />
            <FaStar color="limegreen" />
            <FaRegStar color="gray" />
          </div>
          <div className="price">$4.59</div>
          <button className="add-to-cart">
            <FaLock /> Add to cart
          </button>
        </div>

        <div className="midcard-wrapper">
          <div className="midcard">
            <img src="/src/best-product-5.jpg" alt="Apricot" />
          </div>
          <h2 className="midCard-text">Organic Apricot</h2>
          <div className="stars">
            <FaStar color="limegreen" />
            <FaStar color="limegreen" />
            <FaStar color="limegreen" />
            <FaStar color="limegreen" />
            <FaRegStar color="gray" />
          </div>
          <div className="price">$3.95</div>
          <button className="add-to-cart">
            <FaLock /> Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MidCards;
