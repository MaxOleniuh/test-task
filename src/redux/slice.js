import { fetchUsers } from "./operations";
const { createSlice } = require("@reduxjs/toolkit");

const slice = createSlice({
  name: "toolkit",
  initialState: {
    loading: false,
    currentPage: 1,
    users: [],
  },
  reducers: {
    follow(state, id) {
      const userIndex = state.users.findIndex((user) => user.id === id.payload);
      if (userIndex !== -1) {
        state.users = state.users.map((user, index) => {
          if (index === userIndex) {
            return {
              ...user,
              followers: user.followers + 1,
              isFollowed: (user.isFollowed = true),
            };
          }
          return user;
        });
      } else {
        console.log("User not found");
      }
    },
    unfollow(state, id) {
      const userIndex = state.users.findIndex((user) => user.id === id.payload);
      if (userIndex !== -1) {
        state.users = state.users.map((user, index) => {
          if (index === userIndex) {
            return {
              ...user,
              followers: user.followers - 1,
              isFollowed: (user.isFollowed = false),
            };
          }
          return user;
        });
      } else {
        console.log("User not found");
      }
    },
    filterFollowed: (state, action) => {
      // state.loading = true;
      const filterValue = action.payload;
      state.filterValue = filterValue;

      if (filterValue === "Followed") {
        state.users = state.users.filter((user) => user.isFollowed === true);
      } else if (filterValue === "Unfollowed") {
        state.users = state.users.filter((user) => user.isFollowed === false);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users =
          state.currentPage === 1
            ? state.users
            : [...state.users, ...action.payload];
        state.loading = false;
        state.currentPage = state.currentPage + 1;
        state.isFetched = true;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = true;
      });
  },
});
export default slice.reducer;
export const { follow, unfollow, filterFollowed } = slice.actions;
