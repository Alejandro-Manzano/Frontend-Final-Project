import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { forgotPasswordUser } from "../services/API_proyect/user.service";
import useForgotPasswordError from "../hooks/useForgotPasswordError";

const ForgotPassword = () => {
  const { register, handleSubmit } = useForm();
  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);
  const [forgetOk, setForgetOk] = useState(false);

  //! -------------funcion que gestiona la data del formulario

  const formSubmit = async (formData) => {
    setSend(true);
    setRes(await forgotPasswordUser(formData));
    setSend(false);
  };

  //! --------------useEffect que gestiona los errores
  useEffect(() => {
    useForgotPasswordError(res, setForgetOk);
  }, [res]);

  //! -------------- los condicionales que gestionan los estados de navegacion

  if (forgetOk) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <div className="form-wrap">
        <h1>Change your password 🔓</h1>

        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="user_container form-group">
            <label htmlFor="custom-input" className="custom-placeholder">
              Email
            </label>
            <input
              className="input_user"
              type="text"
              id="email"
              name="email"
              autoComplete="false"
              {...register("email", { required: true })}
            />
          </div>

          <div className="btn_container">
            <button
              className="btn"
              type="submit"
              disabled={send}
              style={{ background: send ? "#49c1a388" : "#2f7a67" }}
            >
              CHANGE PASSWORD
            </button>
          </div>

          <p className="bottom-text">
            <small>Enter your email to send you the new password 💌</small>
          </p>
        </form>
      </div>
    </>
  );
};

export default ForgotPassword;
