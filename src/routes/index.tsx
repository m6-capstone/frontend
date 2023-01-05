// criação dos componentes base

import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Product } from "../pages/Product";
import { ProfileViewAdmin } from "../pages/ProfileViewAdmin";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/product" element={<Product />} />
      <Route path="/profileviewadmin" element={<ProfileViewAdmin />} />
    </Routes>
  );
};
