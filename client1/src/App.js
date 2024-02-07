// App.js
import "./App.css";
import {Route, Routes } from "react-router-dom";
// import CustomerRoutes from "./Routers/CustomerRoutes";
import HomePage from "./customer/Pages/HomePage/HomePage";
import Cart from "./customer/components/Cart/Cart";
import Product from "./customer/components/Product/Product";
import Navigation from "./customer/components/Navigation/Navigation";
import ProductDetails from "./customer/components/ProductDetails/ProductDetails";
import CheckOut from "./customer/components/CheckOut/CheckOut";
import Order from "./customer/components/Order/Order";
import OrderDetails from "./customer/components/Order/OderDetails";
function App() {
  return (
    <>
    <Navigation />
    <Routes>
          <Route path="/login" element={<HomePage />} />
          <Route path="/register" element={<HomePage />} />  
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/account/order" element={<Order />} />
          <Route path="/account/order/:orderId" element={<OrderDetails />} />
      </Routes>

    </>
  );
}

export default App;