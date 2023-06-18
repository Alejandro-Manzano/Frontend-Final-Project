import { useState, useEffect } from "react";
//import { mobileDev_getAll } from "../../service/mobileDev.service";
import { mobileDev_getAll } from "../../services/API_proyect/mobileDev.service";
import CardMobileDev from "../CardMobileDev/CardMobileDev";
import "./MobileDevList.css";
import { Spinner } from "../Spinner/Spinner";

const MobileDevList = () => {
  const [mobileDevList, setMobileDevList] = useState([]);
  const [sent, setSent] = useState(false);
  const getData = async () => {
    setSent(true);
    const data = await mobileDev_getAll();
    setSent(false);

    setMobileDevList(data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="mobileDevsContainer">
      {sent ? (
        <Spinner />
      ) : (
        mobileDevList.map((mobileDev) => (
          <div key={mobileDev._id}>
            <CardMobileDev mobileDev={mobileDev} />
          </div>
        ))
      )}
    </div>
  );
};

export default MobileDevList;
