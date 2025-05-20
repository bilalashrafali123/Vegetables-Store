import NavIcons from "../NavIcons";
import NavLinks from "../NavLinks";
import NavLogo from "../NavLogo";
import "./index.scss";

const Navbar = () => {
  return (
    <div className="container">
      <div className="navbar">
        <div className=" navbar-content">
          <NavLogo />
          <NavLinks />
          <NavIcons />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
