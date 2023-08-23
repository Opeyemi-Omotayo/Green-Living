import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isSignedIn: false,
    userData: null,
    searchInput: "tech",
    blogData: null,
  },
  reducers: {
    setSignedIn: (state, action) => {
      state.isSignedIn = action.payload;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setInput: (state, action) => {
      state.searchInput = action.payload;
    },
    setBlogData: (state, action) => {
      state.blogData = action.payload;
    },
  },
});

export const {
  setSignedIn,
  setUserData,
  setInput,
  setBlogData,
} = userSlice.actions;

export const selectSignedIn = (state: any) => state.user.isSignedIn;
export const selectUserData = (state : any) => state.user.userData;
export const selectUserInput = (state: any) => state.user.searchInput;
export const selectBlogData = (state: any) => state.user.blogData;

export default userSlice.reducer;
