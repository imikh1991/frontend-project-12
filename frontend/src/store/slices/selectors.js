import { createSelector } from '@reduxjs/toolkit';
import { selectors as channelsSelectors } from './channelsSlice';
import { selectors as messagesSelectors } from './messagesSlice';

// Selectors for channels
const selectAllChannels = channelsSelectors.selectAll;
const selectChannelById = channelsSelectors.selectById;
const selectCurrentChannelId = (state) => state.channels.currentChannelId;

// Selectors for messages
const selectAllMessages = messagesSelectors.selectAll;

// Select all channels
export const getAllChannels = (state) => selectAllChannels(state);

// Select all messages
export const getAllMessages = (state) => selectAllMessages(state);

// Select current channel ID
export const getCurrentChannelId = (state) => selectCurrentChannelId(state);

// Select modal channel by ID
export const getModalChannel = (state) => selectChannelById(state, state.modal.channelId);

// Select current channel
export const getCurrentChannel = createSelector(
  [getCurrentChannelId, selectChannelById],
  (currentChannelId, selectChannel) => (state) => selectChannel(state, currentChannelId),
);

// Select messages for the current channel
export const getCurrentChannelMessages = createSelector(
  [getAllMessages, getCurrentChannelId],
  // eslint-disable-next-line max-len
  (allMessages, currentChannelId) => allMessages.filter(({ channelId }) => channelId === currentChannelId),
);
