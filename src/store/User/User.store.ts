import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "./getUser";
import { userLogin } from "./loginUser";

interface IModalAccounts {
  userInfo: {
    address: any;
    adverts: any;
    birthdate: string;
    cellphone: string;
    cpf: string;
    createdAt: string;
    description: string;
    email: string;
    id: string;
    isActive: boolean;
    isSeller: boolean;
    name: string;
    password: string;
    updatedAt: string;
  } | null;
  userToken: string | null;
  isFetching: boolean;
  isFinished: boolean;
  isSuccess: boolean;
  isError: boolean;
  errorMessage: string;
}

// const dispatch = useAppDispatch();

const userToken = localStorage.getItem("userToken")
  ? localStorage.getItem("userToken")
  : null;

// const userInfo = userToken ? dispatch(getUser({ userToken })) : {};

const initialState = <IModalAccounts>{
  userInfo: null,
  userToken,
  isFetching: false,
  isSuccess: false,
  isError: false,
  isFinished: false,
  errorMessage: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("userToken"); // deletes token from storage
      state.userInfo = null;
      state.userToken = null;
      state.isError = false;
      state.isFetching = false;
      state.isSuccess = false;
      state.isFinished = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userLogin.pending, (state, action) => {
      state.isFetching = true;
      state.isError = false;
      state.isSuccess = false;
      state.isFinished = false;
    });

    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.isSuccess = true;
      state.isError = false;
      state.isFetching = false;
      state.isFinished = true;
    });

    builder.addCase(userLogin.rejected, (state, action) => {
      state.isError = true;
      state.isFetching = false;
      state.isSuccess = false;
      state.isFinished = true;
    });

    builder.addCase(getUser.fulfilled, (state, action) => {
      state.userInfo = action.payload;
      state.isFinished = true;
    });
  },
});

export const { logout } = userSlice.actions;

export const userReducer = userSlice.reducer;
