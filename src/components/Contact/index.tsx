import Footer from "../Footer";
import Header from "../Header";
import Navbar from "../NavBar";
import ShopBanner from "../ShopBanner";
import "./index.scss";

const Contact = () => {
  return (
    <>
      <Header />
      <Navbar />
      <ShopBanner title="Contact" title2="Contact" />
      <section className="contact-section">
        <div className="container">
          <h2 className="title">Get in touch</h2>
          <p className="description">
            The contact form is currently inactive. Get a functional and working
            contact form with Ajax & PHP in a few minutes. Just copy and paste
            the files, add a little code and you're done.
            <span className="highlight"> Download Now.</span>
          </p>
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.5597094975747!2d67.05119137488269!3d24.947064841787544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb341b4c4180f59%3A0xcb8b11a9be6708cb!2sMARHABA%20GALAXY!5e0!3m2!1sen!2s!4v1748005451869!5m2!1sen!2s"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
          <div className="form-contact">
            <form className="contact-form">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Enter Your Email" />
              <textarea placeholder="Your Message" />
              <button type="submit">Submit</button>
            </form>
             <div className="contact-info">
              <div className="info-box">
                <span className="icon">📍</span>
                <div>
                  <h4>Address</h4>
                  <p>123 Street New York, USA</p>
                </div>
              </div>
              <div className="info-box">
                <span className="icon">📧</span>
                <div>
                  <h4>Mail Us</h4>
                  <p>info@example.com</p>
                </div>
              </div>
              <div className="info-box">
                <span className="icon">📞</span>
                <div>
                  <h4>Telephone</h4>
                  <p>(+012) 3456 7890</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
