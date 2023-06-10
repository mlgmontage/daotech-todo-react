import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";
import { useSelector } from "react-redux";

type TodoState = {
  text: string;
  done: boolean;
}[];

const initialState: TodoState = [
  { text: "write some code", done: true },
  { text: "wash dishes", done: false },
];

const todoSlice = createSlice({
  initialState,
  name: "todo",
  reducers: {
    createtodo: (state, { payload }: PayloadAction<string>) => {
      state.push({ text: payload, done: false });
    },
    removetodo: (state, { payload }: PayloadAction<number>) => {
      state.splice(payload, 1);
    },
    toggletodo: (state, { payload }: PayloadAction<number>) => {
      state[payload].done = !state[payload].done;
    },
  },
});

export default todoSlice.reducer;
export const { createtodo, removetodo, toggletodo } = todoSlice.actions;

export const todosSelector = (state: RootState) => state.todos;
export const useTodo = (id: number) => useSelector(todosSelector)[id];
