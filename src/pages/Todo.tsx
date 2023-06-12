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
import usePagination from "../shared/hooks/usePagination";
import { generateArray } from "../shared/functions";
import { pageLimit } from "../shared/config";
import { TodoT } from "../entities/todo/model/types";

const Todo = () => {
  const todos = useSelector(todosFilteredSelector);
  const mode = useSelector(todosModeSelector);
  const pages = usePagination(todos, pageLimit);

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
          {pages.sliced.map((todo: TodoT) => (
            <TodoRow todo={todo} key={todo.id} />
          ))}

          <div className="flex justify-center p-1 gap-1">
            {generateArray(pages.total).map((i) => (
              <button onClick={() => pages.setPage(i)} key={i}>
                {i + 1}
              </button>
            ))}
          </div>
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
