import Footer from "../Footer";
import Header from "../Header";
import Navbar from "../NavBar";
import ShopBanner from "../ShopBanner";
import "./index.scss";
const Page404 = () => {
  return (
    <>
      <Header />
      <Navbar />
      <ShopBanner title="Page404" title2="Page404" />
    <div className="container">
      <div className="page-icon wrapper">
      <i className="fa-solid fa-triangle-exclamation"></i>
    <h1 className="page-text">404</h1>
    <h2>Page Not Found</h2>
    <p>We’re sorry, the page you have looked for does not exist in our website! Maybe go to <br /> our home page or try to use a search?</p>
    <button>Go Back To Home</button>
    </div>
    </div>
    <Footer />
    </>
  );
};

export default Page404;
