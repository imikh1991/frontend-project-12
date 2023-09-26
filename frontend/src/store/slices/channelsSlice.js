/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice, createEntityAdapter } from '@reduxjs/toolkit';

import axios from 'axios';

export const fetchChannels = createAsyncThunk(
  'channels/fetchChannels',
  async () => {
    const token = localStorage.getItem('auth');
    const response = await axios.get('/api/v1/data', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  },
);

const channelsAdapter = createEntityAdapter();

const channelsSlice = createSlice({
  name: 'channels',
  initialState: channelsAdapter.getInitialState({ loadingStatus: 'idle', error: null }),
  reducers: {
    addChannel: channelsAdapter.addOne,
    addChannels: channelsAdapter.addMany,
    removeChannel: channelsAdapter.removeOne,
    updateChannel: channelsAdapter.updateOne,
    setDefaultChannelId: (state, { payload }) => {
      if (payload === state.currentChannelId) {
        state.currentChannelId = 1;
      }
    },
    setCurrentChannelId: (state, { payload }) => {
      state.currentChannelId = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchChannels.pending, (state) => {
        state.loadingStatus = 'loading';
        state.error = null;
      })
      .addCase(fetchChannels.fulfilled, (state, { payload }) => {
        channelsAdapter.addMany(state, payload.channels);
        state.loadingStatus = 'idle';
        state.error = null;
      });
  },
});

export const { actions } = channelsSlice;
export const selectors = channelsAdapter.getSelectors((state) => state.channels);
export default channelsSlice.reducer;
