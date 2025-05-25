import Footer from "../Footer";
import Header from "../Header";

import Navbar from "../NavBar";

import ShopBanner from "../ShopBanner";
import VegetableProduct from "../VegetableProduct";
import "./index.scss";

const ShopDetail = () => {
  return (
    <>
      <Header />
      <Navbar />
      <ShopBanner title="ShopDetail" title2="ShopDetail" />

      <div className="container shop-detail">
        <div className="top">
          <div className="left">
           
            <div className="product-flex">
               <div className="image">
                <img
                  src="https://themewagon.github.io/fruitables/img/single-item.jpg"
                  alt="Broccoli"
                />
              </div>
              <div className="info">
                <h2>Broccoli</h2>
                <p className="category">Category: Vegetables</p>
                <div className="price-rating">
                  <span className="price">3.35 $</span>
                  <div className="stars">★★★★★</div>
                </div>
                <p className="desc">
                  The generated Lorem Ipsum is therefore always free from
                  repetition injected humour...
                </p>
                <div className="quantity-add">
                  <div className="quantity">
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                  </div>
                  <button className="add-cart">Add to cart</button>
                </div>
              </div>
            </div>

            <div className="tabs">
              <button className="active">Description</button>
              <button>Reviews</button>
            </div>

            <div className="info-table">
              <div>
                <span>Weight</span>
                <span>1 Kg</span>
              </div>
              <div>
                <span>Country of Origin</span>
                <span>Agro Farm</span>
              </div>
              <div>
                <span>Quality</span>
                <span>Organic</span>
              </div>
              <div>
                <span>Check</span>
                <span>Healthy</span>
              </div>
              <div>
                <span>Min Weight</span>
                <span>250 Kg</span>
              </div>
            </div>

            <div className="comment-form">
              <h3>Leave a Reply</h3>
              <div className="inputs">
                <input type="text" placeholder="Your Name *" />
                <input type="email" placeholder="Your Email *" />
              </div>
              <textarea placeholder="Your Review *" />
              <button className="comment-btn">Post Comment</button>
            </div>
          </div>

         
          <div className="right">
            <div className="search-box">
              <input type="text" placeholder="keywords" />
              <button>🔍</button>
            </div>

            <div className="categories">
              <h4>Categories</h4>
              <ul>
                <li>Apples <span>(5)</span></li>
                <li>Oranges <span>(4)</span></li>
                <li>Strawberry <span>(3)</span></li>
                <li>Banana <span>(2)</span></li>
                <li>Pumpkin <span>(1)</span></li>
              </ul>
            </div>

            <div className="featured">
              <div className="filter-group">
                <h4>Featured products</h4>
                <div className="featured-products">
                  <div className="product">
                    <img src="/src/best-product-3.jpg" alt="radish" />
                    <div className="product-info">
                      <span className="title">Big Banana</span>
                      <div className="stars">
                        ⭐⭐⭐⭐<span className="gray">⭐</span>
                      </div>
                      <div className="price">
                        <span className="new">2.99 $</span>
                        <span className="old">4.11 $</span>
                      </div>
                    </div>
                  </div>

                  <div className="product">
                    <img src="/src/best-product-3.jpg" alt="strawberry" />
                    <div className="product-info">
                      <span className="title">Big Banana</span>
                      <div className="stars">
                        ⭐⭐⭐⭐<span className="gray">⭐</span>
                      </div>
                      <div className="price">
                        <span className="new">2.99 $</span>
                        <span className="old">4.11 $</span>
                      </div>
                    </div>
                  </div>

                  <div className="product">
                    <img src="/src/best-product-3.jpg" alt="broccoli" />
                    <div className="product-info">
                      <span className="title">Big Banana</span>
                      <div className="stars">
                        ⭐⭐⭐⭐<span className="gray">⭐</span>
                      </div>
                      <div className="price">
                        <span className="new">2.99 $</span>
                        <span className="old">4.11 $</span>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="view-more">View More</button>
              </div>
            </div>

            <div className="sidebar-banner-image">
              <img src="https://demo.htmlcodex.com/2824/vegetable-website-template/img/banner-fruits.jpg" alt="Fresh Fruits Banner" />
            <div className="banner-text">
                Fresh
                <br />
                Fruits
                <br />
                Banner
              </div>
            </div>
          </div>
        </div>

       
          <div className="container">
           <VegetableProduct />
          </div>
       
      </div>
      <Footer />
    </>
  );
};

export default ShopDetail;
