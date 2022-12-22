// criação dos componentes base

import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { ProfileViewAdmin } from "../pages/ProfileViewAdmin";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profileviewadmin" element={<ProfileViewAdmin />} />
    </Routes>
  );
};
