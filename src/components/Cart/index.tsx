import Footer from "../Footer";
import Header from "../Header";
import Navbar from "../NavBar";
import ShopBanner from "../ShopBanner";
import "./index.scss";

const Cart = () => {
  return (
    <>
      <Header />
      <Navbar />
      <ShopBanner title="Cart" title2="Cart" />

      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Products</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <div className="table-wrapper">
                  <img
                    src="https://demo.htmlcodex.com/2824/vegetable-website-template/img/vegetable-item-3.png"
                    alt="img"
                  />
                </div>
              </th>
              <td className="table-data">Big Banana</td>
              <td className="table-data">2.99 $</td>
              <td className="table-data">2</td>
              <td className="table-data">5.98 $</td>
              <td className="table-data">
                <button>X</button>
              </td>
            </tr>

            <tr>
              <th scope="row">
                <div className="table-wrapper">
                  <img
                    src="https://demo.htmlcodex.com/2824/vegetable-website-template/img/vegetable-item-5.jpg"
                    alt="img"
                  />
                </div>
              </th>
              <td className="table-data">Potato</td>
              <td className="table-data">1.50 $</td>
              <td className="table-data">3</td>
              <td className="table-data">4.50 $</td>
              <td className="table-data">
                <button>X</button>
              </td>
            </tr>

            <tr>
              <th scope="row">
                <div className="table-wrapper">
                  <img
                    src="https://demo.htmlcodex.com/2824/vegetable-website-template/img/vegetable-item-2.jpg"
                    alt="img"
                  />
                </div>
              </th>
              <td className="table-data">Broccoli</td>
              <td className="table-data">3.00 $</td>
              <td className="table-data">2</td>
              <td className="table-data">6.00 $</td>
              <td className="table-data">
                <button>X</button>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="coupon">
          <input type="text" placeholder="Coupon Code" />
          <button>Apply Coupon</button>
        </div>

        <div className="cart-section">
          <div className="cart-background">
            <div className="cart-text-section">
              <h1>Cart Total</h1>
              <div className="subtotal">
                <h5>Subtotal:</h5>
                <h5>$16.48</h5>
              </div>
              <div className="subtotal">
                <h5>Shipping:</h5>
                <h5>Flat rate: $3.00</h5>
              </div>
              <hr />
              <div className="subtotal">
                <h5>Total:</h5>
                <h5>$19.48</h5>
              </div>
              <hr />
              <div>
                <button className="checkout">
                  Proceed Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Cart;
 