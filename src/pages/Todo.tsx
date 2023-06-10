import { useSelector } from "react-redux";
import TodoRow from "../entities/todo/ui/TodoRow";
import CreateTodo from "../features/todo/CreateTodo";
import {
  todosModeSelector,
  todosFilteredSelector,
} from "../entities/todo/model";
import FilterTodo from "../features/todo/FilterTodo";
import ViewMode from "../features/todo/ViewMode";
import TodoCard from "../entities/todo/ui/TodoCard";
import TodoCounter from "../entities/todo/ui/TodoCounter";

const Todo = () => {
  const todos = useSelector(todosFilteredSelector);
  const mode = useSelector(todosModeSelector);

  return (
    <>
      <div className="p-1 bg-blue">
        <div className="filters-container flex gap-1 items-center">
          <FilterTodo />
          <ViewMode />
          <TodoCounter />
        </div>
      </div>

      {mode === "list" && (
        <div className="container">
          <h1 className="center">TODO</h1>
          <CreateTodo />
          {todos.map((todo) => (
            <TodoRow text={todo.text} id={todo.id} key={todo.id} />
          ))}
        </div>
      )}

      {mode === "card" && (
        <div className="card-container">
          {todos.map((todo) => (
            <TodoCard text={todo.text} key={todo.id} />
          ))}
        </div>
      )}
    </>
  );
};

export default Todo;
