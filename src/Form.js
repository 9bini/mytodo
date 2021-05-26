import { useRef, useContext } from 'react';
import { TodoContext } from './TodoStore';

const Form = () => {
  const inputRef = useRef(false);
  const { addTodo } = useContext(TodoContext);

  const addTodoData = (e) => {
    e.preventDefault();
    addTodo(inputRef.current.value);
  };

  return (
    <form>
      <input type="text" ref={inputRef} />
      <button onClick={addTodoData}>할일추가</button>
    </form>
  );
};

export default Form;
