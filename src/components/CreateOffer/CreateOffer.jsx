import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../contexts/authContext';
import Uploadfile from '../Uploadfile';
import { createOffer } from '../../services/API_proyect/offer.service';
import './createOffer.css';
import { technologies } from '../../data/object.tecnologias';
import handleOfferCreationResponse from '../../hooks/useCreateOffer';

const CreateOffer = () => {
  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);
  const [arrayTech, setArrayTech] = useState([]);
  const offerTypes = ['CompanyOffer', 'FreelandOffer'];
  const jobTypes = ['Remote', 'Office', 'Hybrid'];
  const offerStates = ['Close', 'Suspended', 'Open'];
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [serverMessage, setServerMessage] = useState(null);

  const onSubmit = async (data) => {
    const customFormData = {
      ...data,
      annualSalary: parseInt(data.annualSalary),
      offerState: 'Open',
      technologies: arrayTech, // Agrega las tecnologías al objeto de los datos
    };

    setSend(true);
    const response = await createOffer(customFormData);
    setRes(response);
    handleOfferCreationResponse(response);
    setSend(false);
  };

  useEffect(() => {
    if (res.status == 200) {
      console.log(res);
    }
  }, []);

  const handleFileChange = (e) => {
    setValue('image', e.target.files[0]);
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

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-field">
          <label className={`form-label ${errors.offerTitle ? 'required-label' : ''}`}>
            Titulo de la oferta
          </label>
          <input
            className="input-create-offer"
            {...register('offerTitle', { required: true })}
            placeholder="Offer Title"
          />
          {errors.offerTitle && <p className="error-message">This field is required</p>}
        </div>

        <div className="form-field">
          <label className="form-label">Offer Type</label>
          <select
            className={`input-create-offer ${errors.offerType ? 'required-label' : ''}`}
            {...register('offerType', { required: true })}
          >
            {offerTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.offerType && <p className="error-message">This field is required</p>}
        </div>

        <div className="form-field">
          <label className="form-label">Job Type</label>
          <select
            className={`input-create-offer ${errors.jobType ? 'required-label' : ''}`}
            {...register('jobType', { required: true })}
          >
            {jobTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.jobType && <p className="error-message">This field is required</p>}
        </div>

        <div className="form-field">
          <label className={`form-label ${errors.technologies ? 'required-label' : ''}`}>
            Technologies
          </label>
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
          {errors.technologies && <p className="error-message">This field is required</p>}
        </div>

        <div className="form-field">
          <label className={`form-label ${errors.description ? 'required-label' : ''}`}>
            Description
          </label>
          <textarea
            className="input-create-offer"
            {...register('description', { required: true })}
            placeholder="Offer Description"
          ></textarea>
          {errors.description && <p className="error-message">This field is required</p>}
        </div>

        <div className="form-field">
          <label className={`form-label ${errors.annualSalary ? 'required-label' : ''}`}>
            Salario anual
          </label>
          <input
            className="input-create-offer"
            {...register('annualSalary', { required: true })}
            placeholder="Annual Salary"
          />
          {errors.annualSalary && <p className="error-message">This field is required</p>}
        </div>

        <div className="form-field">
          <label className={`form-label ${errors.city ? 'required-label' : ''}`}>
            Ciudad
          </label>
          <input
            className="input-create-offer"
            {...register('city', { required: true })}
            placeholder="City"
          />
          {errors.city && <p className="error-message">This field is required</p>}
        </div>

        <input className="btn-submit-create-offer" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default CreateOffer;
