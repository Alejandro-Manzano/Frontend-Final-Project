import { useForm } from "react-hook-form";
import "./Register.css";
import { registerUser } from "../services/API_proyect/user.service";
import { useEffect, useState } from "react";
import useUserError from "../hooks/useUserError";
import Uploadfile from "../components/Uploadfile";
import { Navigate } from "react-router-dom";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);

  const formSubmit = async (formData) => {
    const inputfile = document.getElementById("file-upload").files;
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
    if (useUserError(res)) {
      setRes({});
    }
  }, [res]);

  return (
    <>
      <div className="form-wrap">
        <h1>Sign Up</h1>
        <p>Joining is quick, easy, and won’t cost you a penny 😊</p>
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="user_container form-group">
            <input
              className="input_user"
              type="text"
              id="name"
              name="name"
              autoComplete="false"
              {...register("name", { required: true })}
            />
            <label htmlFor="custom-input" className="custom-placeholder">
              username
            </label>
          </div>
          <div className="password_container form-group">
            <input
              className="input_user"
              type="password"
              id="password"
              name="password"
              autoComplete="false"
              {...register("password", { required: true })}
            />
            <label htmlFor="custom-input" className="custom-placeholder">
              password
            </label>
          </div>

          <div className="email_container form-group">
            <input
              className="input_user"
              type="email"
              id="email"
              name="email"
              autoComplete="false"
              {...register("email", { required: true })}
            />
            <label htmlFor="custom-input" className="custom-placeholder">
              email
            </label>

            <div className="sexo">
              <input
                type="radio"
                name="sexo"
                id="hombre"
                value="hombre"
                {...register("gender")}
              />
              <label htmlFor="hombre" className="label-radio hombre">
                Male
              </label>
              <input
                type="radio"
                name="sexo"
                id="mujer"
                value="mujer"
                {...register("gender")}
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
              style={{ background: send ? "#49c1a388" : "#49c1a2" }}
            >
              Register
            </button>
          </div>
          <p className="bottom-text">
            <small>
              By clicking the Sign Up button, you agree to our{" "}
              <a href="#">Terms & Conditions</a> and{" "}
              <a href="#">Privacy Policy</a>.
            </small>
          </p>
        </form>
      </div>
      <footer>
        <p className="parrafoLogin">
          Already have an account? <a href="#">Login Here</a>
        </p>
      </footer>
    </>
  );
};

export default Register;
