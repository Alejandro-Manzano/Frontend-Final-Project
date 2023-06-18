import "./CardMobileDev_inApp.css";

export const CardMobileDev = ({ mobileDev }) => (
  <div className="cardMobileDevInApp-Data">
    <h3>{mobileDev.brand}</h3>
    <img
      className="cardMobileDevInApp-img"
      src={mobileDev.image}
      alt={`mobileDev's ${mobileDev.brand} pic`}
    />
    <div className="cardMobileDevInApp-Info">
      {/* <p>app id: {app._id}</p> */}
      {/* <p>{mobileDev.brand}</p> */}
      <p>{mobileDev.OS}</p>
      <p>{mobileDev.versionOS}</p>
      <p>{mobileDev.language}</p>
      <h5>{mobileDev.description}</h5>
    </div>
  </div>
);

export default CardMobileDev;
