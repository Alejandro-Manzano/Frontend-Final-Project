import { useState, useEffect } from "react";
import CardApp from "../CardApp/CardApp";
import "./UserFavoritesAppsList.css";
import { getUserByToken } from "../../services/API_proyect/user.service";

const UserFavoritesAppsList = () => {
  const [userDataFromDB, setUserDataFromDB] = useState({
    name: "User Test",
    apps: [],
  });

  useEffect(() => {
    (async () => setUserDataFromDB(await getUserByToken()))();
  }, []);

  return (
    <>
      {/* {showWelcome(userDataFromDB)} */}
      <div className="userFavoritesApps-Container">{userDataFromDB.apps.map(app =>
        <div key={app._id}>
          <CardApp app={app} />
        </div>
      )}
      </div>
    </>
  );
};

export default UserFavoritesAppsList;
