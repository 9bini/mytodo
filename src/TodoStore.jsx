import React, { useEffect, useState } from "react";
import Form from "./Form.js";
import Header from "./Header.js";
import List from "./List.jsx";
import useFetch from "./uesFetch.js";

export const TodoContext = React.createContext();

function TodoStore() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState();

  const loading = useFetch(setTodos, "http://localhost:8080/todo");

  const changeInputData = (e) => {
    setNewTodo(e.target.value);
  };

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, { title: newTodo, id: todos.length, status: "todo" }]);
  };

  const changeTodoStatus = (id) => {
    const updateTodos = todos.map((todo) => {
      if (todo.id === +id) {
        if (todo.status === "done") todo.status = "todo";
        else todo.status = "done";
      }
      return todo;
    });

    setTodos(updateTodos);
  };

  useEffect(() => {
    console.log("새로운 내용이 렌더링됐네요", todos);
  }, [todos]);

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, changeInputData, loading, changeTodoStatus }}
    >
      <Header />
      <Form />
      <List />
    </TodoContext.Provider>
  );
}

export default TodoStore;
