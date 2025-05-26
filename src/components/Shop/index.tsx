import Footer from "../Footer";
import Header from "../Header";
import Navbar from "../NavBar";
import OrganicProducts from "../OrganicProducts";
import ShopBanner from "../ShopBanner";
import "./index.scss";

const Shop = () => {
  return (
    <>
      <Header />
      <Navbar />
      <ShopBanner title="Shop" title2="Shop" />

      <section className="shop-page">
        <div className="container shop-layout">
          <aside className="sidebar">
            <h2 className="shop-title">Fresh fruits shop</h2>

            <div className="search-box">
              <input type="text" placeholder="keywords" />
            </div>

            <div className="filter-group">
              <h4>Categories</h4>
              <ul>
                <li>
                  Apples <span>(3)</span>
                </li>
                <li>
                  Oranges <span>(5)</span>
                </li>
                <li>
                  Strawberry <span>(2)</span>
                </li>
                <li>
                  Banana <span>(8)</span>
                </li>
                <li>
                  Pumpkin <span>(5)</span>
                </li>
              </ul>
            </div>

            <div className="filter-group">
              <h4>Price</h4>
              <input type="range" min="0" max="100" />
            </div>

            <div className="filter-group">
              <h4>Additional</h4>
              <ul>
                <li>
                  <label>
                    <input type="checkbox" /> Organic
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" /> Fresh
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" /> Sales
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" /> Discount
                  </label>
                </li>
                <li>
                  <label>
                    <input type="checkbox" /> Expired
                  </label>
                </li>
              </ul>
            </div>

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

            <div className="sidebar-banner-image">
              <img
                src="https://demo.htmlcodex.com/2824/vegetable-website-template/img/banner-fruits.jpg"
                alt="Sidebar Banner"
              />
              <div className="banner-text">
                Fresh
                <br />
                Fruits
                <br />
                Banner
              </div>
            </div>
          </aside>

        
          <main className="products-area">
            <div className="sort-bar">
              <span className="label">Default Sorting:</span>
              <select className="select">
                <option>Nothing</option>
              </select>
            </div>

            <div className="product-grid">
              <OrganicProducts />
              <OrganicProducts />
              <OrganicProducts />
              <OrganicProducts />
              <OrganicProducts />
              <OrganicProducts />
              <OrganicProducts />
              <OrganicProducts />
              <OrganicProducts />
            </div>

            <div className="pagination">
              <button className="active">1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
              <button>5</button>
              <button>6</button>
              <button>&gt;</button>
            </div>
          </main>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Shop;
