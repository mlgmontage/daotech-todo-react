import RemoveTodo from "../../../features/todo/RemoveTodo";
import ToggleTodo from "../../../features/todo/ToggleTodo";

type Props = {
  id: number;
  text: string;
};

const TodoRow: React.FC<Props> = ({ text, id }) => {
  return (
    <div className="flex p-1 gap-1 items-center space-between todo-row">
      <ToggleTodo id={id} />
      <div className="flex-1">{text}</div>
      <RemoveTodo id={id} />
    </div>
  );
};

export default TodoRow;
