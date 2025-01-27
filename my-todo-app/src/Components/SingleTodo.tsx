import { Todo } from "./model"; // Importing the Todo type for type safety
import { MdEdit, MdDelete, MdDone } from "react-icons/md"; 
import "./input.css"; 
import React, { useEffect, useRef, useState } from "react"; // Importing necessary React hooks

// Defining the Props type for the component
type Props = {
  todo: Todo; // Single to-do item
  todos: Todo[]; // Array of all to-do items
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>; // Function to update the to-do list
};

// Functional component to render and manage a single to-do item
const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  // State to manage whether the to-do is in edit mode
  const [edit, setEdit] = useState<boolean>(false);
  // State to store the edited value of the to-do
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  // Toggle the done state of a to-do item
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  // Remove a to-do item from the list
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Save changes to a to-do after editing
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault(); // Prevent default form submission behavior
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false); // Exit edit mode
  };

  // Reference for the input field to focus when editing
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-focus the input field when edit mode is activated
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form
      className="todos-single" // CSS class for styling a single to-do item
      onSubmit={(e) => handleEdit(e, todo.id)} // Handle edit on form submission
    >
      {edit ? (
        // Input field for editing a to-do item
        <input
          ref={inputRef} // Attach the reference for auto-focus
          value={editTodo} // Bind the input value to the editTodo state
          onChange={(e) => setEditTodo(e.target.value)} // Update editTodo on input change
          className="todos-single-text" // CSS class for styling
        />
      ) : todo.isDone ? (
        // Strikethrough text for completed to-dos
        <s className="todos-single-text">{todo.todo}</s>
      ) : (
        // Display text for incomplete to-dos
        <span className="todos-single-text">{todo.todo}</span>
      )}

      {/* Icons for edit, delete, and done actions */}
      <div className="todo-icons">
        {/* Edit icon - toggles edit mode if not already editing or completed */}
        <span
          className="icon"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <MdEdit />
        </span>
        {/* Delete icon - removes the to-do */}
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <MdDelete />
        </span>
        {/* Done icon - toggles the done state */}
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo; // Exporting the SingleTodo component for reuse
