import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://6479a6ffa455e257fa637ef2.mockapi.io";

export const fetchUsers = createAsyncThunk(
  "users/fetchAll",
  async (_, { getState }) => {
    const { currentPage } = getState().toolkit;
    try {
      const response = await axios.get(
        `${API_URL}/users?page=${currentPage}&limit=${3}`
      );
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch items.");
    }
  }
);

// export const fetchUsers = fetch(
//   "https://6479a6ffa455e257fa637ef2.mockapi.io/users",
//   {
//     method: "GET",
//     headers: { "content-type": "application/json" },
//   }
// )
//   .then((res) => {
//     if (res.ok) {
//       console.log(res.json());
//       return res.json();
//     }
//     // handle error
//   })
//   .catch((error) => {
//     console.log(error);
//   });
