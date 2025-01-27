import { useState } from "react"; // Importing useState hook for managing component state
import "./App.css"; // Importing CSS for styling the app
import InputField from "./Components/InputField"; // Importing the InputField component
import { Todo } from "./Components/model"; // Importing the Todo type for type safety
import ToDoList from "./Components/ToDoList"; // Importing the ToDoList component

// Main App component
const App: React.FC = () => {
  // State to manage the current input value for the to-do
  const [todo, setTodo] = useState<string>("");
  // State to manage the list of to-do items
  const [todos, setTodos] = useState<Todo[]>([]);

  // Function to handle adding a new to-do item
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission behavior

    if (todo) {
      // Add a new to-do to the list with a unique id and default isDone status
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo(""); // Clear the input field after adding
    }
  };

  console.log(todos); // Log the current state of todos (for debugging purposes)

  return (
    <div className="App">
      <span className="heading">Taskify</span> {/* App heading */}
      {/* Input field for adding a new task */}
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      {/* List of to-dos */}
      <ToDoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App; // Exporting the App component for rendering
