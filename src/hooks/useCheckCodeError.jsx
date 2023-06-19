import Swal from 'sweetalert2/dist/sweetalert2.all.js';

const useCheckCodeError = (res, setDeleteUser, setOkCheck) => {
  // -------404 o un 500  en este caso --------->res.response
  // -------200 ---> entramos directos a la ---->res.data
  //! -------status: 500

  if (res?.response?.status == 500)
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Internal Server Error ❎!',
      showConfirmButton: false,
      timer: 1500,
    });
  //! -------200:  ok delete user
  if (res?.data?.delete?.includes('Fail creating user')) {
    setDeleteUser(() => true);

    Swal.fire({
      icon: 'error',
      title: 'No correct Code ❎.',
      text: 'Oops, your user is no longer active. Let’s get you set up again!',
      showConfirmButton: false,
      timer: 2500,
    });
  }

  // //! -------200: error delete user
  // if (res?.data?.delete?.includes("error delete user")) {
  //   Swal.fire({
  //     icon: "error",
  //     title: "No correct Code ❎.",
  //     text: "No delete user. Try again, please.",
  //     showConfirmButton: false,
  //     timer: 2500,
  //   });
  // }
  //! ------200: testCheckOk:
  if (res?.data?.testCheckOk?.toString() == 'true') {
    setOkCheck(() => true);
    Swal.fire({
      icon: 'success',
      title: 'Ok correct code ✅',
      showConfirmButton: false,
      timer: 1500,
    });
  }
  //! ------200: testCheckOk: false

  if (res?.data?.testCheckOk?.toString() == 'false') {
    Swal.fire({
      icon: 'error',
      title: 'Internal Server Error ❎.',
      text: 'No delete user. Try again, please.',
      showConfirmButton: false,
      timer: 2500,
    });
  }

  //! ------404: User not found && 404: error.message Update One
  if (res?.response?.status == 404)
    Swal.fire({
      icon: 'error',
      title: 'Wrong Confirmation Code ❎.',
      text: 'User deleted from the database. Please register again.',
      showConfirmButton: false,
      timer: 1500,
    });
};

export default useCheckCodeError;
