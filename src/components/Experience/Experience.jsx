import React, { useState, useRef } from 'react';
import { createExperience } from '../../services/API_proyect/experience.service';
import Uploadfile from '../Uploadfile';
import './Experience.css';

const Experience = () => {
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
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Empresa:
        <input
          type="text"
          name="workedWith"
          value={experienceData.workedWith}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Duración:
        <input
          type="number"
          name="duration"
          value={experienceData.duration}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Descripción:
        <input
          type="text"
          name="description"
          value={experienceData.description}
          onChange={handleInputChange}
        />
      </label>
      <Uploadfile registerForm={{ ref: fileInput }} />
      <button type="submit">Guardar Experiencia</button>
    </form>
  );
};

export default Experience;
