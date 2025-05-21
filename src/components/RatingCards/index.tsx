import "./index.scss";
import { FaUsers } from "react-icons/fa";

const RatingCards = () => {
  return (
    <div className="container">
        <div  className="background-wrapper">
      <div className="stats-cards">
        <div className="stat-card">
          <FaUsers className="icon" />
          <p className="label">SATISFIED CUSTOMERS</p>
          <p className="value">1963</p>
        </div>
        <div className="stat-card">
          <FaUsers className="icon" />
          <p className="label">QUALITY OF SERVICE</p>
          <p className="value">99%</p>
        </div>
        <div className="stat-card">
          <FaUsers className="icon" />
          <p className="label">QUALITY CERTIFICATES</p>
          <p className="value">33</p>
        </div>
        <div className="stat-card">
          <FaUsers className="icon" />
          <p className="label">AVAILABLE PRODUCTS</p>
          <p className="value">789</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default RatingCards;
