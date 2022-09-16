import { configureStore } from "@reduxjs/toolkit";
import mainSlice from "../components/slices/mainSlice";
const store = configureStore({
  reducer: {
    main: mainSlice.reducer,
  },
});

export default store;
