import './Profile.css';

import { useState } from 'react';

import ChangePassword2 from '../components/ChangePassword2/ChangePassword2';
import FormProfile from '../components/FormProfile';
import { useAuth } from '../contexts/authContext';
import useDeleteUser from '../hooks/useDeleteUser';

const Profile = () => {
  const [changeRender, setChangeRender] = useState(true);
  const { setUser } = useAuth();
  const [activeButton, setActiveButton] = useState('Profile');

  return (
    <>
      <div className="mainContainer">
        <div className="containerNavProfile">
          <button
            className={`btn-profile ${activeButton === 'Password' ? 'active' : ''}`}
            onClick={() => {
              setChangeRender(false);
              setActiveButton('Password');
            }}
          >
            Password
          </button>
          <button
            className={`btn-profile ${activeButton === 'Profile' ? 'active' : ''}`}
            onClick={() => {
              setChangeRender(true);
              setActiveButton('Profile');
            }}
          >
            Profile
          </button>
          <button
            className={`btn-profile ${activeButton === 'Delete' ? 'active' : ''}`}
            onClick={() => {
              useDeleteUser(setUser);
              setActiveButton('Delete');
            }}
          >
            Delete
          </button>
        </div>

        <div className="fluidContainerProfile">
          {changeRender ? <FormProfile /> : <ChangePassword2 />}
        </div>
      </div>
    </>
  );
};

export default Profile;
