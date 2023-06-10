import { useSelector } from "react-redux";
import TodoRow from "../entities/todo/ui/TodoRow";
import CreateTodo from "../features/todo/CreateTodo";
import { todosSelector } from "../entities/todo/model";

const Todo = () => {
  const todos = useSelector(todosSelector);

  return (
    <div className="container lined-blue">
      <h1 className="center underline">Todo</h1>
      <CreateTodo />
      {todos.map((todo, i) => (
        <TodoRow text={todo.text} id={i} key={i} />
      ))}
    </div>
  );
};

export default Todo;
