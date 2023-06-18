import MobileDevList from "../../components/MobileDevList/MobileDevList";
import { useMediaQuery } from "react-responsive";

const MobileDevs = () => {
  const isLargeScreen = useMediaQuery({ minWidth: 880 });
  return (
    <div className="outletContainer">
      {isLargeScreen ?
        <h1>
          Enjoy all our awesome <u>Brands</u> and do not forget to follow them!
        </h1>
        :
        <h1>
          Follow our <u>Brands</u>
        </h1>
      }

      <div className="spinner"></div>
      <MobileDevList />
    </div>
  );
};

export default MobileDevs;
