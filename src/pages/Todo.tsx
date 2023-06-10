import { useSelector } from "react-redux";
import TodoRow from "../entities/todo/ui/TodoRow";
import CreateTodo from "../features/todo/CreateTodo";
import { todosSelector } from "../entities/todo/model";
import FilterTodo from "../features/todo/FilterTodo";
import ViewMode from "../features/todo/ViewMode";

const Todo = () => {
  const todos = useSelector(todosSelector);

  return (
    <>
      <div className="p-1 bg-blue">
        <div className="filters-container flex gap-1">
          <FilterTodo />
          <ViewMode />
        </div>
      </div>

      <div className="container">
        <h1 className="center">TODO</h1>
        <CreateTodo />
        {todos.map((todo) => (
          <TodoRow text={todo.text} id={todo.id} key={todo.id} />
        ))}
      </div>
    </>
  );
};

export default Todo;
