import { NavBar } from "./Components/Navbar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Shop} from "./Pages/Shop";
import { ShopCategory } from "./Pages/ShopCategory";
import { ProductPage } from "./Pages/ProductPage";
import { Cart } from "./Pages/Cart";
import { LoginSignUp } from "./Pages/LoginSignUp";
import { Footer } from "./Components/Footer/footer";
import men_banner from "./Components/Assets/banner_mens.png";
import women_banner from "./Components/Assets/banner_women.png";
import kid_banner from "./Components/Assets/banner_kids.png";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/men" element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path="/women" element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid" />} />
          <Route path="/product" element={<ProductPage />}>
          <Route path=":productId" element={<ProductPage />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path='/login' element={<LoginSignUp/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
