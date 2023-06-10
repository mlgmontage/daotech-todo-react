import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";

type TodoState = {
  text: string;
}[];

const initialState: TodoState = [
  { text: "write some code" },
  { text: "wash dishes" },
];

const todoSlice = createSlice({
  initialState,
  name: "todo",
  reducers: {
    createtodo: (state, { payload }: PayloadAction<string>) => {
      state.push({ text: payload });
    },
    removetodo: (state, { payload }: PayloadAction<number>) => {
      state.splice(payload, 1);
    },
  },
});

export default todoSlice.reducer;
export const { createtodo, removetodo } = todoSlice.actions;

export const todosSelector = (state: RootState) => state.todos;
