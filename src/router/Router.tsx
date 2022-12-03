import { Routes, Route, Navigate } from "react-router-dom";

// Components
import Login from "../pages/auth/login/Login";
import Register from "../pages/auth/register/Register";
import OrderPhotographer from "../components/orderPhotographer/OrderPhotographer";
import Home from "../pages/home/Home";
import Navbar from "../components/navbar/Navbar";
import Header from "../components/head/Header";
import Zavedeniye from "../pages/zavegeniye/Zavedeniye";

export default function Router() {
  return (
    <Routes>  
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/zavedeniye" element={<Zavedeniye/>} />
      <Route path="/orderPhotographer" element={<OrderPhotographer />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}
