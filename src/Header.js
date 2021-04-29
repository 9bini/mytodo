import { useContext } from "react";
import { TodoContext } from "./TodoStore";
import "./Header.css";

const Header = () => {
  const { todos } = useContext(TodoContext);
  return (
    <>
      <h1>Hello TODO 애플리케이션</h1>
      <div className="countInfo">
        해야할일 : {todos.filter((todo) => todo.status === "todo").length} 개가
        있습니다.
      </div>
    </>
  );
};

export default Header;
