import React from 'react';
import { deleteExperience } from '../../services/API_proyect/experience.service';
import "./DeleteExperience.css"

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
    <button className="btn_profile_general btn_profile_general_delete_expe" onClick={() => handleDeleteExperience(id)}>
      Borrar Experiencia
    </button>
  );
};

export default DeleteExperienceButton;
