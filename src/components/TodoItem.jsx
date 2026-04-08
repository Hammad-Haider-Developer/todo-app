import React from "react";
import { useState } from "react";

const TodoItem = ({ todo, deleteTodo, toggleTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    editTodo(todo.id, newText);
    setIsEditing(false);
  };
  return (
    <>
      <div className="todoItem">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />

        {isEditing ? (
          <input value={newText} onChange={(e) => setNewText(e.target.value)} />
        ) : (
          <span className={todo.completed ? "completed" : ""}>{todo.text}</span>
        )}

        {isEditing ? (
          <button onClick={handleEdit}>Save</button>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}

        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </div>
    </>
  );
};

export default TodoItem;
