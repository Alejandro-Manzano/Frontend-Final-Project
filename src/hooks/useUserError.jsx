import Swal from 'sweetalert2/dist/sweetalert2.all.js';

const useUserError = (res, setRegisterOk) => {
  //! 200 --->  respuesta ok register ok
  if (res?.status == 200) {
    localStorage.setItem('data', JSON.stringify(res));
    setRegisterOk(() => true);
    Swal.fire({
      icon: 'success',
      title: 'Hey there, welcome to my tech page!',
      showConfirmButton: false,
      timer: 1500,
    });
  }

  //! res --> 409 --> Usuario ya registrado

  if (res?.response?.status == 409)
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Looks like that user already exists. Try a different one!',
      showConfirmButton: false,
      timer: 1500,
    });
  //! res --> 500 --> Error general del server

  if (res?.response?.status == 500)
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Internal server error!',
      showConfirmButton: false,
      timer: 1500,
    });

  //! res --> 404 --> codigo en el envio del codigo

  //! error --> nombre de usuario ya exista // error ---> correo ya existe

  if (res?.response?.data?.includes('Fail registering user'))
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'That email is taken. Let’s try another one!',
      showConfirmButton: false,
      timer: 1500,
    });

  //! error ---> validacion de la contraseña

  if (res?.response?.data?.includes('fail creating user'))
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Make sure your password has at least 8 characters, including an uppercase, a lowercase, and a special character.',
      showConfirmButton: false,
      timer: 1500,
    });
};

export default useUserError;
