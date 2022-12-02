import { Routes, Route, Navigate } from "react-router-dom";

// Components
import Login from "../pages/auth/login/Login";
import Register from "../pages/auth/register/Register";
import OrderPhotographer from "../components/orderPhotographer/OrderPhotographer";
import Home from "../pages/home/Home";

export default function Router() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/orderPhotographer" element={<OrderPhotographer />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}
