import { configureStore } from "@reduxjs/toolkit";
import todos from "../entities/todo/model";

export const store = configureStore({
  reducer: {
    todos,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
