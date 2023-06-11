import { useSelector } from "react-redux";
import { detailsModalSelector } from "../entities/UI/model";
import Todo from "./Todo";
import TodoDetails from "../modals/todo/TodoDetails";

const Routing = () => {
  const detailsModal = useSelector(detailsModalSelector);

  return (
    <>
      {detailsModal.show && (
        <div className="overlay">
          <TodoDetails />
        </div>
      )}
      <Todo />
    </>
  );
};

export default Routing;
