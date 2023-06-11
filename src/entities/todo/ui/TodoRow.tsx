import OpenDetails from "../../../features/todo/OpenDetails";
import RemoveTodo from "../../../features/todo/RemoveTodo";
import ToggleTodo from "../../../features/todo/ToggleTodo";

// WARNING: This component might break the fsd convention but find it more convinient to use features here

type Props = {
  id: number;
  text: string;
};

const TodoRow: React.FC<Props> = ({ text, id }) => {
  return (
    <div className="flex p-1 gap-1 items-center space-between todo-row">
      <ToggleTodo id={id} />
      <div className="flex-1">{text}</div>
      <OpenDetails id={id} />
      <RemoveTodo id={id} />
    </div>
  );
};

export default TodoRow;
