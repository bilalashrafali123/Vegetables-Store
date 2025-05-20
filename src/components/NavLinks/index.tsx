import { Link } from "react-router-dom";
import "./index.scss";

const NavLinks = () => {
  return (
    <div className="navlinks">
     <Link className="active" to="/">Home</Link>
      <a href="#">Shop</a>
      <a href="#">Shop Detail</a>
      <a href="#">Pages ▾</a>
      <a href="#">Contact</a>
    </div>
  );
};

export default NavLinks;
