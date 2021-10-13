import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import photoApi from 'api/photoApi';

export const fetchPhotoList = createAsyncThunk('photo/fetchPhotoList', async (payload) => {
  const data = await photoApi.getAll(payload);
  return data;
});

const photoSlice = createSlice({
  name: 'photo',
  initialState: {
    list: [],
    filter: {},
    deleteMode: false,
  },

  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },

    setDeleteMode(state, action) {
      state.deleteMode = action.payload;
    },
  },

  extraReducers: {
    [fetchPhotoList.fulfilled]: (state, action) => {
      state.list = action.payload;
    },
  },
});

// Actions
export const { setFilter, setDeleteMode } = photoSlice.actions;

// Selector
export const selectPhotoList = (state) => state.photo.list;
export const selectPhotoFilter = (state) => state.photo.filter;

// Reducer
const photoReducer = photoSlice.reducer;
export default photoReducer;
