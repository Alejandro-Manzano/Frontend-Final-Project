import AppList from "../../components/AppList/AppList";
import { useMediaQuery } from "react-responsive";

const Apps = () => {
  const isLargeScreen = useMediaQuery({ minWidth: 880 });
  return (
    <div className="outletContainer">
      {isLargeScreen ? <ShowTitleMsgBigScreen /> : <ShowTitleMsgSmallScreen />}

      <AppList />
    </div>
  );
};

const ShowTitleMsgBigScreen = () => (
  <h1>
    Enjoy all our awesome <u>Apps</u> and do not forget to follow them!
  </h1>
);

const ShowTitleMsgSmallScreen = () => (
  <h1>
    Follow our <u>Apps</u>
  </h1>
);
export default Apps;
