import "./index.scss";

const NavIcons = () => {
  return (
    <>
      <div className="nav-icons">
        <button className="icon-btn">
          <i className="fa-solid fa-magnifying-glass searchbar"></i>
        </button>
        <div className="cart">
          <i className="fa-solid fa-bag-shopping"></i>
          <span className="badge">3</span>
        </div>
        <i className="fa-solid fa-user"></i>
        <i className="fa-solid fa-bars bar-icon "></i>
      </div>
    </>
  );
};

export default NavIcons;
