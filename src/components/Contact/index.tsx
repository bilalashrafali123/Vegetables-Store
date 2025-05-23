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
      <div className="container">
        <div className="map-bg">
          <div className="map-header">
            <h1>Get In Touch</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, quia.</p>
            <a href="#">Download</a>
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.5597094975747!2d67.05119137488269!3d24.947064841787544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb341b4c4180f59%3A0xcb8b11a9be6708cb!2sMARHABA%20GALAXY!5e0!3m2!1sen!2s!4v1747984988932!5m2!1sen!2s"
                width="1140"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
