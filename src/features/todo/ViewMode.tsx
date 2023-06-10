import { useDispatch, useSelector } from "react-redux";
import { setmode, todosModeSelector } from "../../entities/todo/model";

const ViewMode = () => {
  const dispatch = useDispatch();
  const mode = useSelector(todosModeSelector);

  return (
    <div>
      <div>
        <small>View mode</small>
      </div>
      <div className="flex gap-1">
        <button
          className={mode == "list" ? "active" : ""}
          onClick={() => dispatch(setmode("list"))}
        >
          list
        </button>
        <button
          className={mode == "card" ? "active" : ""}
          onClick={() => dispatch(setmode("card"))}
        >
          card
        </button>
      </div>
    </div>
  );
};

export default ViewMode;
