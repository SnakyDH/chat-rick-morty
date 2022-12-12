const btnSend = document.querySelector('#send-btn');
const getUser = async () => {
  // todo Fix error with cookie, The cookie is reset, when the page is restarted.
  // * GUIDE:  Maybe the cookie is reset because the test application is running in the same browser.
  let cookieValor = document.cookie.replace(
    /(?:(?:^|.*;\s*)email\s*\=\s*([^;]*).*$)|^.*$/,
    '$1'
  );
  console.log(cookieValor);
  const data = await fetch(`http://localhost:3000/api/user/${cookieValor}`);
  return await data.json();
};
const getRandomIMG = async (type) => {
  let randomId = Math.floor(Math.random() * 19) + 1;
  let randomPage = Math.floor(Math.random() * 3) + 1;
  let url = `https://rickandmortyapi.com/api/character/?page=${randomPage}&name=${type}`;
  const data = await fetch(url);
  const dataJSON = await data.json();
  return dataJSON.results[randomId].image;
};
let main = async () => {
  const title = document.querySelector('#role-chat');
  let socketNamespace;
  let group;
  const user = await getUser();
  if (user.role === 'morty') {
    socketNamespace = io('/morty');
    group = 'morty';
    title.innerHTML = 'Chat de Mortys';
  } else if (user.role === 'rick') {
    socketNamespace = io('/rick');
    group = 'rick';
    title.innerHTML = 'Chat de Ricks';
  }
  socketNamespace.on('connect', () => {
    console.log('Me he conectado');
  });
  btnSend.addEventListener('click', () => {
    const message = document.querySelector('#message');
    socketNamespace.emit('send-message', {
      message: message.value,
      users: user,
    });
    message.value = '';
  });
  socketNamespace.on('messages', async (message, users) => {
    let color;
    if (group === 'morty') {
      color = '#9fcc3c';
    } else if (group === 'rick') {
      color = '#3c9fcc';
    }
    //06adc7
    const allMessages = document.querySelector('#all-messages');
    const img = await getRandomIMG(user.role);
    allMessages.innerHTML += `
                <div class="d-flex flex-row justify-content-end mb-4 pt-1">
              <div>
                <p class="small p-2 me-3 mb-1 text-white rounded-3 text-muted">${users.name}</p>
                <p
                  class="small p-2 me-3 mb-1 text-white rounded-3"
                  style="background-color: ${color}; color: white;"
                >
                  ${message}
                </p>
              </div>
              <img
                src="${img}"
                alt="avatar 1"
                style="
                  width: 50px;
                  height: 100%;
                  border-radius: 50%;
                  margin-right: 1em;
                "
              />
            </div>`;
  });
};
main();
