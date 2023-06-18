import { getUserByToken } from "../../services/API_proyect/user.service";
import CardMobileDev from "../CardMobileDev/CardMobileDev";
import { useState, useEffect } from "react";
import "./UserFavoritesMobileDevsList.css";

const UserFavoritesMobileDevsList = () => {
  const [userDataFromDB, setUserDataFromDB] = useState({
    name: "User Test",
    mobileDevs: [],
  });

  useEffect(() => {
    (async () => setUserDataFromDB(await getUserByToken()))();
  }, []);

  return (
    <div className="userFavoritesMobileDevs-Container">
      {userDataFromDB.mobileDevs.map(mobileDev =>
        <div key={mobileDev._id}>
          <CardMobileDev mobileDev={mobileDev} />
        </div>
      )}
    </div>
  );
};

export default UserFavoritesMobileDevsList;
