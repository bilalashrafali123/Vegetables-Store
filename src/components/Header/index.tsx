import './index.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="container header-content">
        <div className="header-left">
          <span><i className="fa-solid fa-location-dot"></i> 123 Street, New York</span>
          <span><i className="fa-solid fa-envelope"></i> Email@Example.com</span>
        </div>
        <div className="header-right">
          <a href="#">Privacy Policy</a>
          <span>/</span>
          <a href="#">Terms of Use</a>
          <span>/</span>
          <a href="#">Sales and Refunds</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
