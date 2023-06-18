import { updateToken } from "../../util/updateToken";
import { API } from "./service.config";

//!----------------------GET ALL------------------------
export const app_getAll = async () => {
  return API.get("/app/")
    .then((res) => res.data)
    .catch((error) => {
      return error;
    });
};

//!----------------------GET by IB------------------------
export const app_getById = async (id) => {
  return API.get(`/app/${id}`)
    .then((res) => res.data)
    .catch((error) => {
      return error;
    });
};

// ----------------- Get App FAV -----------
export const app_ToggleApp = async (id, formData) => {
  return API.put(`/app/favorite/${id}`, formData, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res.data)
    .catch((error) => {
      return error;
    });
};
// ----------------- Get Status Fav -----------
export const getFavoriteStatus = async (id) => {
  return API.get(`/app/favoriteStatus/${id}`, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res.data.isFavorite)
    .catch((error) => {
      return error;
    });
};
