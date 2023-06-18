import { useState, useEffect } from "react";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai";
import "./ToggleApp.css";
import {
  app_ToggleApp,
  getFavoriteStatus,
} from "../../services/API_proyect/app.service";

const ToggleButtonApp = ({ appId }) => {
  // console.log(appId);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const initializeFavoriteState = async () => {
      try {
        const isFav = await getFavoriteStatus(appId);
        setIsFavorite(isFav);
      } catch (error) {
        console.error("Error while checking favorite status", error);
      }
    };
    initializeFavoriteState();
  }, [appId]);

  const handleAddToFavorites = async () => {
    try {
      const response = await app_ToggleApp(appId);
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

export default ToggleButtonApp;
