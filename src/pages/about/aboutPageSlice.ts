import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store/store";

// Define a type for the slice state
interface CounterState {
  isLoading: boolean;
  errorMessage: string;
  isSuccess: boolean;
  isError: boolean;
  isCreate: boolean;
  isCreateFailed: boolean;
  dataAboutPage: [];
  dataError: object;
}

const initialState: CounterState = {
  isLoading: false,
  errorMessage: "",
  isSuccess: false,
  isError: false,
  isCreate: false,
  isCreateFailed: false,
  dataAboutPage: [],
  dataError: {},
};

const about = createSlice({
  name: "about",
  initialState,
  reducers: {
    getListAboutPage(state) {
      state.isLoading = true;
    },
    getListAboutPageFailed(state, action) {
      state.isLoading = false;
      state.isError = true;
      state.dataError = action.payload || {};
      state.errorMessage = "";
    },
    getListAboutPageSuccess(state, action) {
      state.isLoading = false;
      state.dataAboutPage = action.payload || [];
      state.isSuccess = true;
    },

    getListDetailsAboutPage(state) {
      state.isLoading = true;
    },
    getListDetailsAboutPageFailed(state, action) {
      state.isLoading = false;
      state.isError = true;
      state.dataError = action.payload || {};
      state.errorMessage = "";
    },

    createAboutPage(state) {
      state.isLoading = true;
    },
    createAboutPageFailed(state, action) {
      state.isLoading = false;
      state.isCreateFailed = true;
      state.dataError = action.payload || {};
      state.errorMessage = "";
    },
    createAboutPageSuccess(state, action) {
      state.isLoading = false;
      state.isCreate = true;
    },
    clear(state) {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.isCreate = false;
      state.isCreateFailed = false;
    },
  },
});

export const {
  clear,
  createAboutPage,
  createAboutPageFailed,
  createAboutPageSuccess,
  getListAboutPage,
  getListAboutPageFailed,
  getListAboutPageSuccess,
  getListDetailsAboutPage,
  getListDetailsAboutPageFailed,
} = about.actions;

export const makeSelectAboutPage = (state: RootState) => state.about;

export default about.reducer;
