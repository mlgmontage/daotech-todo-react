import { configureStore } from "@reduxjs/toolkit";
import todos from "../entities/todo/model";
import UI from "../entities/UI/model";

export const store = configureStore({
  reducer: {
    todos,
    UI,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
