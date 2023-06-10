import { useDispatch, useSelector } from "react-redux";
import { setview, todosViewSelector } from "../../entities/todo/model";

const FilterTodo = () => {
  const dispatch = useDispatch();
  const view = useSelector(todosViewSelector);

  return (
    <div>
      <div>
        <small>Filter todo</small>
      </div>
      <div className="flex gap-1">
        <button
          className={view === "all" ? "active" : ""}
          onClick={() => dispatch(setview("all"))}
        >
          all
        </button>
        <button
          className={view === "done" ? "active" : ""}
          onClick={() => dispatch(setview("done"))}
        >
          done
        </button>
        <button
          className={view === "todo" ? "active" : ""}
          onClick={() => dispatch(setview("todo"))}
        >
          todo
        </button>
      </div>
    </div>
  );
};

export default FilterTodo;
