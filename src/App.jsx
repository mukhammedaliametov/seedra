import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout";
import Home from "./pages/home";
import ProductDetails from "./components/product_details";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='products/:id' element={<ProductDetails />} />
      </Route>
    </Routes>
  );
};

export default App;
