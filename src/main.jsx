import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Dashboard from "./pages/Dashboard.jsx";
import { Protected } from "./components/Protected.jsx";
import Login from "./pages/Login.jsx";
import { Home } from "./pages/Home.jsx";
import Register from "./pages/Register.jsx";
import CheckCode from "./pages/CheckCode.jsx";
import { AuthContextProvider } from "./contexts/authContext.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import ProtectedCheck from "./components/ProtectedCheck.jsx";
import ProtectedCheckChildren from "./components/ProtectedCheckChildren.jsx";
import Profile from "./pages/Profile.jsx";
import { ProtectedGeneral } from "./components/ProtectedGeneral.jsx";
import MobileDevs from "./pages/MobileDevs/MobileDevs.jsx";
import Apps_inMobileDev from "./pages/Apps_inMobileDev/Apps_inMobileDev.jsx";
import Apps from "./pages/Apps/Apps.jsx";
import MobileDevs_inApp from "./pages/MobileDevs_inApp/MobileDevs_inApp.jsx";
import UserFavoritesMobileDevsList from "./components/UserFavoritesMobileDevsList/UserFavoritesMobileDevsList.jsx";
import UserFavoritesAppsList from "./components/UserFavoritesAppsList/UserFavoritesAppsList.jsx";
import Favorite from "./pages/Favorites/Favorite.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<App />}>
            {/* No tienen proteccion de rutas */}
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/mobileDevs" element={<MobileDevs />} />
            <Route path="/apps" element={<Apps />} />
            <Route path="/favorites" element={<Favorite />} />
            <Route
              path="/mobileDevsFavorites"
              element={<UserFavoritesMobileDevsList />}
            />
            <Route path="/appsFavorites" element={<UserFavoritesAppsList />} />
            <Route path="/mobileDev/apps" element={<Apps_inMobileDev />} />
            <Route path="/app/mobileDevs" element={<MobileDevs_inApp />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/profile"
              element={
                <Protected>
                  <Profile />
                </Protected>
              }
            />
            <Route
              path="/verifyCode"
              element={
                <ProtectedCheckChildren>
                  <CheckCode />
                </ProtectedCheckChildren>
              }
            />
            <Route path="/forgotpassword" element={<ForgotPassword />} />

            {/* Tiene proteccion de rutas */}
            <Route
              path="/dashboard"
              element={
                <ProtectedGeneral>
                  <ProtectedCheck>
                    <Dashboard />
                  </ProtectedCheck>
                </ProtectedGeneral>
              }
            />

            <Route path="/dashboardN" element={<Dashboard />} />
          </Route>
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
