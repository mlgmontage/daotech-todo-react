export type TodoT = {
  id: number;
  text: string;
  done: boolean;
  start: number;
  end?: number;
  level: LevelT;
};

export type ViewT = "all" | "todo" | "done";
export type ModeT = "list" | "card";
export type LevelT = "low" | "regular" | "high";

export type TodoState = {
  todos: TodoT[];
  view: ViewT;
  mode: ModeT;
};
