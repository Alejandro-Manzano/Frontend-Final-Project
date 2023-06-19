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
  const [role, setRole] = useState(null);

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

  if (!role) {
    return (
      <div className="role_selection">
        <h3 className='title-role'>Select your interested role 😊</h3>
        <button className='btn-role' onClick={() => setRole('freelancer')}>Freelancer</button>
        <button className='btn-role' onClick={() => setRole('company')}>Company</button>
      </div>
    );
  }

  return (
    <>
      <div className="form-wrap">
        <h1>Sign Up</h1>
        <p>Collaborate with industry-leading companies and developers in no time, quicker than setting up a development environment.💻</p>
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="user_container form-group">
            <label htmlFor="custom-input" className="custom-placeholder">
              {role === 'company' ? 'Company Name' : 'Name'}
            </label>
            <input
              className="input_user"
              type="text"
              id="name"
              name={role === 'company' ? 'companyName' : 'name'}
              autoComplete="false"
              {...register(role === 'company' ? 'companyName' : 'name', { required: true })}
            />
            {role !== 'company' && (
              <>
                <label htmlFor="custom-input" className="custom-placeholder">
                  Surname
                </label>
                <input
                  className="input_user"
                  type="text"
                  id="surname"
                  name="surname"
                  autoComplete="false"
                  {...register('surname', { required: true })}
                />
              </>
            )}
            <label htmlFor="custom-input" className="custom-placeholder">
              City
            </label>
            <input
              className="input_user"
              type="text"
              id="city"
              name="city"
              autoComplete="false"
              {...register('city', { required: true })}
            />
            <label htmlFor="custom-input" className="custom-placeholder">
              Description
            </label>
            <input
              className="input_user"
              type="text"
              id="description"
              name="description"
              autoComplete="false"
              {...register('description', { required: true })}
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
