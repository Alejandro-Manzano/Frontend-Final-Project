import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App.jsx';
import { AuthContextProvider } from './contexts/authContext.jsx';
import CheckCode from './pages/CheckCode.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import { Home } from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Profile from './pages/Profile';
import Developers from './pages/Developers/Developers';
import DeveloperDetails from './pages/DeveloperDetails/DeveloperDetails';
import Offers from './pages/Offers/Offers';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<App />}>
            {/* he cambiado home por register */}
            <Route index element={<Home />} />
            <Route path="/developers" element={<Developers />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/developerDetails" element={<DeveloperDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/verifyCode" element={<CheckCode />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
          </Route>
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

// "eslint-plugin-react": "^7.32.2",
//     "eslint-plugin-react-hooks": "^4.6.0",
//     "eslint-plugin-react-refresh": "^0.3.5",
