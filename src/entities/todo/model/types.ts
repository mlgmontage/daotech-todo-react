export type TodoT = {
  id: number;
  text: string;
  done: boolean;
};

export type ViewT = "all" | "todo" | "done";
export type ModeT = "list" | "card";

export type TodoState = {
  todos: TodoT[];
  view: ViewT;
  mode: ModeT;
};
