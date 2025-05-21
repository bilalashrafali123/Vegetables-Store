import "./index.scss";
import { FaQuoteRight, FaStar } from "react-icons/fa";

const TestimonialSection = () => {
  return (
    <div className="container">
      <div className="testimonials">
        <div className="testimonial-card">
          <p className="text">
            Lorem Ipsum is simply dummy text of the printing Ipsum has been the
            industry's standard dummy text ever since the 1500s,
          </p>
          <hr />
          <div className="profile">
            <img src="/src/testimonial-1.jpg" alt="client" />
            <div className="info">
              <h4>Client Name</h4>
              <p>Profession</p>
              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
            <FaQuoteRight className="quote-icon" />
          </div>
        </div>

        <div className="testimonial-card">
          <p className="text">
            Lorem Ipsum is simply dummy text of the printing Ipsum has been the
            industry's standard dummy text ever since the 1500s,
          </p>
          <hr />
          <div className="profile">
            <img src="/src/testimonial-1.jpg" alt="client" />
            <div className="info">
              <h4>Client Name</h4>
              <p>Profession</p>
              <div className="stars">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
            <FaQuoteRight className="quote-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
