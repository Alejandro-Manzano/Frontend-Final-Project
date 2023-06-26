import './Profile.css';

import { useState } from 'react';

import ChangePassword2 from '../components/ChangePassword2/ChangePassword2';
import FormProfile from '../components/FormProfile';
import { useAuth } from '../contexts/authContext';
import useDeleteUser from '../hooks/useDeleteUser';
import ChangeEmail from '../components/ChangeEmail/ChangeEmail';
import Experience from '../components/Experience/Experience';
import Offers from '../components/Offers/Offers';
import Tecnologias from '../components/Tecnologias/Tecnologias';
import UserProfile from '../components/HeaderProfile/HeaderProfile';

const Profile = () => {
  const [changeRender, setChangeRender] = useState(true);
  const { setUser } = useAuth();
  const [activeButton, setActiveButton] = useState('Profile');

  return (
    <>
      <div className="profile-father-Container">
        <div className="header-profile">
          <UserProfile />
        </div>
        <div className="mainContainer">
          <div className="containerNavProfile">
            <button
              className={`btn-profile ${activeButton === 'Password' ? 'active' : ''}`}
              onClick={() => {
                setChangeRender('Password');
                setActiveButton('Password');
              }}
            >
              🔑 Contraseña
            </button>
            <button
              className={`btn-profile ${activeButton === 'Profile' ? 'active' : ''}`}
              onClick={() => {
                setChangeRender('Profile');
                setActiveButton('Profile');
              }}
            >
              👨🏻‍⚕️ Perfil
            </button>
            <button
              className={`btn-profile ${activeButton === 'Email' ? 'active' : ''}`}
              onClick={() => {
                setChangeRender('Email');
                setActiveButton('Email');
              }}
            >
              💌 Cambiar Email
            </button>
            <button
              className={`btn-profile ${activeButton === 'Experience' ? 'active' : ''}`}
              onClick={() => {
                setChangeRender('Experience');
                setActiveButton('Experience');
              }}
            >
              👷🏻‍♀️ Experiencia
            </button>
            <button
              className={`btn-profile ${activeButton === 'Offers' ? 'active' : ''}`}
              onClick={() => {
                setChangeRender('Offers');
                setActiveButton('Offers');
              }}
            >
              📋 Ofertas
            </button>
            <button
              className={`btn-profile ${activeButton === 'Tecnologias' ? 'active' : ''}`}
              onClick={() => {
                setChangeRender('Tecnologias');
                setActiveButton('Tecnologias');
              }}
            >
              📳 Tecnologías
            </button>
            <button
              className={`btn-profile ${activeButton === 'Delete' ? 'active' : ''}`}
              onClick={() => {
                useDeleteUser(setUser);
                setActiveButton('Delete');
              }}
            >
              🚮 Borrar Perfil
            </button>
          </div>

          <div className="fluidContainerProfile">
            {(() => {
              switch (changeRender) {
                case 'Password':
                  return <ChangePassword2 />;
                case 'Profile':
                  return <FormProfile />;
                case 'Email':
                  return <ChangeEmail />;
                case 'Experience':
                  return <Experience />;
                case 'Offers':
                  return <Offers />;
                case 'Tecnologias':
                  return <Tecnologias />;
                default:
                  return null;
              }
            })()}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
