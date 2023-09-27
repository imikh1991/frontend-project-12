import { io } from 'socket.io-client';
import store from './store/store';
import { actions as channelsActions } from './store/slices/channelsSlice';
import { actions as messagesActions } from './store/slices/messagesSlice';

const initSocket = () => {
  const socket = io();
  socket.on('newMessage', (payload) => {
    store.dispatch(messagesActions.addMessage(payload));
  });
  const sendMessage = (data, callback) => {
    socket.emit('newMessage', data, callback);
  };

  socket.on('newChannel', (payload) => {
    store.dispatch(channelsActions.addChannel(payload));
    store.dispatch(channelsActions.setCurrentChannelId(payload.id));
  });
  const createNewChannel = (name, callback) => {
    socket.emit('newChannel', { name }, callback);
  };

  return {
    sendMessage,
    createNewChannel,
  };
};

export default initSocket;
