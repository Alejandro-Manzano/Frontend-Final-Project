import { useState, useEffect } from "react";
//import { mobileDev_getAll } from "../../service/mobileDev.service";
import { app_getAll } from "../../services/API_proyect/app.service";
import CardApp from "../CardApp/CardApp";
import "./AppList.css";
import { Spinner } from "../Spinner/Spinner";

const AppList = () => {
  const [appList, setAppList] = useState([]);
  const [sent, setSent] = useState(false);
  const getData = async () => {
    setSent(true);
    const data = await app_getAll();
    setSent(false);
    setAppList(data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="appsContainer">
      {sent ? (
        <Spinner />
      ) : (
        appList.map((app) => (
          <div key={app._id}>
            <CardApp app={app} />
          </div>
        ))
      )}
    </div>
  );
};

export default AppList;
