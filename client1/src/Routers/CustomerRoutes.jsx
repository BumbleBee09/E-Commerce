  // CustomerRoutes.js
  import React from "react";
  import { Route} from "react-router-dom";
  import HomePage from "../customer/Pages/HomePage/HomePage";
  import Navigation from "../customer/components/Navigation/Navigation";
  import Footer from "../customer/components/Footer/Footer";
  import Cart from "../customer/components/Cart/Cart";
  import Product from "../customer/components/Product/Product"

  const CustomerRoutes = () => {
    return (
      <div>
        <div>
          <Navigation />
          
        </div>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product />} />
        <div>
          <Footer />
        </div>
      </div>
    );
  };

  export default CustomerRoutes;