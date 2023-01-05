import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { accountsReducer } from "./Accounts.store";
import { modalCreateAdvertReducer } from "./ModalCreateAdvert.store";

const rootReducer = combineReducers({
  modalCreateAdvert: modalCreateAdvertReducer,
  accounts: accountsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof rootReducer>;
export default store;
