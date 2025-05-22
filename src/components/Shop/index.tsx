import Footer from "../Footer";
import Header from "../Header";
import Navbar from "../NavBar";
import OrganicProducts from "../OrganicProducts";
import "./index.scss";

const Shop = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="Shop-banner-section">
        <h2 className="Shop-banner-section-heading">
          SHOP <br />
        </h2>
        <div className="Shop-banner-section-links">
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
      <section className="shop-page">
        <div className="container shop-layout">
          <aside className="sidebar">
            <h2 className="shop-title">Fresh fruits shop</h2>

            <div className="search-bar">
              <input type="text" placeholder="keywords" />
              <button>
                <i className="fas fa-search" />
              </button>
            </div>

            <div className="filter-group">
              <h4>Categories</h4>
              <ul>
                <li>Apples</li>
                <li>Oranges</li>
                <li>Strawberry</li>
                <li>Banana</li>
                <li>Pumpkin</li>
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
        <div className="stars">⭐⭐⭐⭐<span className="gray">⭐</span></div>
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
        <div className="stars">⭐⭐⭐⭐<span className="gray">⭐</span></div>
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
        <div className="stars">⭐⭐⭐⭐<span className="gray">⭐</span></div>
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
              <div className="banner-text">Your Text Here</div>
            </div>

           
          </aside>

          <main className="products-area">
           <div className="background">
           <div className="sort-bar">
              <span>Default Sorting:</span>
              <select>
                <option>Nothing</option>
              </select>
            </div>
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
