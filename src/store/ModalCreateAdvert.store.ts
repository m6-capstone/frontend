import { createSlice } from "@reduxjs/toolkit";

interface IModalCreateAdvert {
  isOpen: boolean;
}

const initialState = <IModalCreateAdvert>{
  isOpen: false,
};

const modalCreateAdvertSlice = createSlice({
  name: "modalCreateAdvert",
  initialState,
  reducers: {
    openModalCreateAdvert: (state) => {
      state.isOpen = true;
    },
    closeModalCreateAdvert: (state) => {
      state.isOpen = false;
    },
  },
});

export const modalCreateAdvertReducer = modalCreateAdvertSlice.reducer;

export const { openModalCreateAdvert, closeModalCreateAdvert } =
  modalCreateAdvertSlice.actions;
