import './Header.css';

import { useEffect, useRef, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { TbPlant2 } from 'react-icons/tb';
import { NavLink } from 'react-router-dom';

import { useAuth } from '../contexts/authContext';

const Header = () => {
  const { user, logout } = useAuth();
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const handleProfileDropdown = () => {
    setProfileDropdownOpen(!profileDropdownOpen);
  };

  const [ancho, setAncho] = useState(window.innerWidth);

  const handleResize = () => {
    setAncho(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {}, [ancho]);

  return (
    <>
      <header>
        <div className="titleFatherContainer">
          <TbPlant2 size={30} />
          <NavLink to="/dashboard">
            <h3 className="titleWeb">DevConnect</h3>
          </NavLink>
        </div>
        <nav className="navHeader" ref={navRef}>
          <div className="navButton">
            {user && user?.check === true && (
              <>
                <NavLink to="/dashboard">
                  <button className="buttonNav">Inicio</button>
                </NavLink>
                <NavLink to="/mobileDevs">
                  <button className="buttonNav">Desarrolladores</button>
                </NavLink>
                <NavLink to="/apps">
                  <button className="buttonNav">Ofertas</button>
                </NavLink>
                <NavLink to="/favorites">
                  <button className="buttonNav">Sobre Nosotros</button>
                </NavLink>
              </>
            )}
            {user && (
              <div className="dropdown">
                <button className="iconNav iconProfile" onClick={handleProfileDropdown}>
                  <img className="profileCircle" src={user.image} alt={user.user} />
                </button>
                {profileDropdownOpen && (
                  <div className="dropdown-content">
                    <NavLink to="/profile" className="ProfileNav">
                      Profile
                    </NavLink>
                    <button className="buttonNavDown" onClick={() => logout()}>
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}

            <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <FaTimes />
            </button>
          </div>
        </nav>
        {ancho < 600 && (
          <>
            <button className="nav-btn" onClick={showNavbar}>
              <FaBars />
            </button>
          </>
        )}
      </header>
    </>
  );
};

export default Header;
