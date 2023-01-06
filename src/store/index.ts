import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./User/User.store";

const rootReducer = combineReducers({
  user: userReducer,
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

export type AppDispatch = typeof store.dispatch;
