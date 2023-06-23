import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../contexts/authContext';
import Uploadfile from '../Uploadfile';
import { createOffer } from '../../services/API_proyect/offer.service';
import './createOffer.css';

const CreateOffer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const [serverMessage, setServerMessage] = useState(null);
  console.log(user);
  const onSubmit = async (data) => {
    const formData = new FormData();
    for (let key in data) {
      formData.append(key, data[key]);
    }
    console.log(user._id);
    const result = await createOffer(formData, user._id);
    console.log(result);
    if (result.statusText === 'OK') {
      setServerMessage('Offer created successfully!');
    } else {
      setServerMessage('There was an error creating the offer, please try again');
    }
  };
  const handleFileChange = (e) => {
    setValue('image', e.target.files[0]);
  };

  const offerTypes = ['Company', 'Freelance'];
  const jobTypes = ['Remote', 'Office', 'Hybrid'];
  const offerStates = ['Close', 'Suspended', 'Open'];

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-field">
          <label className={`form-label ${errors.offerTitle ? 'required-label' : ''}`}>
            Offer Title
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
          <label className="form-label">Annual Salary</label>
          <input
            className="input-create-offer"
            {...register('annualSalary')}
            placeholder="Annual Salary"
          />
        </div>

        <div className="form-field">
          <label className={`form-label ${errors.description ? 'required-label' : ''}`}>
            Description
          </label>
          <textarea
            {...register('description', { required: true })}
            className="textarea-description"
            placeholder="Description"
          />
          {errors.description && <p className="error-message">This field is required</p>}
        </div>

        <div className="form-field">
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
        </div>

        <div className="form-field">
          <label className="form-label">Image</label>
          <input
            type="file"
            name="image"
            className="file-input"
            onChange={handleFileChange}
          />
        </div>

        <Uploadfile register={register} />

        <input className="btn-submit-create-offer" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default CreateOffer;
