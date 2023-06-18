import ToggleButton from "../Toggle/Toggle";
import "./CardMobileDev.css";
import { useNavigate } from "react-router-dom";

export const CardMobileDev = ({ mobileDev }) => {
  const navigate = useNavigate();
  const pathById = `/mobileDev/apps`;
  // console.log("mobileDev: ", mobileDev);
  return (
    <div className="mobileDev-Info">
      {/* <p>{mobileDev.brand}</p> */}
      <img src={mobileDev.image} alt={`mobileDev's ${mobileDev.brand} pic`} />
      <div className="mobileDev-Info-tabla">
        <div className="mobileDev-Info-tabla-p">
          <div className="mobileDev-Info-tabla-Titulo-OS">
            <u>OS</u>
            <p className="mobileDev-Info-tabla-OS">{mobileDev.OS}</p>
          </div>
          <div className="mobileDev-Info-tabla-Titulo-VersionOS">
            <u>VersionOS</u>
            <p className="mobileDev-Info-tabla-versionOS">
              {mobileDev.versionOS}
            </p>
          </div>
          <div className="mobileDev-Info-tabla-Titulo-Language">
            <u>Language</u>
            <p className="mobileDev-Info-tabla-language">
              {mobileDev.language}
            </p>
          </div>
        </div>
      </div>
      <h5>{mobileDev.description}</h5>
      <div className="button-Holder">
        <ToggleButton className="ToggleMobileDev" mobileDevId={mobileDev._id} />
        <button
          className="button-MobileDev"
          onClick={() =>
            navigate(pathById, {
              state: { mobileDevId: mobileDev._id, color: "blue" },
            })
          }
        >
          Show Apps
        </button>
      </div>
    </div>
  );
};

export default CardMobileDev;
