import Swal from 'sweetalert2/dist/sweetalert2.all.js';

const useChangeEmailError = (res, setChangeEmailOK) => {
  let contador;
  //! if para comprobar con un contador que no tenemos nada en false es decir no se ha actualizado
  if (res?.data) {
    contador = 0;
    res?.data?.testUpdate?.map((item) => {
      console.log('entro');
      for (let clave in item) {
        if (item[clave] == false) {
          contador++;
        }
      }
    });
  }

  //! ---------- 200: cuando se ha actualizado todo
  if (contador == 0) {
    let check = '';
    res?.data?.testUpdate?.forEach((item) => {
      for (let clave in item) {
        if (item[clave] == true) {
          check += `- ${clave} - `;
        }
      }
    });
    setChangeEmailOK(() => true);
    Swal.fire({
      icon: 'success',
      title: `Success updating email change`,
      showConfirmButton: false,
      timer: 1500,
    });
  }
  //! //! ----------200:  cuando algo no se actualiza
  if (contador > 0) {
    let error = '';
    res?.data?.testUpdate?.forEach((item) => {
      for (let clave in item) {
        if (item[clave] == false) {
          error += `- ${clave} - `;
        }
      }
    });
    Swal.fire({
      icon: 'error',
      title: `Error updating email: ${error} ❎`,
      text: 'Please, try again.',
      showConfirmButton: false,
      timer: 1500,
    });
  }
  if (res?.response?.status == 403) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Confirmation code is incorrect! Please, check and try again.',
      showConfirmButton: false,
      timer: 1500,
    });
  }
  if (res?.response?.status == 409) {
    Swal.fire({
      icon: 'warning',
      title: 'Oops...',
      text: 'Email already in use! Please, use a different email.',
      showConfirmButton: false,
      timer: 1500,
    });
  }
};
export default useChangeEmailError;
