import { Server } from 'socket.io';
export const realtimeServer = (httpServer) => {
  const io = new Server(httpServer);
  const rickTeam = io.of('rick');
  const mortyTeam = io.of('morty');
  rickTeam.on('connection', (socket) => {
    console.log(socket.id);
    socket.on('send-message', ({ message, users }) => {
      rickTeam.emit('messages', message, users);
      console.log('Message to rick', message);
      console.log('user aparte', users);
    });
  });
  mortyTeam.on('connection', (socket) => {
    console.log(socket.id);
    socket.on('send-message', ({ message, users }) => {
      mortyTeam.emit('messages', message, users);
      console.log('Message to morty', message);
    });
  });
};
