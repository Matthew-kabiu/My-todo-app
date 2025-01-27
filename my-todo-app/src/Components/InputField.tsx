import { useRef } from "react";
import "./input.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props>  = ({todo, setTodo ,handleAdd }) => {
  // Use Reference Hook With Type Script
  const inputRef = useRef<HTMLInputElement>(null);



  return (
    <form action="" className="form" onSubmit={(e)=>{
      handleAdd(e)
      inputRef.current?.blur();
      }}>
      <input ref={inputRef} type="input" placeholder="Enter a task" className="input" value={todo} onChange={(e)=>setTodo(e.target.value)}/>
      <button className="form-submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputField;
