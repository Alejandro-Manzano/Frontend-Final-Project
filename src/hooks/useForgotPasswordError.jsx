import Swal from 'sweetalert2/dist/sweetalert2.all.js';

const useForgotPasswordError = (res, setForgetOk) => {
  //! ------------------- 200 => {sendPassword: true, updateUser: true} && 200 => {updateUser: false, sendPassword: true}

  if (res?.status == 200) {
    if (res?.data?.sendPassword == true && res?.data?.updateUser == true) {
      setForgetOk(() => true);
      return Swal.fire({
        icon: 'success',
        title: 'Password changed correctly',
        text: 'Email sended with your new password',
        showConfirmButton: false,
        timer: 3000,
      });
    }

    if (res?.data?.sendPassword == true && res?.data?.updateUser == false) {
      return Swal.fire({
        icon: 'error',
        title: 'Not valid email',
        text: 'Oops, we can’t change your password because your email isn’t valid',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }
  //! ------------------- 404 => User no register -
  if (res?.response?.data?.includes('Fail updating user') && res?.response?.status == 404)
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'User not registered ❎. Enter a valid email address',
      showConfirmButton: false,
      timer: 3000,
    });

  //! ------------------- 500 => Interval Server Error
  if (res?.response?.status == 500)
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Internal server error ❎, please try again!',
      showConfirmButton: false,
      timer: 1500,
    });

  //! ------------------- 404 => 'dont send email and dont update user'
  if (res?.response?.data?.includes('Fail updating user') && res?.response?.status == 404)
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Password not updated. Try again, please!',
      showConfirmButton: false,
      timer: 3000,
    });
};

export default useForgotPasswordError;
