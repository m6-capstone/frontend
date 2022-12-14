import { configureStore, combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof rootReducer>;
export default store;
