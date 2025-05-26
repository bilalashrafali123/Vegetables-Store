import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import "./app.scss";
import Shop from "./components/Shop";
import ShopDetail from "./components/ShopDetail";
import Contact from "./components/Contact";
import Page404 from "./components/Page404";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shopdetail" element={<ShopDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/page404" element={<Page404 />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
