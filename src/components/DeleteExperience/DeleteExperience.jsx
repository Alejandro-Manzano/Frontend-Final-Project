import React from 'react';
import { deleteExperience } from '../../services/API_proyect/experience.service';

const DeleteExperienceButton = ({ id, experiences, setExperiences }) => {
  const handleDeleteExperience = async (id) => {
    try {
      await deleteExperience(id);
      setExperiences(experiences.filter((experience) => experience._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button className="btn-delete-experience" onClick={() => handleDeleteExperience(id)}>
      Delete
    </button>
  );
};

export default DeleteExperienceButton;
