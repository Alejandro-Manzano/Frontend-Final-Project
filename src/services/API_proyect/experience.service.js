import { updateToken } from '../../util/updateToken';
import { API } from './service.config';

//Create experience
export const createExperience = async (formData) => {
  return API.post('/users/register', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${updateToken()}`,
    },
  })
    .then((res) => res)
    .catch((error) => {
      return error;
    });
};
