import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../services/api";

interface IRegister {
  name: string;
  email: string;
  cellphone: string;
  birthdate: string;
  description: string;
  isSeller: boolean;
  cpf: string;
  password: string;
}

export const registerUser = createAsyncThunk(
  "auth/register",
  async (
    {
      name,
      email,
      cellphone,
      birthdate,
      description,
      isSeller,
      cpf,
      password,
    }: IRegister,
    { rejectWithValue }
  ) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await api.post(
        `/users/`,
        {
          name,
          email,
          cellphone,
          birthdate,
          description,
          isSeller,
          cpf,
          password,
        },
        config
      );
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
