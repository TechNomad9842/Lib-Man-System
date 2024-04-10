import { configureStore } from "@reduxjs/toolkit";
import AuthenticationReducer from "./slices/AuthenticationSlice";

export const store = configureStore({
    reducer: {
          authentication: AuthenticationReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;