import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../contexts/authContext';
import Uploadfile from '../Uploadfile';
import { createOffer } from '../../services/API_proyect/offer.service';

const offerTypes = ['Company', 'Freelance'];
const jobTypes = ['Remote', 'Office', 'Hybrid'];
const offerStates = ['Close', 'Suspended', 'Open'];

const CreateOffer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const [serverMessage, setServerMessage] = useState(null);

  const onSubmit = async (data) => {
    const formData = new FormData();
    for (let key in data) {
      formData.append(key, data[key]);
    }
    console.log(user._id);
    const result = await createOffer(formData, user._id);

    if (result.statusText === 'OK') {
      setServerMessage('Offer created successfully!');
    } else {
      setServerMessage('There was an error creating the offer, please try again');
    }
  };
  const handleFileChange = (e) => {
    setValue('image', e.target.files[0]);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('offerTitle', { required: true })}
          placeholder="Offer Title"
        />
        {errors.offerTitle && <p>This field is required</p>}

        <select {...register('offerType', { required: true })}>
          {offerTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
        {errors.offerType && <p>This field is required</p>}

        <input {...register('annualSalary')} placeholder="Annual Salary" />

        <textarea
          {...register('description', { required: true })}
          placeholder="Description"
        />
        {errors.description && <p>This field is required</p>}

        <input {...register('city', { required: true })} placeholder="City" />
        {errors.city && <p>This field is required</p>}

        <select {...register('jobType', { required: true })}>
          {jobTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>
        {errors.jobType && <p>This field is required</p>}

        <input
          {...register('technologies')}
          placeholder="Technologies (comma separated)"
        />

        <select {...register('offerState', { required: true })}>
          {offerStates.map((state, index) => (
            <option key={index} value={state}>
              {state}
            </option>
          ))}
        </select>
        {errors.offerState && <p>This field is required</p>}

        <input type="file" name="image" onChange={handleFileChange} />

        <Uploadfile register={register} />

        <input type="submit" />
      </form>
    </div>
  );
};

export default CreateOffer;
