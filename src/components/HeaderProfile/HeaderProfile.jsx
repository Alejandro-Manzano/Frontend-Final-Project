import React, { useState, useEffect } from 'react';
import './HeaderProfile.css';
import { getUserById } from '../../services/API_proyect/user.service';
import { useAuth } from '../../contexts/authContext';

const UserProfile = () => {
  const [userData, setUserData] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userDataProfile = await getUserById(user._id);
        console.log(userDataProfile);
        if (userDataProfile) {
          setUserData(userDataProfile.data);
        }
      } catch (error) {
        console.error('Error al obtener el usuario:', error);
      }
    };

    fetchUser();
  }, [user]);

  return (
    <div className="user-profile">
      <div className="user-image">
        {userData && <img src={userData.image} alt={userData.name} />}
      </div>
      <div className="user-info">
        {userData && (
          <>
            <p className="follower-container">{userData.following?.length} Following </p>
            <p className="follower-container">{userData.followers?.length} Followers </p>
          </>
        )}
      </div>
    </div>
  );
};

export default UserProfile;