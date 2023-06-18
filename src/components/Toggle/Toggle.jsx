import { useState, useEffect } from "react";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import "./Toggle.css";
import {
  mobilDev_Toggle,
  getFavoriteStatus,
} from "../../services/API_proyect/mobileDev.service";

const ToggleButton = ({ mobileDevId }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const initializeFavoriteState = async () => {
      try {
        const isFav = await getFavoriteStatus(mobileDevId);
        setIsFavorite(isFav);
      } catch (error) {
        console.error("Error while checking favorite status", error);
      }
    };

    initializeFavoriteState();
  }, [mobileDevId]);

  const handleAddToFavorites = async () => {
    try {
      const response = await mobilDev_Toggle(mobileDevId);
      if (
        response === "Added to favourites!" ||
        response === "Removed from favourites"
      ) {
        setIsFavorite(!isFavorite);
      }
    } catch (error) {
      console.error("Error while adding to favorites", error);
    }
  };

  return (
    <button
      onClick={handleAddToFavorites}
      className={`ToggleButtonMobileDev ${isFavorite ? "favorite" : ""}`}
    >
      {isFavorite ? (
        <AiTwotoneHeart size={25} className="favorite-icon" />
      ) : (
        <AiOutlineHeart size={25} className="favorite-icon" />
      )}
    </button>
  );
};

export default ToggleButton;
