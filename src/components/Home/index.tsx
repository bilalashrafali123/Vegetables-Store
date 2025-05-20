import "./index.scss";
// import Footer from "../Footer";
import Header from "../Header";
import HomeBanner from "../HomeBanner";
import InfoCard from "../InfoCard";
import Navbar from "../NavBar";
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

      {/* <Footer /> */}
    </>
  );
};

export default Home;
