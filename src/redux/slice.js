import { fetchUsers } from "./operations";
const { createSlice } = require("@reduxjs/toolkit");

const slice = createSlice({
  name: "toolkit",
  initialState: {
    followers: 100500,
    tweets: 777,
    isFollowed: false,
    loading: false,
    users: [
      {
        user: "",
        avatar: "",
        tweets: 0,
        followers: 0,
        id: "",
      },
    ],
  },
  reducers: {
    follow(state, action) {
      const userId = action.payload;
      state.followers += 1;
      state.isFollowed = true;
      state.users = state.users.map((user) => {
        if (user.id === userId) {
          return {
            ...user,
            followers: user.followers + 1,
          };
        }
        return user;
      });
    },
    unfollow(state, action) {
      const userId = action.payload;
      state.followers -= 1;
      state.isFollowed = false;
      state.users = state.users.map((user) => {
        if (user.id === userId) {
          return {
            ...user,
            followers: user.followers - 1,
          };
        }
        return user;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loading = false;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = true;
      });
  },
});
export default slice.reducer;
export const { follow, unfollow } = slice.actions;
