import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userReducer";
import { RestaurantMenuSharp } from "@mui/icons-material";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
