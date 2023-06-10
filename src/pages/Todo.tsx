import { useSelector } from "react-redux";
import TodoRow from "../entities/todo/ui/TodoRow";
import CreateTodo from "../features/todo/CreateTodo";
import { todosSelector } from "../entities/todo/model";

const Todo = () => {
  const todos = useSelector(todosSelector);

  return (
    <>
      <div className="p-1 bg-blue">dfkj</div>

      <div className="container">
        <h1 className="center">TODO</h1>
        <CreateTodo />
        {todos.map((todo, i) => (
          <TodoRow text={todo.text} id={i} key={i} />
        ))}
      </div>
    </>
  );
};

export default Todo;
