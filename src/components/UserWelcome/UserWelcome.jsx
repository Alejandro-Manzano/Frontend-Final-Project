import { TbPlant2 } from "react-icons/tb";
import { useAuth } from "../../contexts/authContext";
import { useMediaQuery } from "react-responsive";

import "./UserWelcome.css";

const UserWelcome = () => {
  const { user } = useAuth();
  const isLargeScreen = useMediaQuery({ minWidth: 768 });

  return (
    <div className="userWelcome-container">
      <TbPlant2 size={isLargeScreen ? 160 : 80} />

      <p className="userWelcome-welcome-text">
        Hi {user.user}! Thanks for stopping by.
      </p>

      <div className="userWelcome-logo">
        <TbPlant2 size={isLargeScreen ? 50 : 30} />
        <h3 className="userWelcome-Digital-Nexus-text">Digital Nexus</h3>
      </div>

      <p className="userWelcome-info-text">
        We’ve made some updates to our website that we think you’ll love.
      </p>
    </div>
  );
};

export default UserWelcome;
