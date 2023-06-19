import './Profile.css';

import { useState } from 'react';

import ChangePassword2 from '../components/ChangePassword2/ChangePassword2';
import FormProfile from '../components/FormProfile';
import { useAuth } from '../contexts/authContext';
import useDeleteUser from '../hooks/useDeleteUser';

const Profile = () => {
  const [changeRender, setChangeRender] = useState(true);
  const { setUser } = useAuth();

  return (
    <>
      <div className="containerNavProfile">
        <button className="btn-profile" onClick={() => setChangeRender(false)}>
          Password
        </button>
        <button className="btn-profile" onClick={() => setChangeRender(true)}>
          Profile
        </button>
        <button className="btn-profile" onClick={() => useDeleteUser(setUser)}>
          Delete
        </button>
      </div>

      <div className="fluidContainerProfile">
        {changeRender ? <FormProfile /> : <ChangePassword2 />}
      </div>
    </>
  );
};

export default Profile;
