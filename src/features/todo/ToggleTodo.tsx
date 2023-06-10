import { useDispatch } from "react-redux";
import { toggletodo, useTodo } from "../../entities/todo/model";

type Props = {
  id: number;
};

const ToggleTodo: React.FC<Props> = ({ id }) => {
  const dispatch = useDispatch();
  const todo = useTodo(id);

  if (!todo) return <div>Panic: Error occured!!!</div>;

  return (
    <input
      type="checkbox"
      className="cursor-pointer"
      checked={todo.done}
      onChange={() => dispatch(toggletodo(id))}
    />
  );
};

export default ToggleTodo;
