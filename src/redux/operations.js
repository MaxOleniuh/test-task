import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://6479a6ffa455e257fa637ef2.mockapi.io";
export const fetchUsers = createAsyncThunk("users/fetchAll", async () => {
  try {
    const response = await axios.get("/users");
    return response.data;
  } catch (e) {
    console.log(e);
  }
});
