import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Product } from "../pages/Product";
import { ProfileViewAdmin } from "../pages/ProfileViewAdmin";
import { ProfileViewCommon } from "../pages/ProfileViewCommon";
import { Register } from "../pages/Register";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace={true} />} />
      <Route path="/home" element={<Home />} />
      <Route path="/home/:element" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/profile/:id" element={<ProfileViewCommon />} />
      <Route path="/myprofile" element={<ProfileViewAdmin />} />
    </Routes>
  );
};
