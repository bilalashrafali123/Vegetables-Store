import "./index.scss";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-top">
          <div className="branding">
            <h2 className="logo">Fruitables</h2>
            <p className="tagline">Fresh products</p>
          </div>

          <form className="subscribe-form">
            <input type="email" placeholder="Your Email" />
            <button type="submit">Subscribe Now</button>
          </form>
          <div className="social-icons">
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-linkedin-in"></i>
          </div>
        </div>
        <hr />
        <div className="footer-links">
          <div className="section why-us">
            <h3>Why People Like us!</h3>
            <p>
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the like Aldus PageMaker including of Lorem
              Ipsum.
            </p>
            <button className="read-more">Read More</button>
          </div>

          <div className="section">
            <h3>Shop Info</h3>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Terms & Condition</li>
              <li>Return Policy</li>
              <li>FAQs & Help</li>
            </ul>
          </div>
           <div className="section">
            <h3>Account</h3>
            <ul>
              <li>My Account</li>
              <li>Shop details</li>
              <li>Shopping Cart</li>
              <li>Wishlist</li>
              <li>Order History</li>
              <li>International Orders</li>
            </ul>
          </div>
          <div className="section">
            <h3>Contact</h3>
            <ul>
              <li>Address: 1429 Netus Rd, NY 48247</li>
              <li>Email: Example@gmail.com</li>
              <li>Phone: +0123 4567 8910</li>
              <li>Payment Accepted</li>
              <div className="payment-icons">
                <i className="fa-brands fa-cc-visa"></i>
                <i className="fa-brands fa-cc-mastercard"></i>
                <i className="fa-solid fa-credit-card"></i>
                <i className="fa-brands fa-paypal"></i>
              </div>
            </ul>
          </div>
        </div>
          <div className="footer-bottom">
          <p>
            <i className="fa-regular fa-copyright"></i>{" "}
            <span>Your Site Name</span>, All right reserved.
          </p>
          <p>
            Designed By <span className="green">HTML Codex</span> Distributed By{" "}
            <span className="green">ThemeWagon</span>
          </p>
        </div>
      </div>
      <button className="scroll-top">
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </footer>
  );
};

export default Footer;
