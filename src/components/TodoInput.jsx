import React from "react";
import { useState } from "react";

const TodoInput = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    addTodo(text);
    setText("");
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="inputBox">
        <input
          type="text"
          placeholder="Enter todo..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button
          style={{
            backgroundColor: "red",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          Add
        </button>
      </form>
    </>
  );
};

export default TodoInput;
