import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import Navbar from "./components/navbar";
import ShopContextProvider from "./contex/shop-context";
import {Cart} from "./pages/cart/cart";
import Checkout from "./pages/checkout/checkout";
import Shop from "./pages/shop/shop";

function App() {
  return (
    <div className="App">
      <ShopContextProvider>  
        <BrowserRouter>
        <Navbar/>
          <Routes>
             <Route path="/" element={<Shop/>}/>
             <Route path="/cart" element={<Cart/>}/>
             <Route path="/checkout" element={<Checkout/>}/>
          </Routes>
        </BrowserRouter>
      </ShopContextProvider>
      </div>
  );
}

export default App;
