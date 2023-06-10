import TodoRow from "../entities/todo/ui/TodoRow";
import CreateTodo from "../features/todo/CreateTodo";

const Todo = () => {
  return (
    <div className="container lined-blue">
      <h1 className="center underline">Todo</h1>
      <CreateTodo />
      <TodoRow text="write some code" />
      <TodoRow text="wash dishes" />
      <TodoRow text="finish assignment" />
    </div>
  );
};

export default Todo;
