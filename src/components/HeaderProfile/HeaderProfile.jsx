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
        if (userDataProfile) {
          setUserData(userDataProfile.data);
        }
      } catch (error) {
        console.error('Error al obtener el usuario:', error);
      }
    };

    if (user && user._id) {
      fetchUser();
    }
  }, [user]);

  return (
    <div className="user-profile">
      <div className="user-image">
        <img src={userData.image} alt={`${userData.name}`} />
      </div>
      <div className="user-info">
        <p>{userData.following.length} Following </p>
        <p>{userData.followers.length} Followers </p>
      </div>
    </div>
  );
};

export default UserProfile;
