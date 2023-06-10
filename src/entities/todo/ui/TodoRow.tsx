import RemoveTodo from "../../../features/todo/RemoveTodo";

type Props = {
  id: number;
  text: string;
};

const TodoRow: React.FC<Props> = ({ text, id }) => {
  return (
    <div className="flex p-1 lined-red space-between">
      {text} <RemoveTodo id={id} />
    </div>
  );
};

export default TodoRow;
