import React, { useState, useRef } from 'react';
import { createExperience } from '../../services/API_proyect/experience.service';
import Uploadfile from '../Uploadfile';
import './createExperience.css';
import handleExperienceResponse from '../../hooks/useExperience';

const createExperienceUser = () => {
  const [experienceData, setExperienceData] = useState({
    workedWith: '',
    duration: 0,
    technologies: [],
    description: '',
  });

  const fileInput = useRef();

  const handleInputChange = (event) => {
    setExperienceData({
      ...experienceData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();

    for (const key in experienceData) {
      formData.append(key, experienceData[key]);
    }

    const file = fileInput.current.files[0];
    if (file) {
      formData.append('image', file);
    }
    try {
      const res = await createExperience(formData);
      console.log(res.data);
      handleExperienceResponse(res);
    } catch (err) {
      console.log(err);
      handleExperienceResponse(err.response);
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit} className="form_Create">
      <div className="form-empresa-duracion">
      <label className="form-label">
        <input
          type="text"
          placeholder='Empresa'
          name="workedWith"
          value={experienceData.workedWith}
          onChange={handleInputChange}
          className="form-input"
        />
      </label>
      
      <label className="form-label">

        <input
          type="number"
          placeholder={experienceData.duration ? '' : 'Duración'}
          name="duration"
          // value={experienceData.duration}
          onChange={handleInputChange}
          className="form-input"
        />
      </label>
      </div>
      <label className="form-label-description-label">
        <input
        
          type="text"
          placeholder='Descripción'
          name="description"
          value={experienceData.description}
          onChange={handleInputChange}
          className="form-input-description-input"
        />
      
      </label>
      
      
      
      </form>
      <div className="form-Uploadfile_photo_profile"> 
      <Uploadfile className="form-Uploadfile_photo_profile" registerForm={{ ref: fileInput }} />
      <button  type="submit" className="btn_profile_general">
        GUARDAR EXPERIENCIA
      </button>
      </div>
      </>
  );
};

export default createExperienceUser;
