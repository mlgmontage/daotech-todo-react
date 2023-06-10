import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../../app/store";
import { useSelector } from "react-redux";
import { TodoState, ViewT, ModeT } from "./types";

const initialState: TodoState = {
  todos: [
    { id: 0, text: "write some code", done: true },
    { id: 1, text: "wash dishes", done: false },
  ],
  view: "all",
  mode: "list",
};

const todoSlice = createSlice({
  initialState,
  name: "todo",
  reducers: {
    createtodo: (state, { payload }: PayloadAction<string>) => {
      const id = state.todos.length;
      state.todos.unshift({ id, text: payload, done: false });
    },
    removetodo: (state, { payload }: PayloadAction<number>) => {
      const i = state.todos.findIndex((todo) => todo.id === payload);
      state.todos.splice(i, 1);
    },
    toggletodo: (state, { payload }: PayloadAction<number>) => {
      const i = state.todos.findIndex((todo) => todo.id === payload);
      state.todos[i].done = !state.todos[payload].done;
    },
    setview: (state, { payload }: PayloadAction<ViewT>) => {
      state.view = payload;
    },
    setmode: (state, { payload }: PayloadAction<ModeT>) => {
      state.mode = payload;
    },
  },
});

export default todoSlice.reducer;
export const { createtodo, removetodo, toggletodo, setmode, setview } =
  todoSlice.actions;

export const todosFilteredSelector = (state: RootState) => {
  if (state.todos.view === "todo")
    return state.todos.todos.filter((todo) => todo.done === false);

  if (state.todos.view === "done")
    return state.todos.todos.filter((todo) => todo.done === true);

  return state.todos.todos;
};

export const todosViewSelector = (state: RootState) => state.todos.view;
export const todosModeSelector = (state: RootState) => state.todos.mode;
export const useTodo = (id: number) =>
  useSelector(todosFilteredSelector).find((todo) => todo.id === id);

export const todosCounterSelector = createSelector(
  (state: RootState) => state.todos.todos,
  (todos) => {
    const todo = todos.filter((todo) => todo.done === false).length;
    const done = todos.filter((todo) => todo.done === true).length;

    return [todo, done];
  }
);
