// import { FaCar } from "react-icons/fa"; 
import "./index.scss";

const InfoCard = () => {
  return (
    <div className="info-card">
      <div className="icon-wrapper">
        {/* <FaCar className="icon" /> */}
      </div>
      <div className="text-content">
        <h3>Free Shipping</h3>
        <p>Free on orders over $300</p>
      </div>
    </div>
  );
};

export default InfoCard;
