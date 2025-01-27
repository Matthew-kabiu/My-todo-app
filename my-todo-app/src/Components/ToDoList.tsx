import "./input.css"; // Importing CSS for styling
import { Todo } from "./model"; // Importing the Todo type for type safety
import SingleTodo from "./SingleTodo"; // Importing the SingleTodo component

// Defining the Props interface for type safety
interface Props {
  todos: Todo[]; // Array of to-do items
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>; // Function to update the to-do list
}

// Functional component to render the list of to-dos
const ToDoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="todos"> {/* CSS class for styling the to-do list container */}
      {/* Mapping through the todos array to render each to-do item */}
      {todos.map((todo) => (
        <SingleTodo
          todo={todo} // Passing the current to-do item as a prop
          key={todo.id} // Unique key for each to-do (required for React rendering)
          todos={todos} // Passing the entire to-do list as a prop
          setTodos={setTodos} // Passing the state updater function as a prop
        />
      ))}
    </div>
  );
};

export default ToDoList; // Exporting the ToDoList component for reuse
