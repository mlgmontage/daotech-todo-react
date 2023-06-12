import { useDispatch } from "react-redux";
import { setlevel, useTodo } from "../../entities/todo/model";

type Props = {
  id: number;
};

const SwitchLevel: React.FC<Props> = ({ id }) => {
  const dispatch = useDispatch();
  const todo = useTodo(id);

  if (!todo) return <div>Panic: There is no todo</div>;

  return (
    <div className="flex gap-1 items-center">
      <label>
        <input
          type="radio"
          checked={todo.level === "low"}
          onChange={() => dispatch(setlevel({ id: todo.id, level: "low" }))}
        />
        low
      </label>
      <label>
        <input
          type="radio"
          checked={todo.level === "regular"}
          onChange={() => dispatch(setlevel({ id: todo.id, level: "regular" }))}
        />
        regular
      </label>
      <label>
        <input
          type="radio"
          checked={todo.level === "high"}
          onChange={() => dispatch(setlevel({ id: todo.id, level: "high" }))}
        />
        high
      </label>
    </div>
  );
};

export default SwitchLevel;
