import Header from '../Header'
import Navbar from '../NavBar'
import ShopBanner from '../ShopBanner'

const Checkout = () => {
  return (
  <>
      <Header />
      <Navbar />
      <ShopBanner title="Checkout" title2="Checkout" />
      
      <div className="container py-5">
      <h1 className='checkout-heading'>Billing Address</h1>
      <form action="#" className='form-section'>
       <div className='row'>
       <div className='left-section'>
        <div className='row'>
        <div className='inp'>
            <label>First Name*</label>
            <input type="text" />
        </div>
         
        </div>
       </div>
       </div>
      </form>
      </div>
    </>
  )
}

export default Checkout