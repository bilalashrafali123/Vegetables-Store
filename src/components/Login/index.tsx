import Footer from "../Footer"
import Header from "../Header"
import Navbar from "../NavBar"
import ShopBanner from "../ShopBanner"
import "./index.scss"

const Login = () => {
  return (
    <>
    <Header />
    <Navbar />
    <ShopBanner title="Login" title2="Login" />
    <div className="login-page">
      <div className="container login-container">
        <div className="login-image">
          <img src="/images/login-veggies.jpg" alt="vegetables" />
        </div>
        <div className="login-form">
          <h2>Login</h2>
          <form>
            <div className="form-group">
              <input type="email" placeholder="Email Address" required />
            </div>
            <div className="form-group">
              <input type="password" placeholder="Password" required />
            </div>
            <button type="submit">Login</button>
            <p className="forgot">Forgot password?</p>
          </form>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Login