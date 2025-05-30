import "./index.scss";
import Header from "../Header";
import HomeBanner from "../HomeBanner";
import InfoCard from "../InfoCard";
import Navbar from "../NavBar";
import OrganicProducts from "../OrganicProducts";
import OrganicHead from "../OrganicHead";
import HomeCard from "../HomeCard";
import VegetableProduct from "../VegetableProduct";
import Banner from "../Banner";
import BestSellerText from "../BestSellerText";
import BestSellerCards from "../BestSellerCards";
import MidCards from "../MidCards";
import RatingCards from "../RatingCards";
import TestimonialText from "../TestimonialText";
import Testimonial from "../Testimonial";
import Footer from "../Footer";

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
      <div className="products-section">
      <div className="cards-wrapper">
        <OrganicProducts />
        <OrganicProducts />
        <OrganicProducts />
        <OrganicProducts />
        <OrganicProducts />
        <OrganicProducts />
        <OrganicProducts />
        <OrganicProducts />
      </div>
      </div>
      <div className="container">
        <HomeCard />
      </div>
      <div className="container">
      <VegetableProduct title="Fresh Organic Vegetables" />
    </div>
    <Banner />
      <BestSellerText />
      <div className="container">
        <div className="bestcards-wrapper">
          <BestSellerCards />
          <BestSellerCards />
          <BestSellerCards />
          <BestSellerCards />
          <BestSellerCards />
          <BestSellerCards />
        </div>
      </div>
      <MidCards />
      <RatingCards />
      <TestimonialText />
      <Testimonial />
      <Footer />
      </>
  );
};

export default Home;
