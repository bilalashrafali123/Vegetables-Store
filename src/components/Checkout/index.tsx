import Header from '../Header'
import Navbar from '../NavBar'
import ShopBanner from '../ShopBanner'
import "./index.scss"

const Checkout = () => {
  return (
    <>
      <Header />
      <Navbar />
      <ShopBanner title='Checkout' title2='Checkout' />
      <div className="container">
        <h1 className='billing'>Billing Details</h1>
        <form className='form-section'>
          <div className='input-section'>
            <div className="input-group">
              <label htmlFor="first-name">First Name *</label>
              <input id="first-name" className='first-name' type="text" />
            </div>
            <div className="input-group">
              <label htmlFor="last-name">Last Name *</label>
              <input id="last-name" className='last-name' type="text" />
            </div>
          </div>

          <div className="input-group full-width">
            <label htmlFor="contact">Contact *</label>
            <input id="contact" className='contact' type="text" />
          </div>
          <div className="input-group full-width">
            <label htmlFor="contact">Address *</label>
            <input id="contact" className='contact' type="text" placeholder='House number street name' />
          </div>
          <div className="input-group full-width">
            <label htmlFor="contact">Town City *</label>
            <input id="contact" className='contact' type="text" />
          </div>
          <div className="input-group full-width">
            <label htmlFor="contact">Country *</label>
            <input id="contact" className='contact' type="text" />
          </div>
          <div className="input-group full-width">
            <label htmlFor="contact">Post Code Zip *</label>
            <input id="contact" className='contact' type="text" />
          </div>
          <div className="input-group full-width">
            <label htmlFor="contact">Mobile *</label>
            <input id="contact" className='contact' type="text" />
          </div>
          <div className="input-group full-width">
            <label htmlFor="contact">Email Address *</label>
            <input id="contact" className='contact' type="text" />
          </div>
        </form>
      </div>
    </>
  )
}

export default Checkout
