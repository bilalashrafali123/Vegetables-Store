import "./index.scss";
// import Footer from "../Footer";
import Header from "../Header";
import HomeBanner from "../HomeBanner";
import InfoCard from "../InfoCard";
import Navbar from "../NavBar";
import OrganicProducts from "../OrganicProducts";
import OrganicHead from "../OrganicHead";
import HomeCard from "../HomeCard";
const Home = () => {
  return (
    <>
      <Header />
      <Navbar />
      <HomeBanner />
      <section className="info-section">
        <div className="container">
          <div className="card-wrapper">
            <InfoCard />
            <InfoCard />
            <InfoCard />
          </div>
        </div>
      </section>
      <OrganicHead />
      <OrganicProducts />
      <OrganicProducts />
      <HomeCard />

      {/* <Footer /> */}
    </>
  );
};

export default Home;
