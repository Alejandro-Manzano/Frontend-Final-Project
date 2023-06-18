import ToggleButtonApp from "../ToggleApp/ToggleApp";
import "./CardApp.css";
import { useNavigate } from "react-router-dom";

export const CardApp = ({ app }) => {
  const navigate = useNavigate();
  const pathById = `/app/mobileDevs`;

  return (
    <div className="app-Info">
      <img src={app.image} alt={`app's ${app.appName} pic`} />
      {/* <p> {app.appName}</p> */}
      <div className="app-Info-tabla">
        <div className="app-Info-tabla-p">
          <div className="app-Info-tabla-Titulo-Category">
            {" "}
            <u>Category</u>
            <p className="app-Info-tabla-Category">{app.category}</p>
          </div>
          <div className="app-Info-tabla-Titulo-Languages">
            <u>Languages</u>
            <p className="app-Info-tabla-Languages">{app.codeLanguages}</p>
          </div>
          <div className="app-Info-tabla-Titulo-Size">
            <u>Size</u>
            <p className="app-Info-tabla-appSize">{app.appSize} Mbytes</p>
          </div>
        </div>
      </div>

      <h5> {app.description}</h5>
      <div className="button-Holder">
        <ToggleButtonApp appId={app._id} />
        <button
          className="button-App"
          onClick={() =>
            navigate(pathById, {
              state: { appId: app._id, color: "blue" },
            })
          }
        >
          Show Mobiles
        </button>
      </div>
    </div>
  );
};

export default CardApp;
