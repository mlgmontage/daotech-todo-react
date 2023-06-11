import { useDispatch } from "react-redux";
import { useTodo } from "../../entities/todo/model";
import { setdetailsmodal } from "../../entities/UI/model";

type Props = {
  id: number;
};

const TodoDetails: React.FC<Props> = ({ id }) => {
  const dispatch = useDispatch();
  const todo = useTodo(id);

  return (
    <div className="modal">
      <h1 className="center">DETAILS</h1>
      <div>{todo?.text}</div>
      <button onClick={() => dispatch(setdetailsmodal({ show: false }))}>
        close
      </button>
    </div>
  );
};

export default TodoDetails;
