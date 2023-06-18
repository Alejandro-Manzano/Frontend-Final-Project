import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useAuth } from "../contexts/authContext";
import FigureUser from "./FigureUser";
import "./FormProfile.css";
import Uploadfile from "./Uploadfile";
import { updateUser } from "../services/API_proyect/user.service";
import useUpdateError from "../hooks/useUpdateError";
import { Navigate } from "react-router-dom";

const FormProfile = () => {
  const { setUser, user } = useAuth();
  const { register, handleSubmit } = useForm();
  const [res, setRes] = useState({});
  const [send, setSend] = useState(false);
  const [changeProfileDataOk, setChangeProfileDataOk] = useState(false);
  const defaultData = {
    name: user?.user,
  };
  //! --------- funcion que controla el formulario-----------------------
  const formSubmit = async (formData) => {
    Swal.fire({
      title: "Ready to switch up your profile details?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "rgb(73, 193, 162)",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const inputfile = document.getElementById("file-upload").files;
        let customFormData;

        if (inputfile.length !== 0) {
          customFormData = { ...formData, image: inputfile[0] };
          setSend(true);
          setRes(await updateUser(customFormData));
          setSend(false);
        } else {
          customFormData = { ...formData };
          setSend(true);
          setRes(await updateUser(customFormData));
          setSend(false);
        }
      }
    });
  };

  //! --------------- USEEFFECT  que controla la gestion de errores ----------------------
  useEffect(() => {
    useUpdateError(res, setChangeProfileDataOk);
  }, [res]);

  //! ---------------- LOS CONDICIONALES CON LOS ESTADOS DE NAVEGACION --------------------

  if (changeProfileDataOk) {
    //! no utilizamos el logout aunque no pasaria nada. No lo utlizo porque da warning
    setUser(() => false);
    localStorage.removeItem("user");
    return <Navigate to="/login" />;
  }

  return (
    <>
      <div className="containerProfile">
        <div className="containerDataNoChange">
          <FigureUser user={user} />
        </div>
        <div className="form-wrap formProfile">
          <p className="formProfile-text-new-profile">Your new profile</p>
          <form onSubmit={handleSubmit(formSubmit)}>
            <div className="user_container form-group">
              <label htmlFor="custom-input" className="custom-placeholder">
                name
              </label>
              <input
                className="input_user"
                type="text"
                id="name"
                name="name"
                autoComplete="false"
                defaultValue={defaultData?.name}
                {...register("name", { required: true })}
              />
            </div>
            <Uploadfile />
            <div className="btn_container">
              <button
                className="btn"
                type="submit"
                disabled={send}
                //style={{ background: send ? "#49c1a388" : "#49c1a2" }}
                //style={{ background: send ? "#008000" : "#37A08E" }}
                style={{
                  background: send
                    ? "#008000"
                    : "var(--background-color-button-login)",
                }}
              >
                CHANGE PROFILE
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormProfile;
