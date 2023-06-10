import { useDispatch } from "react-redux";
import { removetodo } from "../../entities/todo/model";

type Props = {
  id: number;
};

const RemoveTodo: React.FC<Props> = ({ id }) => {
  const dispatch = useDispatch();

  return (
    <div onClick={() => dispatch(removetodo(id))}>
      <button>x</button>
    </div>
  );
};

export default RemoveTodo;
