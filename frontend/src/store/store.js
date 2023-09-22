import { combineReducers, configureStore } from '@reduxjs/toolkit';

import channelsReducer from './slices/channelsSlice';
import messagesReducer from './slices/messagesSlice';
import loaderReducer from './slices/loaderSlice';

const reducer = combineReducers({
  loader: loaderReducer,
  channels: channelsReducer,
  messages: messagesReducer,
});

export default configureStore({
  reducer,
});
