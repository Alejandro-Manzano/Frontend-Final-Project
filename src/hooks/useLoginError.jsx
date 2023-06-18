import Swal from "sweetalert2/dist/sweetalert2.all.js";

const useLoginError = (res, setLoginOk, userlogin) => {
  // -------404 o un 500  en este caso --------->res.response
  // -------200 ---> entramos directos a la ---->res.data
  //! -------status: 500

  if (res?.response?.status == 500)
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Internal Server Error ❎!",
      showConfirmButton: false,
      timer: 1500,
    });

  //! ---------- 200 : {token , user}
  if (res?.status == 200) {
    const dataCustom = {
      token: res.data.token,
      user: res.data.user.name,
      email: res.data.user.email,
      image: res.data.user.image,
      check: res.data.user.check,
    };

    const dataSting = JSON.stringify(dataCustom);
    userlogin(dataSting);
    setLoginOk(() => true);
    Swal.fire({
      icon: "success",
      title: "Hey there, welcome to my tech page!",
      text: "Succesfully logged in ✅",
      showConfirmButton: false,
      timer: 1500,
    });
  }

  //! ---------- 404: password dont match
  if (res?.response?.data?.includes("Fail matching passwords"))
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Password don't match!",
      showConfirmButton: false,
      timer: 1500,
    });

  //! ---------- 404: User no register

  if (res?.response?.data?.includes("Fail registering user"))
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Unregistered user!",
      showConfirmButton: false,
      timer: 1500,
    });

  //! ---------- Wrong Password

  if (res?.response?.data?.includes("Wrong password, please try again"))
    Swal.fire({
      icon: "error",
      title: "Wrong Password",
      text: "The password you introduced is incorrect. Please, try again",
      showConfirmButton: false,
      timer: 1500,
    });

  //! ---------- Wrong Email

  if (res?.response?.data?.includes("Wrong email address, please try again"))
    Swal.fire({
      icon: "error",
      title: "Wrong Email",
      text: "The email you introduced is incorrect. Please, try again",
      showConfirmButton: false,
      timer: 1500,
    });
};

export default useLoginError;
