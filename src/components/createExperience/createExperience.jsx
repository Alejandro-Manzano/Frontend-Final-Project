import React, { useState, useRef } from 'react';
import { createExperience } from '../../services/API_proyect/experience.service';
import Uploadfile from '../Uploadfile';
import './createExperience.css';
import handleExperienceResponse from '../../hooks/useExperience';
import { useForm } from 'react-hook-form';

const createExperienceUser = () => {
  const { register, handleSubmit } = useForm();
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

  const formSubmit = async (formData) => {
    console.log('entro');
    const file = fileInput.current.files[0];
    if (file) {
      formData = { ...formData, image: file };
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
      <form onSubmit={handleSubmit(formSubmit)} className="form_Create">
        <div className="form-empresa-duracion">
          <label className="form-label">
            <input
              type="text"
              placeholder="Empresa"
              name="workedWith"
              className="form-input"
              {...register('workedWith', { required: true })}
            />
          </label>

          <label className="form-label">
            <input
              type="number"
              placeholder={experienceData.duration ? '' : 'Duración'}
              name="duration"
              className="form-input"
              {...register('duration')}
            />
          </label>
        </div>
        <label className="form-label-description-label">
          <input
            type="text"
            placeholder="Descripción"
            name="description"
            className="form-input-description-input"
            {...register('description')}
          />
        </label>
        <div className="form-Uploadfile_photo_profile">
          <Uploadfile
            className="form-Uploadfile_photo_profile"
            registerForm={{ ref: fileInput }}
          />
        </div>
        <button type="submit" className="btn_profile_general">
          GUARDAR EXPERIENCIA
        </button>
      </form>
    </>
  );
};

export default createExperienceUser;
