import { useState } from "react";
import { useDispatch } from "react-redux";
import { createtodo } from "../../entities/todo/model";

const CreateTodo = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(createtodo(input));
        setInput("");
      }}
    >
      <input
        className="block p-1 w-full"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
};

export default CreateTodo;
