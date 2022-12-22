import { createSlice } from "@reduxjs/toolkit";

interface IModalAccounts {
  name: string;
}

const initialState = <IModalAccounts>{
  name: "Fidel Marques",
};

const accountsSlice = createSlice({
  name: "accounts",
  initialState,
  reducers: {
    updateName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const accountsReducer = accountsSlice.reducer;

export const { updateName } = accountsSlice.actions;
