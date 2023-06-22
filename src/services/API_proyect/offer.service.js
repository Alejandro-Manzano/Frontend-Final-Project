import { updateToken } from "../../util/updateToken";
import { API } from "./service.config";

// ----------------- Get All Offers from DB -----------
export const offer_getAll = async () => {
    return API.get("/offers/")
        .then((res) => res.data)
        .catch((error) => {
            return error;
        });
};