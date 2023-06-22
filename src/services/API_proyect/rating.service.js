import { updateToken } from '../../util/updateToken';
import { API } from './service.config';

export const createRating = async (data) => {
<<<<<<< HEAD
  return API.post('/rating', data, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
=======
    return API.post('/rating', data, {
        headers: {
            Authorization: `Bearer ${updateToken()}`
        },
    })
        .then((res) => res)
        .catch((error) => {
            return error;
        });
>>>>>>> 68fd69cc3aa5bce8646f65bb2c2f5a5247021a5b
};

export const updateRating = async (data, id) => {
<<<<<<< HEAD
  console.log('Front -> createRating -> data: ', data);

  return API.patch(`/rating/${id}`, data, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
=======
    return API.patch(`/rating/${id}`, data, {
        headers: {
            Authorization: `Bearer ${updateToken()}`
        },
    })
        .then((res) => res)
        .catch((error) => {
            return error;
        });
>>>>>>> 68fd69cc3aa5bce8646f65bb2c2f5a5247021a5b
};

export const getByReference = async (type, idUserWithRating) => {
  // console.log('Front -> createRating -> data: ', data)

  return API.get(`/rating/${type}/${idUserWithRating}`, {
    headers: {
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
