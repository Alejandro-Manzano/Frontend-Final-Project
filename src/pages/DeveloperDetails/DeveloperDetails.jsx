import { useLocation } from "react-router-dom";

const DeveloperDetails = () => {
    const { state } = useLocation();
    const { developer } = state;

    console.log("DeveloperDetails -> developer: ", developer)
    return (
        <div>DeveloperDetails</div>
    )
}

export default DeveloperDetails