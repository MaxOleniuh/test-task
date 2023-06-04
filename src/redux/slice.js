const { createSlice } = require('@reduxjs/toolkit');

const slice = createSlice({
  name: 'toolkit',
  initialState: {
    followers: 100500,
    tweets: 777,
  },
  reducers: {
    follow(state) {
      state.followers += 1;
    },
    unfollow(state) {
      state.followers -= 1;
    },
  },
});
export default slice.reducer;
export const { follow, unfollow } = slice.actions;
