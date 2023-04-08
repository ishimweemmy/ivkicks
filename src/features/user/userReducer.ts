import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: UserState = {
  username: "",
  password: "",
  email: "",
  token: "",
  id: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserState(state, action: PayloadAction<UserState>) {},
  },
});

export const { setUserState } = userSlice.actions;
export default userSlice.reducer;
