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

  return (
    <div className="modal">
      <h1 className="center">DETAILS</h1>
      <h2>{todo?.text}</h2>
      <ToggleTodo id={id} />
      <SwitchLevel id={id} />
      <button onClick={() => dispatch(setdetailsmodal({ show: false }))}>
        close
      </button>
    </div>
  );
};

export default TodoDetails;
