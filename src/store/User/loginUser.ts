import { createAsyncThunk } from "@reduxjs/toolkit";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";

interface ILogin {
  email: string;
  password: string;
}

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ email, password }: ILogin, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await api.post(`/login`, { email, password }, config);

      localStorage.setItem("userToken", data.token);

      // window.location.replace("/");

      return { data };
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
