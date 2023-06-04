const { createSlice } = require("@reduxjs/toolkit");

const slice = createSlice({
  name: "toolkit",
  initialState: {
    followers: 100500,
    tweets: 777,
    isFollowed: false,
  },
  reducers: {
    follow(state) {
      state.followers += 1;
      state.isFollowed = true;
    },
    unfollow(state) {
      state.followers -= 1;
      state.isFollowed = false;
    },
  },
});
export default slice.reducer;
export const { follow, unfollow } = slice.actions;
