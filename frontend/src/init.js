import React from 'react';
import i18n from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import { Provider as StoreProvider } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Provider, ErrorBoundary } from '@rollbar/react';
import AuthProvider from './components/providers/AuthProvider';
import ChatApiProvider from './components/providers/ChatApiProvider';
import resources from './locales/index';
import store from './redux/store';
import App from './App';

const init = (socket) => {
  i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: 'ru',
    });

  const rollbarConfig = {
    enabled: true,
    // eslint-disable-next-line no-undef
    accessToken: process.env.REACT_APP_ROLLBAR_ACCESS_TOKEN,
    captureUncaught: true,
    captureUnhandledRejections: true,
  };

  return (
    <I18nextProvider i18n={i18n}>
      <StoreProvider store={store}>
        <Provider config={rollbarConfig}>
          <ErrorBoundary>
            <AuthProvider>
              <ChatApiProvider api={socket}>
                <App />
              </ChatApiProvider>
            </AuthProvider>
          </ErrorBoundary>
        </Provider>
      </StoreProvider>
    </I18nextProvider>
  );
};

export default init;
