// criação dos componentes base

import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Product } from "../pages/Product";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Product />} />
    </Routes>
  );
};
