import { Link } from "react-router-dom";
import "./index.scss";

const NavLinks = () => {
  return (
    <div className="navlinks">
      <Link className="active" to="/">
        Home
      </Link>
      <Link to="/shop">Shop</Link>
      <Link to="/shopdetail">ShopDetail</Link>
      <Link to="/pages">Pages</Link>
      <Link to="/contact">Contact</Link>

      
    </div>
  );
};

export default NavLinks;
