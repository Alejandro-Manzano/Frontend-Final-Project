import DevelopersList from '../../components/DevelopersList/DevelopersList';
import { useMediaQuery } from 'react-responsive';

const Developers = () => {
  const isLargeScreen = useMediaQuery({ minWidth: 880 });

  return (
    <div className="outletContainer">
      {isLargeScreen ? (
        <h1>
          ¡Echa un vistazo a todos nuestros <u>desarrolladores</u> freelance y no olvides seguirlos!
        </h1>
      ) : (
         
        <h1>
          Follow our <u>Developers</u>
        </h1>
      )}

      <div className="spinner"></div>
      <DevelopersList itemsPerPage={10} />
    </div>
  );
};

export default Developers;
