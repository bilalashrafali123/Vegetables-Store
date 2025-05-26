import { Link } from "react-router-dom";
import "./index.scss";

const NavLinks = () => {
  return (
    <div className="navlinks">
      <Link className="active" to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/shopdetail">ShopDetail</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/page404">Page404</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/checkout">Checkout</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default NavLinks;
