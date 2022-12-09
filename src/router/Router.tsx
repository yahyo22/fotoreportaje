import { Routes, Route, Navigate } from "react-router-dom";

// Components
import Main from "../pages/Main";
import Events from "../pages/Events";
import Login from "../pages/auth/login/Login";
import Zavedeniye from "../pages/profile/Zavedeniye";
import Register from "../pages/auth/register/Register";
import OrderPhotographer from "../components/orderPhotographer/OrderPhotographer";
import CardAbout from "../components/cardAbout/CardAbout";
<<<<<<< HEAD
import About from "../pages/profile/About";
=======
import UserPage from "../pages/profile/UserPage";
import UserEvents from "../pages/UserEvents";
import UsersPhotos from "../pages/UsersPhotos";

>>>>>>> 19e229ecf4a459aff4801bef02ffcabdaa9d77f7
export default function Router() {
  return (
    <Routes>
      <Route path="/main" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/event/karta" element={<Zavedeniye />} />
      <Route path="/event" element={<Events />} />
      <Route path="/event/karta/fotootchot" element={<CardAbout />} />
      <Route path="/orderPhotographer" element={<OrderPhotographer />} />
      <Route path="/about" element={<About/>} />
      <Route path="*" element={<Navigate to="/login" />} />

      <Route path="/userPage" element={<UserPage />}>
        <Route path="/userPage/Events" element={<UserEvents />} />
        <Route path="/userPage/Photos" element={<UsersPhotos />} />
      </Route>
    </Routes>
  );
}
