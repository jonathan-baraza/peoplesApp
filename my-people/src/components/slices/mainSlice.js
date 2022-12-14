import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  isFormOpen: false,
  isLoading: false,
  error: false,
  isRefetching: false,
};

export const getItems = createAsyncThunk("main/getItems", async () => {
  const response = await axios.get("/api/");
  const { data } = response.data;
  return data;
});

export const refetchItems = createAsyncThunk("main/refetchItems", async () => {
  const response = await axios.get("/api/");
  const { data } = response.data;
  return data;
});

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    showForm: (state, action) => {
      state.isFormOpen = true;
    },
    showItems: (state, action) => {
      state.isFormOpen = false;
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: {
    [getItems.pending]: (state, action) => {
      state.isLoading = true;
    },
    [getItems.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
      state.error = false;
    },
    [getItems.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = true;
    },
    [refetchItems.pending]: (state, action) => {
      state.isRefetching = true;
    },
    [refetchItems.fulfilled]: (state, action) => {
      state.isRefetching = false;
      state.items = action.payload;
    },
    [refetchItems.rejected]: (state, action) => {
      state.isRefetching = false;
      state.error = true;
    },
  },
});

export const mainActions = mainSlice.actions;
export default mainSlice;
