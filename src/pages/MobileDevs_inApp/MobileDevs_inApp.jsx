import "./MobileDevs_inApp.css";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { app_getById } from "../../services/API_proyect/app.service";
import CardMobileDev_inApp from "../../components/CardMobileDev_inApp/CardMobileDev_inApp";
import { useMediaQuery } from "react-responsive";

const MobileDevs_inApp = () => {
  const [app, setApp] = useState({ mobileDevs: [] });
  const { state } = useLocation();
  const { appId } = state;
  const isLargeScreen = useMediaQuery({ minWidth: 880 });

  useEffect(() => {
    app_getById(appId)
      .then((app) => setApp(app))
      .catch((error) => {
        console.log("Error fetching data from back end ", error);

        return error;
      });
  }, []);

  return (
    <div className="outletContainer">
      {isLargeScreen
        ?
        <h1>
          Enjoy all our awesome <u>Brands</u> included in our Apps!
        </h1>
        :
        <h1>
          <u>Brans</u> in our Apps!
        </h1>
      }
      <div className="mobileDevsInApp-Container">
        {app.mobileDevs.map(mobileDev =>
          <div key={mobileDev._id}>
            <CardMobileDev_inApp mobileDev={mobileDev} />
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileDevs_inApp;
