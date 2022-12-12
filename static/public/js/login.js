const btn = document.querySelector('#btn-login');
btn.addEventListener('click', async () => {
  const email = document.querySelector('#email');
  const password = document.querySelector('#password');
  const login = {
    email: email.value,
    password: password.value,
  };
  const loginString = JSON.stringify(login);
  const data = await fetch('http://localhost:3000/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: loginString,
  });
  const emailtext = email.value;
  const msg = await data.json();
  if (data.status === 200) {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: `${msg.message}`,
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      document.cookie = `email=${emailtext};max-age=3600;path=/chat`;
      window.location = '/chat';
    });
  } else if (data.status === 401) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `${msg.message}`,
    });
  } else if (data.status === 404) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: `${msg.message}`,
    }).then(() => {
      window.location = '/register';
    });
  }
});
