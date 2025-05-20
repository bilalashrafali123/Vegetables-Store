import NavIcons from "../NavIcons";
import NavLinks from "../NavLinks";
import NavLogo from "../NavLogo";
import "./index.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container navbar-content">
        <NavLogo />
        <NavLinks />
        <NavIcons />
      </div>
    </div>
  );
};

export default Navbar;
