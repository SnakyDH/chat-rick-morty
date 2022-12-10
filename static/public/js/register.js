const btn = document.querySelector('#btn-register');
btn.addEventListener('click', async () => {
  const username = document.querySelector('#username');
  const type = document.querySelector('#type');
  const email = document.querySelector('#email');
  const password = document.querySelector('#password');
  const passwordConfirm = document.querySelector('#passwordConfirm');
  //Validation
  if (password.value !== passwordConfirm.value) {
    Swal.fire({
      title: 'Error!',
      text: `Passwords don't match`,
      icon: 'error',
      confirmButtonText: 'Ok',
    });
    password.value = '';
    passwordConfirm.value = '';
  }
  if (
    username.value &&
    type.value &&
    email.value &&
    password.value &&
    passwordConfirm.value
  ) {
    username, type, email, password;
    const registration = {
      username: username.value,
      type: type.value,
      email: email.value,
      password: password.value,
    };
    const registrationString = JSON.stringify(registration);
    const data = await fetch('http://localhost:3000/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: registrationString,
    });
    if (data.status === 403) {
      Swal.fire({
        title: 'Oops!',
        text: `Email already registered`,
        icon: 'error',
        confirmButtonText: 'Ok',
      });
      email.value = '';
      password.value = '';
      passwordConfirm.value = '';
    } else if (data.status === 201) {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your user has been created',
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        window.location = '/';
      });
    }
  }
});
