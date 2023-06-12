import { useDispatch } from "react-redux";
import { useTodo } from "../../entities/todo/model";
import { setdetailsmodal } from "../../entities/UI/model";
import ToggleTodo from "../../features/todo/ToggleTodo";
import SwitchLevel from "../../features/todo/SwitchLevel";

type Props = {
  id: number;
};

const TodoDetails: React.FC<Props> = ({ id }) => {
  const dispatch = useDispatch();
  const todo = useTodo(id);

  if (!todo) return <div>Panic: Cannot find todo</div>;

  return (
    <div className="modal">
      <small>{new Date(todo.start).toLocaleString()}</small>
      <h1 className="center">DETAILS</h1>
      {todo.end && <small>{new Date(todo.end).toLocaleString()}</small>}
      <h2>{todo?.text}</h2>
      <div>
        <ToggleTodo id={id} />
        {todo?.done ? "completed" : "todo"}
      </div>
      <SwitchLevel id={id} />
      <button onClick={() => dispatch(setdetailsmodal({ show: false }))}>
        close
      </button>
    </div>
  );
};

export default TodoDetails;
