import { useRef } from "react"; // Importing the useRef hook for managing input focus
import "./input.css"; 

// Defining the Props interface to specify the expected props for the component
interface Props {
  todo: string; // Current value of the to-do input field
  setTodo: React.Dispatch<React.SetStateAction<string>>; // Function to update the to-do state
  handleAdd: (e: React.FormEvent) => void; // Function to handle form submission
}

// Functional component with destructured props
const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  // Creating a reference for the input field to manage focus
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      action="" // Form action left empty as it's handled programmatically
      className="form" // CSS class for styling the form
      onSubmit={(e) => {
        handleAdd(e); // Call the handleAdd function on form submission
        inputRef.current?.blur(); // Remove focus from the input field after submission
      }}
    >
      {/* Input field for entering a task */}
      <input
        ref={inputRef} // Attach the reference to the input field
        type="input" // Input type as text
        placeholder="Enter a task" // Placeholder text for the input
        className="input" // CSS class for styling the input
        value={todo} // Bind the input value to the todo state
        onChange={(e) => setTodo(e.target.value)} // Update the todo state on input change
      />
      {/* Button to submit the form */}
      <button className="form-submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField; // Exporting the InputField component for reuse
