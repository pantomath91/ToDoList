import React, { useContext } from "react";
import { toggleTodo } from "../store/todos/actions";
import TodoList from "../components/TodoList";
import StoreContext from "../store/StoreContext";
import { TodoType } from "../store/todos/types";

const getVisibleTodos = (todos: TodoType[]) => {
  return todos;
};

const VisibleTodoList = () => {
  const [{ todos }, dispatch] = useContext(StoreContext);
  return (
    <TodoList
      todos={getVisibleTodos(todos)}
      toggleTodo={id => dispatch(toggleTodo(id))}
    />
  );
};

export default VisibleTodoList;
