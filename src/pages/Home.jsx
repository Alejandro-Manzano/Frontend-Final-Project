import { useAuth } from "../contexts/authContext";
import "./Home.css";

export const Home = () => {
  const { user } = useAuth();

  return (
    <div className="home-container">
      
    </div>
  );
};


