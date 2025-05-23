import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import "./app.scss";
import Shop from "./components/Shop";
import ShopDetail from "./components/ShopDetail";
import Pages from "./components/Pages";
import Contact from "./components/Contact";
import Page404 from "./components/Page404";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shopdetail" element={<ShopDetail />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/page404" element={<Page404 />} />
      </Routes>
    </>
  );
};

export default App;
