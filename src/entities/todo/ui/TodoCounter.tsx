import { useSelector } from "react-redux";
import { todosCounterSelector } from "../model";

const TodoCounter = () => {
  const [todo, done] = useSelector(todosCounterSelector);

  return (
    <div className="align-right">
      {todo}/{done}
    </div>
  );
};

export default TodoCounter;
