import React from 'react';

import { Provider as StoreProvider } from 'react-redux';
import ChatApiProvider from './components/providers/ChatApiProvider';
import store from './store/store';
import App from './App';

const init = (socket) => (
  <StoreProvider store={store}>

    <ChatApiProvider api={socket}>
      <App />
    </ChatApiProvider>

  </StoreProvider>
);

export default init;
