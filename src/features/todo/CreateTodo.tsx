import { useState } from "react";
import { useDispatch } from "react-redux";
import { createtodo } from "../../entities/todo/model";
import { textLimit } from "../../shared/config";

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
        className="block p-1 w-full no-border"
        placeholder="Write something to do..."
        value={input}
        onChange={(e) => {
          if (e.target.value.length < textLimit) {
            setInput(e.target.value);
          }
        }}
      />
    </form>
  );
};

export default CreateTodo;
