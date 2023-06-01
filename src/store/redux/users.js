import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },

  reducers: {
    getUsers: (state, action) => {
      state.users.push(action.payload.users);
    },
  },
});

export const getUsers = userSlice.actions.getUsers;
export default userSlice.reducer;
