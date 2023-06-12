import OpenDetails from "../../../features/todo/OpenDetails";
import RemoveTodo from "../../../features/todo/RemoveTodo";
import ToggleTodo from "../../../features/todo/ToggleTodo";
import { useTodo } from "../model";

// WARNING: This component might break the fsd convention but find it more convinient to use features here

type Props = {
  id: number;
};

const TodoRow: React.FC<Props> = ({ id }) => {
  const todo = useTodo(id);

  return (
    <div
      className={`flex p-1 gap-1 items-center space-between todo-row todo-row-${todo?.level}`}
    >
      <ToggleTodo id={id} />
      <div className="flex-1">{todo?.text}</div>
      <OpenDetails id={id} />
      <RemoveTodo id={id} />
    </div>
  );
};

export default TodoRow;
