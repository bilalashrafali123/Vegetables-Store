import Footer from "../Footer";
import Header from "../Header";
import Navbar from "../NavBar";
import ShopBanner from "../ShopBanner";
import "./index.scss";

const Checkout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <ShopBanner title="Checkout" title2="Checkout" />
      <div className="container">
        <h1 className="billing">Billing Details</h1>
        <div className="checkout-flex">
          <form className="form-section">
            <div className="input-section">
              <div className="input-group">
                <label htmlFor="first-name">First Name *</label>
                <input id="first-name" className="first-name" type="text" />
              </div>
              <div className="input-group">
                <label htmlFor="last-name">Last Name *</label>
                <input id="last-name" className="last-name" type="text" />
              </div>
            </div>

            <div className="input-group full-width">
              <label htmlFor="contact">Contact *</label>
              <input id="contact" className="contact" type="text" />
            </div>
            <div className="input-group full-width">
              <label htmlFor="address">Address *</label>
              <input
                id="address"
                className="contact"
                type="text"
                placeholder="House number street name"
              />
            </div>
            <div className="input-group full-width">
              <label htmlFor="city">Town City *</label>
              <input id="city" className="contact" type="text" />
            </div>
            <div className="input-group full-width">
              <label htmlFor="country">Country *</label>
              <input id="country" className="contact" type="text" />
            </div>
            <div className="input-group full-width">
              <label htmlFor="postcode">Post Code Zip *</label>
              <input id="postcode" className="contact" type="text" />
            </div>
            <div className="input-group full-width">
              <label htmlFor="mobile">Mobile *</label>
              <input id="mobile" className="contact" type="text" />
            </div>
            <div className="input-group full-width">
              <label htmlFor="email">Email Address *</label>
              <input id="email" className="contact" type="text" />
            </div>

            <div className="create-account">
              <input type="checkbox" />
              <a href="#">Create an account</a>
            </div>

            <div className="line-break">
              <hr />
            </div>

            <div className="create-account">
              <input type="checkbox" />
              <a href="#">Ship to different address?</a>
            </div>

            <div className="input-group full-width">
              <input
                id="notes"
                className="contact order-notes"
                type="text"
                placeholder="Order notes (optional)"
              />
            </div>
          </form>
          <div className="table-section">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Products</th>
                  <th scope="col">Name</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Total</th>
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
                </tr>
              </tbody>
            </table>
            <div className="subtotal">
              <h2>
                Subtotal <span>$440.00</span>
              </h2>
            </div>
            <div className="line-break">
              <hr />
            </div>
            <div className="shipping-options">
              <div className="label">Shipping</div>
              <div className="options">
                <div className="option">
                  <span className="checkbox" />
                  <span className="text"> Shipping</span>
                </div>
                <div className="option">
                  <span className="checkbox" />
                  <span className="text"> $15.00</span>
                </div>
                <div className="option">
                  <span className="checkbox" />
                  <span className="text">$8.00</span>
                </div>
              </div>
            </div>
            <div className="line-break">
              <hr />
            </div>
            <div className="total">
              <h2>total</h2>
              <div>
                <div className="line-break">
                  <hr />
                  <h2>$443.00</h2>
                  <hr />
                </div>
              </div>
            </div>
            <div className="line-break">
              <hr />
            </div>
            <div className="payment-options">
              <div className="method">
                <div className="title">
                  <span className="checkbox" />
                  <span className="text">Direct Bank Transfer</span>
                </div>
                <p className="description">
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference. Your order will not be
                  shipped until the funds have cleared in our account.
                </p>
              </div>

              <div className="line-break">
                <hr />
              </div>

              <div className="method">
                <div className="title">
                  <span className="checkbox" />
                  <span className="text">Check Payments</span>
                </div>
              </div>

              <div className="line-break">
                <hr />
              </div>

              <div className="method">
                <div className="title">
                  <span className="checkbox" />
                  <span className="text">Cash On Delivery</span>
                </div>
              </div>

              <div className="line-break">
                <hr />
              </div>

              <div className="method">
                <div className="title">
                  <span className="checkbox" />
                  <span className="text">Paypal</span>
                </div>
              </div>

              <div className="line-break">
                <hr />
              </div>

              <button className="place-order">PLACE ORDER</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
