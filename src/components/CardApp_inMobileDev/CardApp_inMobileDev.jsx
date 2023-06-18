import "./CardApp_inMobileDev.css";

export const CardApp_inMobileDev = ({ app }) => (
  <div className="cardAppInMobileDev-Data">
    <img
      className="cardAppInMobileDev-img"
      src={app.image}
      alt={`app's ${app.appName} pic`}
    />
    {showAppInfo(app)}
  </div>
);

const showAppInfo = (app) => {
  // console.log("showAppInfo -> app: ", app);
  return (
    <>
      <div className="cardAppInMobileDev-Info">
        {/* <p>app id: {app._id}</p> */}
        {/* <p>{app.appName}</p> */}
        <p>{app.category}</p>
        <p>{app.codeLanguages}</p>
        <p>{app.appSize} Mbytes</p>
        <h5>{app.description}</h5>
      </div>
    </>
  );
};

export default CardApp_inMobileDev;
