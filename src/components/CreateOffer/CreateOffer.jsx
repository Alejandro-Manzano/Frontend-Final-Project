import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../contexts/authContext';
import Uploadfile from '../Uploadfile';
import { createOffer } from '../../services/API_proyect/offer.service';
import './createOffer.css';

const CreateOffer = () => {
  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);
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
    // offerTitle: req.body.offerTitle,
    // offerType: req.body.offerType,
    // experienceYears: req.body.experienceYears,
    // annualSalary: req.body.annualSalary,
    // description: req.body.description,
    // city: req.body.city,
    // jobType: req.body.jobType,
    // technologies: arrayTechnology,

    const customFormData = {
      ...data,
      annualSalary: parseInt(data.annualSalary),
      offerState: 'Open',
    };

    console.log(customFormData);
    setSend(true);
    setRes(await createOffer(customFormData));
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
          <input
            className="input-create-offer"
            {...register('technologies', { required: true })}
            placeholder="Technologies"
          />
          {errors.technologies && <p className="error-message">This field is required</p>}
        </div>

        <div className="form-field">
          <label className={`form-label ${errors.city ? 'required-label' : ''}`}>
            City
          </label>
          <input
            className="input-create-offer"
            {...register('city', { required: true })}
            placeholder="City"
          />
          {errors.city && <p className="error-message">This field is required</p>}
        </div>

        <div className="form-field">
          <label className="form-label">Salario anual</label>
          <input
            className="input-create-offer"
            {...register('annualSalary')}
            placeholder="Salario anual"
          />
        </div>

        <div className="form-field">
          <label className={`form-label ${errors.description ? 'required-label' : ''}`}>
            Descripción
          </label>
          <textarea
            {...register('description', { required: true })}
            className="textarea-description"
            placeholder="Descripción"
          />
          {errors.description && <p className="error-message">This field is required</p>}
        </div>

        {/* <div className="form-field">
          <label className="form-label">Offer State</label>
          <select
            className={`input-create-offer ${errors.offerState ? 'required-label' : ''}`}
            {...register('offerState', { required: true })}
          >
            {offerStates.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>
          {errors.offerState && <p className="error-message">This field is required</p>}
        </div> */}

        {/* <div className="form-field">
          <label className="form-label">Image</label>
          <input
            type="file"
            name="image"
            className="file-input"
            onChange={handleFileChange}
          />
        </div>

        <Uploadfile register={register} /> */}

        <input className="btn-submit-create-offer" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default CreateOffer;
