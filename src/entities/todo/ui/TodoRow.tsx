import OpenDetails from "../../../features/todo/OpenDetails";
import RemoveTodo from "../../../features/todo/RemoveTodo";
import ToggleTodo from "../../../features/todo/ToggleTodo";
import { TodoT } from "../model/types";

// WARNING: This component might break the fsd convention but find it more convinient to use features here

type Props = {
  todo: TodoT;
};

const TodoRow: React.FC<Props> = ({ todo }) => {
  return (
    <div
      className={`flex p-1 gap-1 items-center space-between todo-row todo-row-${todo.level}`}
    >
      <ToggleTodo id={todo.id} />
      <div className="flex-1">{todo.text}</div>
      <OpenDetails id={todo.id} />
      <RemoveTodo id={todo.id} />
    </div>
  );
};

export default TodoRow;
