import { useDispatch } from "react-redux";
import { toggletodo, useTodo } from "../../entities/todo/model";

type Props = {
  id: number;
};

const ToggleTodo: React.FC<Props> = ({ id }) => {
  const dispatch = useDispatch();
  const todo = useTodo(id);

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
