import React, { useState, useRef, useEffect } from 'react';
import { createExperience } from '../../services/API_proyect/experience.service';
import Uploadfile from '../Uploadfile';
import './createExperience.css';
import handleExperienceResponse from '../../hooks/useExperience';
import { useForm } from 'react-hook-form';
import { technologies } from '../../data/object.tecnologias';

const createExperienceUser = () => {
  const { register, handleSubmit } = useForm();
  const [experienceData, setExperienceData] = useState({
    workedWith: '',
    duration: 0,
    technologies: [],
    description: '',
  });

  const [arrayTech, setArrayTech] = useState([]);

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

    formData = { ...formData, technologies: arrayTech };

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

  const createArrayTech = ({ target }) => {
    if (arrayTech.includes(target.id)) {
      setArrayTech((value) => {
        const customArray = [];
        value.forEach((element) => {
          if (target.id != element) customArray.push(element);
        });
        return customArray;
      });
    } else {
      setArrayTech((value) => {
        const customArray = [...value, target.id];
        return customArray;
      });
    }
  };

  useEffect(() => {
    console.log('🍟', arrayTech);
  }, [arrayTech]);

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
        </div>

        <label className="form-label">
          <input
            type="number"
            placeholder={experienceData.duration ? '' : 'Duración'}
            name="duration"
            className="form-input"
            {...register('duration')}
          />
        </label>
        <label className="form-label-description-label">
          {' '}
          Tecnologias
          <div className="tecnologies-experience">
            {technologies.map((technology, index) => (
              <figure key={index} className="tecnologia-item" id={technology.name}>
                <div className="image-container">
                  <img
                    className="tech-image"
                    src={technology.image}
                    alt={technology.name}
                  />
                </div>
                <p className="tech-image-text">{technology.name}</p>
                <input
                  type="checkbox"
                  name={technology.name}
                  id={technology.name}
                  onChange={createArrayTech}
                />
              </figure>
            ))}
          </div>
        </label>
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
