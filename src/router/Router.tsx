import { Routes, Route, Navigate, Outlet } from "react-router-dom";

// Components======================================
// MainPages
import Main from "../pages/main/Main";
import Events from "../pages/main/Events";
import MainPage from "../pages/main/MainPage";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Zavedeniye from "../pages/main/Zavedeniye";
import CardAbout from "../components/cardAbout/CardAbout";
import FotoOtchotsCards from "../pages/main/FotoOtchotsCards";
import FotoOtchotsCardAbout from "../pages/main/FotoOtchotsCardAbout";
import OrderPhotographer from "../components/orderPhotographer/OrderPhotographer";

// UserPages
import About from "../pages/profile/About";
import UserPage from "../pages/profile/UserPage";
import FotoOtchots from "../pages/main/FotoOtchots";
import UserEvents from "../pages/profile/UserEvents";
import UsersPhotos from "../pages/profile/UsersPhotos";

// AuthPages
import Login from "../pages/auth/login/Login";
import Register from "../pages/auth/register/Register";
// =================================================

export default function Router() {
  return (
    <Routes>
      <Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/orderPhotographer" element={<OrderPhotographer />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Route>

      <Route element={<MainPage />}>
        <Route path="/main" element={<Main />} />
        <Route path="/event" element={<Events />} />
        <Route path="/orderPhotographer" element={<OrderPhotographer />} />
        <Route path="/fotoOtchots" element={<FotoOtchots />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Route>

      <Route
        element={
          <>
            <div className="container">
              <Navbar props={true} />
              <Outlet />
              <Footer />
            </div>
          </>
        }
      >
        <Route path="/event/karta" element={<Zavedeniye />} />
        <Route path="/event/karta/fotootchot" element={<CardAbout />} />
        <Route path="/fotoOtchots/kartochka" element={<FotoOtchotsCards />} />
        <Route
          path="/fotoOtchots/kartochka/more"
          element={<FotoOtchotsCardAbout />}
        />
        <Route path="*" element={<Navigate to="/main" />} />
      </Route>

      {/* User's page */}
      <Route element={<UserPage />}>
        <Route path="/userPage/Events" element={<UserEvents />} />
        <Route path="/userPage/Photos" element={<UsersPhotos />} />
        <Route path="*" element={<Navigate to="/userPage/Photos" />} />
      </Route>
    </Routes>
  );
}
