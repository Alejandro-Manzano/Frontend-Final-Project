import { updateToken } from "../../util/updateToken";
import { API } from "./service.config";

// ----------------- Get All Developers from DB -----------
export const developer_getAll = async () => {
    return API.get("/users/")
        .then((res) => res.data)
        .catch((error) => {
            return error;
        });
};

// ----------------- Get one developer by Id from DB -----------
export const developer_getById = async (id) => {
    return API.get(`/users/${id}`)
        .then((res) => res.data)
        .catch((error) => {
            return error;
        });
};


// WE DON'T NEED RIGTH NOW --- MAYBE LATER

// // ----------------- Get MobileDev FAV -----------
// export const mobilDev_Toggle = async (id, formData) => {
//     return API.put(`/mobilesDev/favorite/${id}`, formData, {
//         headers: {
//             Authorization: `Bearer ${updateToken()}`,
//         },
//     })
//         .then((res) => res.data)
//         .catch((error) => {
//             return error;
//         });
// };
// // ----------------- Get Status Fav -----------
// export const getFavoriteStatus = async (id) => {
//     return API.get(`/mobilesDev/favoriteStatus/${id}`, {
//         headers: {
//             Authorization: `Bearer ${updateToken()}`,
//         },
//     })
//         .then((res) => res.data.isFavorite)
//         .catch((error) => {
//             return error;
//         });
// };
