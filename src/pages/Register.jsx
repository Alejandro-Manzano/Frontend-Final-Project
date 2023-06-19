import './Register.css';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, Navigate } from 'react-router-dom';

import Uploadfile from '../components/Uploadfile';
import { useAuth } from '../contexts/authContext';
import useUserError from '../hooks/useUserError';
import { registerUser } from '../services/API_proyect/user.service';

const Register = () => {
  const { bridgeData } = useAuth();
  const { register, handleSubmit } = useForm();
  const [res, setRes] = useState({});
  const [registerOk, setRegisterOk] = useState(false);
  const [send, setSend] = useState(false);

  const formSubmit = async (formData) => {
    const inputfile = document.getElementById('file-upload').files;
    let customFormData;

    if (inputfile.length !== 0) {
      customFormData = { ...formData, image: inputfile[0] };
      setSend(true);
      setRes(await registerUser(customFormData));
      setSend(false);
    } else {
      customFormData = { ...formData };
      setSend(true);
      setRes(await registerUser(customFormData));
      setSend(false);
    }
  };

  useEffect(() => {
    useUserError(res, setRegisterOk);
    bridgeData('ALLUSER');
  }, [res]);

  if (registerOk) {
    return <Navigate to="/verifyCode" />;
  }
  return (
    <>
      <div className="form-wrap">
        <h1>Sign Up</h1>
        <p>Get started for free in less time than it takes to make a cup of coffee 😊</p>
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="user_container form-group">
            <label htmlFor="custom-input" className="custom-placeholder">
              username
            </label>
            <input
              className="input_user"
              type="text"
              id="name"
              name="name"
              autoComplete="false"
              {...register('name', { required: true })}
            />
          </div>
          <div className="password_container form-group">
            <label htmlFor="custom-input" className="custom-placeholder">
              password
            </label>
            <input
              className="input_user"
              type="password"
              id="password"
              name="password"
              autoComplete="false"
              {...register('password', { required: true })}
            />
          </div>

          <div className="email_container form-group">
            <label htmlFor="custom-input" className="custom-placeholder">
              email
            </label>
            <input
              className="input_user"
              type="email"
              id="email"
              name="email"
              autoComplete="false"
              {...register('email', { required: true })}
            />

            <div className="sexo">
              <input
                type="radio"
                name="sexo"
                id="hombre"
                value="hombre"
                {...register('gender')}
              />
              <label htmlFor="hombre" className="label-radio hombre">
                Male
              </label>
              <input
                type="radio"
                name="sexo"
                id="mujer"
                value="mujer"
                {...register('gender')}
              />
              <label htmlFor="mujer" className="label-radio mujer">
                Female
              </label>
            </div>
            <Uploadfile />
          </div>

          <div className="btn_container">
            <button
              className="btn"
              type="submit"
              disabled={send}
              style={{
                background: send ? '#49c1a388' : 'var(--background-color-button-login)',
              }}
            >
              REGISTER
            </button>
          </div>
          <p className="bottom-text">
            <small>
              By clicking the Sign Up button, you agree to our{' '}
              <Link className="anchorCustom">Terms & Conditions</Link> and{' '}
              <Link className="anchorCustom">Privacy Policy</Link>.
            </small>
          </p>
        </form>
      </div>
      <div className="footerForm">
        <p className="parrafoLogin">
          Already have an account? <Link to="/login">Login Here</Link>
        </p>
      </div>
    </>
  );
};

export default Register;
