import { useAuth } from "../contexts/authContext";
import "./Home.css";
import RegisterNote from "../components/RegisterNote/RegisterNote";
import UserWelcome from "../components/UserWelcome/UserWelcome";

export const Home = () => {
  const { user } = useAuth();

  return (
    <div className="homeContainer">
      {user !== null ? <UserWelcome /> : <RegisterNote />}
    </div>
  );
};

{
  /* <h1 className="titleHome">Bienvenido {user.user}</h1> */
}
