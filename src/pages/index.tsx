import { useSelector } from "react-redux";
import { detailsModalSelector } from "../entities/UI/model";
import Todo from "./Todo";
import TodoDetails from "../modals/todo/TodoDetails";

const Routing = () => {
  const detailsModal = useSelector(detailsModalSelector);

  return (
    <>
      {/* NOTE: zero is false in TS */}
      {detailsModal.show && detailsModal.id !== undefined && (
        <div className="overlay">
          <TodoDetails id={detailsModal.id} />
        </div>
      )}
      <Todo />
    </>
  );
};

export default Routing;
