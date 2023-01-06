import { createAsyncThunk } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks";
import { api } from "../../services/api";

interface IUser {
  userToken: string;
}

export const getUser = createAsyncThunk(
  "user/get",
  async ({ userToken }: IUser, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + userToken,
        },
      };
      const { data } = await api.get(`/users/profile`, config);
      console.log(data);
      return data;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
