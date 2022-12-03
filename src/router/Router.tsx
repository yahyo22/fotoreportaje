import { Routes, Route, Navigate } from "react-router-dom";

// Components
import Login from "../pages/auth/login/Login";
import Register from "../pages/auth/register/Register";
import OrderPhotographer from "../components/orderPhotographer/OrderPhotographer";
import Main from "../pages/Main";
import Navbar from "../components/navbar/Navbar";
import Header from "../components/head/Header";
import Zavedeniye from "../pages/profile/Zavedeniye";
import Events from "../pages/Events"
import CardAbout from "../components/cardAbout/CardAbout";
export default function Router() {
  return (
    <Routes>  
      <Route path="/main" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/event" element={<Events/>} />
      <Route path="/zavedeniye/fotootchot" element={<CardAbout/>} />
      <Route path="/orderPhotographer" element={<OrderPhotographer />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}
