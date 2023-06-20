import DevelopersList from "../../components/DevelopersList/DevelopersList";
import { useMediaQuery } from "react-responsive";

const Developers = () => {
    const isLargeScreen = useMediaQuery({ minWidth: 880 });

    return (
        <div className="outletContainer">
            {isLargeScreen ?
                <h1>
                    Check out all our freeland <u>Developers</u> and do not forget to follow them!
                </h1>
                :
                <h1>
                    Follow our <u>Developers</u>
                </h1>
            }

            <div className="spinner"></div>
            <DevelopersList itemsPerPage={1} />
        </div>
    );
};

export default Developers;
