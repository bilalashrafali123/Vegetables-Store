import "./index.scss";
import Header from "../Header";
import HomeBanner from "../HomeBanner";
import InfoCard from "../InfoCard";
import Navbar from "../NavBar";
import OrganicProducts from "../OrganicProducts";
import OrganicHead from "../OrganicHead";
import HomeCard from "../HomeCard";
import VegetableProduct from "../VegetableProduct";
// import Footer from "../Footer";

const Home = () => {
  return (
    <>
      <Header />

      <div className="container">
        <Navbar />
      </div>

      <HomeBanner />

      <div className="container">
        <section className="info-section">
          <div className="card-wrapper">
            <InfoCard />
            <InfoCard />
            <InfoCard />
            <InfoCard />
          </div>
        </section>
      </div>
      <div className="container">
        <OrganicHead />
      </div>
      <div className="container">
        <OrganicProducts />
      </div>
      <div className="container">
        <HomeCard />
      </div>
      <div className="container">
        <VegetableProduct />
      </div>

      {/* Footer, if you decide to add it later */}
      {/* <div className="container">
        <Footer />
      </div> */}
    </>
  );
};

export default Home;
