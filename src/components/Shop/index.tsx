// import Footer from "../Footer";
import Header from "../Header";
import Navbar from "../NavBar";
import "./index.scss";

const Shop = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="Shop-banner">
        <div className="container">
          <h2 className="shop-banner-heading">SHOP</h2>
          <div className="shop-banner-links">
            <a href="#" className="active">
              Home /
            </a>
            <a href="#" className="active">
              Pages /
            </a>
            <a href="#" className="active-white">
              Shop
            </a>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Shop;
